import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function WhatsAppPage() {
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <View className="flex-1 items-center justify-center px-6">
        <View className="bg-green-500 rounded-full p-8 mb-6">
          <Ionicons name="logo-whatsapp" size={64} color="white" />
        </View>
        <Text className="text-3xl font-bold text-gray-800 mb-4">
          WhatsApp
        </Text>
        <Text className="text-center text-gray-600 mb-8">
          Connect with us on WhatsApp
        </Text>
        <Pressable
          onPress={() => router.back()}
          className="bg-green-500 px-6 py-3 rounded-full"
        >
          <Text className="text-white font-bold">Go Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
