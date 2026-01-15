import { View, Text, ScrollView } from 'react-native';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 p-5 bg-gray-50">
      <View className="items-center mt-10 mb-8">
        <Text className="text-4xl font-bold text-primary mb-2">🎉 Welcome!</Text>
        <Text className="text-lg text-gray-600 text-center">
          You've successfully set up your React Native Expo Starter!
        </Text>
      </View>
      
      <Card className="mb-4">
        <Text className="text-base font-semibold mb-2">✨ What's Included:</Text>
        <Text className="text-sm text-gray-700 mb-1">• Expo Router (File-based routing)</Text>
        <Text className="text-sm text-gray-700 mb-1">• TypeScript Support</Text>
        <Text className="text-sm text-gray-700 mb-1">• Redux Toolkit</Text>
        <Text className="text-sm text-gray-700 mb-1">• NativeWind (Tailwind CSS)</Text>
        <Text className="text-sm text-gray-700">• Ready-to-use UI Components</Text>
      </Card>

      <Card className="mb-4">
        <Text className="text-base font-semibold mb-2">🚀 Get Started:</Text>
        <Text className="text-sm text-gray-700">
          Start building your amazing app! All the tools you need are already configured and ready to use.
        </Text>
      </Card>

      <View className="mt-4">
        <Link href="/create" asChild>
          <Button title="Create Something" />
        </Link>
        <Link href="/profile" asChild>
          <Button title="View Profile" />
        </Link>
      </View>
    </ScrollView>
  );
}
