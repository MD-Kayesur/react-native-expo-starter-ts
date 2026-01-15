import { View, Text } from 'react-native';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function CreateScreen() {
  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="text-2xl font-bold mb-5">Create</Text>
      <Input placeholder="Title" />
      <Input placeholder="Description" multiline />
      <Button title="Submit" onPress={() => {}} />
    </View>
  );
}
