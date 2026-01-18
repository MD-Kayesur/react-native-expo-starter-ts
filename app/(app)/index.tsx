import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, View, ScrollView } from 'react-native'
import { SignOutButton } from '../components/SignOutButton'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
  

export default function Page() {
  const { user } = useUser()
  const router = useRouter()

  return (
    <ScrollView className="flex-1 p-5 bg-gray-50">
      <SignedIn>
        <View className="items-center mt-10 mb-8">
          <Text className="text-4xl font-bold text-primary mb-2">🎉 Welcome!</Text>
          <Text className="text-lg text-gray-600 text-center mb-2">
            Hello {user?.emailAddresses[0]?.emailAddress}
          </Text>
          <Text className="text-lg text-gray-600 text-center">
            You've successfully set up your React Native Expo Starter with Clerk!
          </Text>
        </View>
        
        <Card className="mb-4">
          <Text className="text-base font-semibold mb-2">✨ What's Included:</Text>
          <Text className="text-sm text-gray-700 mb-1">• Expo Router (File-based routing)</Text>
          <Text className="text-sm text-gray-700 mb-1">• TypeScript Support</Text>
          <Text className="text-sm text-gray-700 mb-1">• Redux Toolkit</Text>
          <Text className="text-sm text-gray-700 mb-1">• NativeWind (Tailwind CSS)</Text>
          <Text className="text-sm text-gray-700 mb-1">• Ready-to-use UI Components</Text>
          <Text className="text-sm text-gray-700">• Clerk Authentication</Text>
        </Card>

        <Card className="mb-4">
          <Text className="text-base font-semibold mb-2">🚀 Get Started:</Text>
          <Text className="text-sm text-gray-700">
            Start building your amazing app! All the tools you need are already configured and ready to use.
          </Text>
        </Card>

        <Card className="mb-4">
          <Text className="text-base font-semibold mb-2">📱 Navigation:</Text>
          <Text className="text-sm text-gray-700 mb-1">
            Use the bottom tabs to navigate between Home, Workouts, and Profile
          </Text>
        </Card>

        <View className="mt-4 gap-3">
          <Link href="/create" asChild>
            <View>
              <Button title="Create Something" onPress={() => {}} />
            </View>
          </Link>
        </View>
        
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <View className="items-center mt-10 mb-8">
          <Text className="text-4xl font-bold text-primary mb-2">Welcome!</Text>
          <Text className="text-lg text-gray-600 text-center">
            Please sign in to continue
          </Text>
        </View>
        <View className="mt-4 gap-3">
          <Link href="/(auth)/sign-in" asChild>
            <View>
              <Button title="Sign In" onPress={() => {}} />
            </View>
          </Link>
          <Link href="/(auth)/sign-up" asChild>
            <View>
              <Button title="Sign Up" onPress={() => {}} />
            </View>
          </Link>
        </View>
      </SignedOut>
    </ScrollView>
  )
}

