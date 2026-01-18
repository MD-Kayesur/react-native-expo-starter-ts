import { View, Text, ScrollView } from 'react-native';
import { Card } from '../../components/ui/Card';
 import { useUser } from '@clerk/clerk-expo';
import { SignOutButton } from '../components/SignOutButton';

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    <ScrollView className="flex-1 p-5 bg-gray-50">
      <View className="items-center mt-10 mb-8">
        <Text className="text-4xl font-bold text-primary mb-2">Profile</Text>
      </View>
      
      <Card className="mb-4">
        <Text className="text-base font-semibold mb-2">User Information</Text>
        <Text className="text-sm text-gray-700 mb-1">
          Email: {user?.emailAddresses[0]?.emailAddress || 'Not available'}
        </Text>
        <Text className="text-sm text-gray-700">
          Name: {user?.fullName || user?.firstName || 'Not set'}
        </Text>
      </Card>

      <SignOutButton />
    </ScrollView>
  );
}
