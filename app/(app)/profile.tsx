import { View, Text } from 'react-native';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../hooks/useAuth';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();

  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="text-2xl font-bold mb-5">Profile</Text>
      <Card>
        <Text className="text-base">User: {user?.email || 'Not logged in'}</Text>
      </Card>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
