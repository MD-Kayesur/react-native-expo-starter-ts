import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

export default function SignInPage() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSignInPress = async () => {
    if (!isLoaded || !email || !password) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }
    
    setLoading(true)

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        router.replace('/')
      } else {
        Alert.alert('Error', 'Sign in incomplete. Try again.')
      }
    } catch (err: any) {
      Alert.alert(
        'Sign In Failed', 
        err?.errors?.[0]?.message || 'Invalid email or password'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={tw`flex-1 bg-white p-6 justify-center`}>
      
      {/* Header */}
      <View style={tw`items-center mb-10`}>
        <View style={tw`w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-4`}>
          <Ionicons name="lock-closed" size={40} color="#3b82f6" />
        </View>
        <Text style={tw`text-3xl font-bold text-gray-800`}>Welcome Back</Text>
        <Text style={tw`text-gray-500 mt-2`}>Sign in to your account</Text>
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

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={onSignInPress}
        disabled={loading || !email || !password}
        style={[
          tw`bg-blue-600 rounded-xl p-4 items-center justify-center mb-5`,
          (loading || !email || !password) && tw`opacity-50`
        ]}
      >
        <Text style={tw`text-white text-lg font-bold`}>
          {loading ? 'Signing In...' : 'Sign In'}
        </Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity style={tw`items-center mb-8`}>
        <Text style={tw`text-blue-600 font-medium`}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={tw`flex-row items-center justify-center border-t border-gray-200 pt-6`}>
        <Text style={tw`text-gray-600`}>Don't have an account? </Text>
        <Link href="/(auth)/sign-up" asChild>
          <TouchableOpacity>
            <Text style={tw`text-blue-600 font-bold`}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Quick Sign In Tips */}
      <View style={tw`mt-10 p-4 bg-gray-50 rounded-xl`}>
        <Text style={tw`text-gray-500 text-sm text-center`}>
          💡 Use the email you signed up with
        </Text>
      </View>
    </View>
  )
}





 