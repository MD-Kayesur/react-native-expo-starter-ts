import { View, Text } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useAuth } from '../../hooks/useAuth';

export default function SignInScreen() {
  const { signIn } = useAuth();

  return (
    <View className="flex-1 p-5 justify-center bg-white">
      <Text className="text-2xl font-bold mb-5">Sign In</Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Button title="Sign In" onPress={() => signIn()} />
    </View>
  );
}
