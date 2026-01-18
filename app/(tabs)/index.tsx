import { ImageBackground, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("@/assets/images/bgGym.jpg")}
      resizeMode="cover"
      className="flex-1"
    >
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-4xl font-bold text-white mb-4">Welcome</Text>

        {/* Paragraph */}
        <Text className="text-center text-gray-200 text-base mb-6">
          Start your fitness journey with us. Train hard, stay consistent, and
          achieve your goals step by step.
        </Text>

        {/* Button */}
        <Pressable className="bg-red-600 px-8 py-3 rounded-full">
          <Text className="text-white font-bold text-lg">Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
