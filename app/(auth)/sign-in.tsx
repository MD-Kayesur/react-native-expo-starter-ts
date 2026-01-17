import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return
    
    setError('')
    setLoading(true)

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      })

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        setError('Sign in incomplete. Please try again.')
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      let errorMessage = 'An error occurred during sign in'
      
      if (err?.errors?.[0]?.message) {
        errorMessage = err.errors[0].message
      } else if (err?.message) {
        errorMessage = err.message
      } else if (err?.status === 401 || err?.statusCode === 401) {
        errorMessage = 'Invalid email or password. Please check your credentials.'
      } else if (err?.status === 403 || err?.statusCode === 403) {
        errorMessage = 'Access denied. Please check your Clerk configuration.'
      } else if (err?.status === 0 || err?.code === 'NETWORK_ERROR') {
        errorMessage = 'Network error. Please check your internet connection.'
      }
      
      setError(errorMessage)
      console.error('Sign in error:', JSON.stringify(err, null, 2))
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 p-5 justify-center bg-white">
      <Text className="text-2xl font-bold mb-5">Sign in</Text>
      
      {error ? (
        <View className="bg-red-100 border-2 border-red-500 rounded-lg p-4 mb-4 shadow-lg">
          <Text className="text-red-800 font-bold text-base mb-2">⚠️ Error</Text>
          <Text className="text-red-700 text-sm leading-5" numberOfLines={5}>
            {error}
          </Text>
        </View>
      ) : null}
      
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(emailAddress) => {
          setEmailAddress(emailAddress)
          setError('')
        }}
        editable={!loading}
      />
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => {
          setPassword(password)
          setError('')
        }}
        editable={!loading}
      />
      <TouchableOpacity
        className={`rounded-lg p-3 items-center mb-4 ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
        onPress={onSignInPress}
        disabled={loading || !isLoaded}
      >
        <Text className="text-white font-semibold">
          {loading ? 'Signing in...' : 'Continue'}
        </Text>
      </TouchableOpacity>
      <View className="flex-row gap-1 items-center justify-center">
        <Text>Don't have an account?</Text>
        <Link href="/(auth)/sign-up">
          <Text className="text-blue-500 font-semibold">Sign up</Text>
        </Link>
      </View>
    </View>
  )
}

