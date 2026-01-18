import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contact() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-black">
      <View className="flex-1 px-6 justify-center">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className="text-4xl font-extrabold text-red-800 dark:text-red-400">
            Contact Us
          </Text>
          <Text className="text-gray-500 dark:text-gray-400 mt-2 text-center">
            We'd love to hear from you 💬
          </Text>
        </View>

        {/* Card */}
        <View className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <View className="mb-4">
            <Text className="text-gray-400 text-sm">Email</Text>
            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
              mrshaikot01@gmail.com
            </Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-400 text-sm">Phone</Text>
            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
              +880 1234-567890
            </Text>
          </View>

          <View>
            <Text className="text-gray-400 text-sm">Location</Text>
            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
              Dhaka, Bangladesh
            </Text>
          </View>
        </View>

        {/* CTA */}
        <Pressable className="mt-8 bg-red-800 py-4 rounded-xl items-center">
          <Text className="text-white text-lg font-bold">Send Message</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
