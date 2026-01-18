
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











// import * as React from 'react'
// import { Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { useSignUp } from '@clerk/clerk-expo'
// import { Link, useRouter } from 'expo-router'

// export default function SignUpScreen() {
//   const { isLoaded, signUp, setActive } = useSignUp()
//   const router = useRouter()

//   const [emailAddress, setEmailAddress] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [pendingVerification, setPendingVerification] = React.useState(false)
//   const [code, setCode] = React.useState('')
//   const [error, setError] = React.useState('')
//   const [loading, setLoading] = React.useState(false)

//   // Handle submission of sign-up form
//   const onSignUpPress = async () => {
//     if (!isLoaded) return

//     setError('')
//     setLoading(true)

//     // Start sign-up process using email and password provided
//     try {
//       await signUp.create({
//         emailAddress,
//         password,
//       })

//       // Send user an email with verification code
//       await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

//       // Set 'pendingVerification' to true to display second form
//       // and capture OTP code
//       setPendingVerification(true)
//     } catch (err: any) {
//       // See https://clerk.com/docs/custom-flows/error-handling
//       // for more info on error handling
//       let errorMessage = 'An error occurred during sign up'
      
//       if (err?.errors?.[0]?.message) {
//         errorMessage = err.errors[0].message
//       } else if (err?.message) {
//         errorMessage = err.message
//       } else if (err?.status === 401 || err?.statusCode === 401) {
//         errorMessage = 'Invalid credentials. Please check your email and password.'
//       } else if (err?.status === 403 || err?.statusCode === 403) {
//         errorMessage = 'Access denied. Please check your Clerk configuration.'
//       } else if (err?.status === 0 || err?.code === 'NETWORK_ERROR') {
//         errorMessage = 'Network error. Please check your internet connection.'
//       }
      
//       setError(errorMessage)
//       console.error('Sign up error:', JSON.stringify(err, null, 2))
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Handle submission of verification form
//   const onVerifyPress = async () => {
//     if (!isLoaded) return

//     setError('')
//     setLoading(true)

//     try {
//       // Use the code the user provided to attempt verification
//       const signUpAttempt = await signUp.attemptEmailAddressVerification({
//         code,
//       })

//       // If verification was completed, set the session to active
//       // and redirect the user
//       if (signUpAttempt.status === 'complete') {
//         await setActive({ session: signUpAttempt.createdSessionId })
//         router.replace('/')
//       } else {
//         // If the status is not complete, check why. User may need to
//         // complete further steps.
//         setError('Verification incomplete. Please try again.')
//         console.error(JSON.stringify(signUpAttempt, null, 2))
//       }
//     } catch (err: any) {
//       // See https://clerk.com/docs/custom-flows/error-handling
//       // for more info on error handling
//       let errorMessage = 'Invalid verification code'
      
//       if (err?.errors?.[0]?.message) {
//         errorMessage = err.errors[0].message
//       } else if (err?.message) {
//         errorMessage = err.message
//       } else if (err?.status === 0 || err?.code === 'NETWORK_ERROR') {
//         errorMessage = 'Network error. Please check your internet connection.'
//       }
      
//       setError(errorMessage)
//       console.error('Verification error:', JSON.stringify(err, null, 2))
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (pendingVerification) {
//     return (
//       <View className="flex-1 p-5 justify-center bg-white">
//         <Text className="text-2xl font-bold mb-5">Verify your email</Text>
        
//         {error ? (
//           <View className="bg-red-100 border-2 border-red-500 rounded-lg p-4 mb-4 shadow-lg">
//             <Text className="text-red-800 font-bold text-base mb-2">⚠️ Error</Text>
//             <Text className="text-red-700 text-sm leading-5" numberOfLines={5}>
//               {error}
//             </Text>
//           </View>
//         ) : null}
        
//         <TextInput
//           className="border border-gray-300 rounded-lg p-3 mb-4"
//           value={code}
//           placeholder="Enter your verification code"
//           onChangeText={(code) => {
//             setCode(code)
//             setError('')
//           }}
//           editable={!loading}
//         />
//         <TouchableOpacity
//           className={`rounded-lg p-3 items-center mb-4 ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
//           onPress={onVerifyPress}
//           disabled={loading || !isLoaded}
//         >
//           <Text className="text-white font-semibold">
//             {loading ? 'Verifying...' : 'Verify'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }

//   return (
//     <View className="flex-1 p-5 justify-center bg-white">
//       <Text className="text-2xl font-bold mb-5">Sign up</Text>
      
//       {error ? (
//         <View className="bg-red-100 border-2 border-red-500 rounded-lg p-4 mb-4 shadow-lg">
//           <Text className="text-red-800 font-bold text-base mb-2">⚠️ Error</Text>
//           <Text className="text-red-700 text-sm leading-5" numberOfLines={5}>
//             {error}
//           </Text>
//         </View>
//       ) : null}
      
//       <TextInput
//         className="border border-gray-300 rounded-lg p-3 mb-4"
//         autoCapitalize="none"
//         value={emailAddress}
//         placeholder="Enter email"
//         onChangeText={(email) => {
//           setEmailAddress(email)
//           setError('')
//         }}
//         editable={!loading}
//       />
//       <TextInput
//         className="border border-gray-300 rounded-lg p-3 mb-4"
//         value={password}
//         placeholder="Enter password"
//         secureTextEntry={true}
//         onChangeText={(password) => {
//           setPassword(password)
//           setError('')
//         }}
//         editable={!loading}
//       />
//       <TouchableOpacity
//         className={`rounded-lg p-3 items-center mb-4 ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
//         onPress={onSignUpPress}
//         disabled={loading || !isLoaded}
//       >
//         <Text className="text-white font-semibold">
//           {loading ? 'Creating account...' : 'Continue'}
//         </Text>
//       </TouchableOpacity>
//       <View className="flex-row gap-1 items-center justify-center">
//         <Text>Already have an account?</Text>
//         <Link href="/(auth)/sign-in">
//           <Text className="text-blue-500 font-semibold">Sign in</Text>
//         </Link>
//       </View>
//     </View>
//   )
// }

