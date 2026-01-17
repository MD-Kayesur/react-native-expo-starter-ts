import { View, Text, ScrollView } from 'react-native'
import { Platform } from 'react-native'

export default function MissingKeyScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-6 justify-center items-center min-h-screen">
        <View className="bg-red-100 border-2 border-red-500 rounded-lg p-6 mb-4 w-full max-w-md">
          <Text className="text-red-800 font-bold text-xl mb-3 text-center">
            ⚠️ Configuration Error
          </Text>
          <Text className="text-red-700 text-base mb-4 text-center">
            Clerk Publishable Key is missing!
          </Text>
          
          <View className="bg-white rounded-lg p-4 mb-4">
            <Text className="text-gray-800 font-semibold mb-2">To fix this:</Text>
            <Text className="text-gray-700 text-sm mb-1">
              1. Create a .env file in the root directory
            </Text>
            <Text className="text-gray-700 text-sm mb-1">
              2. Add your Clerk publishable key:
            </Text>
            <View className="bg-gray-100 rounded p-2 mt-2">
              <Text className="text-gray-900 text-xs font-mono">
                EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key
              </Text>
            </View>
            <Text className="text-gray-700 text-sm mt-3">
              3. Restart the development server
            </Text>
          </View>

          <View className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
            <Text className="text-yellow-800 text-xs text-center">
              Get your key from: https://dashboard.clerk.com
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
