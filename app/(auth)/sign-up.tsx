import * as React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return

    setError('')
    setLoading(true)

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true)
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      let errorMessage = 'An error occurred during sign up'
      
      if (err?.errors?.[0]?.message) {
        errorMessage = err.errors[0].message
      } else if (err?.message) {
        errorMessage = err.message
      } else if (err?.status === 401 || err?.statusCode === 401) {
        errorMessage = 'Invalid credentials. Please check your email and password.'
      } else if (err?.status === 403 || err?.statusCode === 403) {
        errorMessage = 'Access denied. Please check your Clerk configuration.'
      } else if (err?.status === 0 || err?.code === 'NETWORK_ERROR') {
        errorMessage = 'Network error. Please check your internet connection.'
      }
      
      setError(errorMessage)
      console.error('Sign up error:', JSON.stringify(err, null, 2))
    } finally {
      setLoading(false)
    }
  }

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return

    setError('')
    setLoading(true)

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
        router.replace('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        setError('Verification incomplete. Please try again.')
        console.error(JSON.stringify(signUpAttempt, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      let errorMessage = 'Invalid verification code'
      
      if (err?.errors?.[0]?.message) {
        errorMessage = err.errors[0].message
      } else if (err?.message) {
        errorMessage = err.message
      } else if (err?.status === 0 || err?.code === 'NETWORK_ERROR') {
        errorMessage = 'Network error. Please check your internet connection.'
      }
      
      setError(errorMessage)
      console.error('Verification error:', JSON.stringify(err, null, 2))
    } finally {
      setLoading(false)
    }
  }

  if (pendingVerification) {
    return (
      <View className="flex-1 p-5 justify-center bg-white">
        <Text className="text-2xl font-bold mb-5">Verify your email</Text>
        
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
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => {
            setCode(code)
            setError('')
          }}
          editable={!loading}
        />
        <TouchableOpacity
          className={`rounded-lg p-3 items-center mb-4 ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
          onPress={onVerifyPress}
          disabled={loading || !isLoaded}
        >
          <Text className="text-white font-semibold">
            {loading ? 'Verifying...' : 'Verify'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View className="flex-1 p-5 justify-center bg-white">
      <Text className="text-2xl font-bold mb-5">Sign up</Text>
      
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
        onChangeText={(email) => {
          setEmailAddress(email)
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
        onPress={onSignUpPress}
        disabled={loading || !isLoaded}
      >
        <Text className="text-white font-semibold">
          {loading ? 'Creating account...' : 'Continue'}
        </Text>
      </TouchableOpacity>
      <View className="flex-row gap-1 items-center justify-center">
        <Text>Already have an account?</Text>
        <Link href="/(auth)/sign-in">
          <Text className="text-blue-500 font-semibold">Sign in</Text>
        </Link>
      </View>
    </View>
  )
}

