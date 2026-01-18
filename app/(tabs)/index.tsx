import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const { height } = useWindowDimensions();
  const centerY = height * 0.4;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        {/* Floating Icons on Right */}
        <View
          style={{
            position: "absolute",
            right: 16,
            top: centerY,
            gap: 16,
          }}
        >
          <Pressable
            className="rounded-full items-center justify-center"
            style={{
              width: 48,
              height: 48,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Ionicons name="grid" size={24} color="black" />
          </Pressable>
          <Pressable
            className="rounded-full items-center justify-center"
            style={{
              width: 48,
              height: 48,
              backgroundColor: "#9333EA",
            }}
          >
            <Text className="text-white font-bold text-lg">K</Text>
          </Pressable>
        </View>

        {/* Main Content */}
        <View className="items-center">
          <Text className="text-5xl font-bold text-black mb-4">Welcome</Text>

          {/* Paragraph */}
          <Text className="text-center text-gray-700 text-base mb-8 leading-6 max-w-xs">
            Start your fitness journey with us. Train hard, stay consistent, and
            achieve your goals step by step.
          </Text>

          {/* Button */}
          <Pressable className="bg-red-600 px-8 py-4 rounded-full">
            <Text className="text-white font-bold text-lg">GET STARTED</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
