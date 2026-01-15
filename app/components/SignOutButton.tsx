import { useClerk } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()
  const router = useRouter()
  
  const handleSignOut = async () => {
    try {
      await signOut()
      // Redirect to sign-in page
      router.replace('/(auth)/sign-in')
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }
  return (
    <TouchableOpacity
      className="bg-red-500 rounded-lg p-3 items-center mt-4"
      onPress={handleSignOut}
    >
      <Text className="text-white font-semibold">Sign out</Text>
    </TouchableOpacity>
  )
}
