
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)

  // Handle sign up
  const onSignUpPress = async () => {
    if (!isLoaded || !email || !password) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }

    setLoading(true)

    try {
      await signUp.create({
        emailAddress: email,
        password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setPendingVerification(true)
      Alert.alert('Success', 'Verification code sent to your email')
    } catch (err: any) {
      Alert.alert(
        'Sign Up Failed', 
        err?.errors?.[0]?.message || 'Please check your email and password'
      )
    } finally {
      setLoading(false)
    }
  }

  // Handle verification
  const onVerifyPress = async () => {
    if (!isLoaded || !code) {
      Alert.alert('Error', 'Please enter verification code')
      return
    }

    setLoading(true)

    try {
      const result = await signUp.attemptEmailAddressVerification({ code })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        router.replace('/')
        Alert.alert('Success', 'Account created successfully!')
      }
    } catch (err) {
      Alert.alert('Error', 'Invalid verification code')
    } finally {
      setLoading(false)
    }
  }

  // Verification screen
  if (pendingVerification) {
    return (
      <View style={tw`flex-1 bg-white p-6 justify-center`}>
        
        {/* Header */}
        <View style={tw`items-center mb-10`}>
          <View style={tw`w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-4`}>
            <Ionicons name="mail" size={40} color="#10b981" />
          </View>
          <Text style={tw`text-3xl font-bold text-gray-800`}>Verify Email</Text>
          <Text style={tw`text-gray-500 mt-2 text-center`}>
            Enter the 6-digit code sent to{'\n'}
            <Text style={tw`font-semibold`}>{email}</Text>
          </Text>
        </View>

        {/* Code Input */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 mb-2 font-medium`}>Verification Code</Text>
          <TextInput
            style={tw`border border-gray-300 rounded-xl p-4 text-lg text-center font-bold tracking-wider bg-white`}
            placeholder="123456"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            maxLength={6}
            editable={!loading}
          />
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          onPress={onVerifyPress}
          disabled={loading || !code}
          style={[
            tw`bg-green-600 rounded-xl p-4 items-center justify-center mb-5`,
            (loading || !code) && tw`opacity-50`
          ]}
        >
          <Text style={tw`text-white text-lg font-bold`}>
            {loading ? 'Verifying...' : 'Verify Email'}
          </Text>
        </TouchableOpacity>

        {/* Resend Code */}
        <TouchableOpacity style={tw`items-center`}>
          <Text style={tw`text-blue-600 font-medium`}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // Sign up screen
  return (
    <View style={tw`flex-1 bg-white p-6 justify-center`}>
      
      {/* Header */}
      <View style={tw`items-center mb-10`}>
        <View style={tw`w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-4`}>
          <Ionicons name="person-add" size={40} color="#3b82f6" />
        </View>
        <Text style={tw`text-3xl font-bold text-gray-800`}>Create Account</Text>
        <Text style={tw`text-gray-500 mt-2`}>Join us today!</Text>
      </View>

      {/* Email Input */}
      <View style={tw`mb-5`}>
        <Text style={tw`text-gray-700 mb-2 font-medium`}>Email</Text>
        <TextInput
          style={tw`border border-gray-300 rounded-xl p-4 text-lg bg-white`}
          placeholder="your@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />
      </View>

      {/* Password Input */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-gray-700 mb-2 font-medium`}>Password</Text>
        <TextInput
          style={tw`border border-gray-300 rounded-xl p-4 text-lg bg-white`}
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!loading}
        />
      </View>

      {/* Password Requirements */}
      <View style={tw`mb-8 p-4 bg-gray-50 rounded-xl`}>
        <Text style={tw`text-gray-600 text-sm font-medium mb-2`}>Password must:</Text>
        <Text style={tw`text-gray-500 text-sm`}>• Be at least 8 characters</Text>
        <Text style={tw`text-gray-500 text-sm`}>• Include letters and numbers</Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={onSignUpPress}
        disabled={loading || !email || !password}
        style={[
          tw`bg-blue-600 rounded-xl p-4 items-center justify-center mb-5`,
          (loading || !email || !password) && tw`opacity-50`
        ]}
      >
        <Text style={tw`text-white text-lg font-bold`}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <View style={tw`flex-row items-center justify-center border-t border-gray-200 pt-6`}>
        <Text style={tw`text-gray-600`}>Already have an account? </Text>
        <Link href="/(auth)/sign-in" asChild>
          <TouchableOpacity>
            <Text style={tw`text-blue-600 font-bold`}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Terms */}
      <Text style={tw`text-gray-400 text-sm text-center mt-8`}>
        By signing up, you agree to our Terms & Privacy
      </Text>
    </View>
  )
}


 