import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const workouts = [
  {
    id: 1,
    title: "Full Body Workout",
    description:
      "Strengthen, tone, and build endurance with this 45 min routine. This comprehensive workout targets all major muscle groups, helping you build overall strength and improve cardiovascular health.",
    bgColor: "bg-red-600",
    duration: "45 min",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Cardio Blast",
    description:
      "High-intensity cardio to burn calories and improve stamina. Perfect for those looking to boost their heart health and shed extra pounds.",
    bgColor: "bg-red-700",
    duration: "30 min",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Strength Training",
    description:
      "Build muscle strength with focused exercises for all major groups. This workout is designed to increase muscle mass and improve overall body composition.",
    bgColor: "bg-red-800",
    duration: "50 min",
    level: "Advanced",
  },
  {
    id: 4,
    title: "HIIT Workout",
    description:
      "Quick and intense HIIT sessions to maximize fat burn. High-intensity interval training that gets your heart rate up and keeps it there.",
    bgColor: "bg-red-500",
    duration: "20 min",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Yoga Flow",
    description:
      "Improve flexibility, balance, and mindfulness with guided yoga. A calming yet challenging practice that connects mind and body.",
    bgColor: "bg-red-400",
    duration: "60 min",
    level: "Beginner",
  },
  {
    id: 6,
    title: "Core Strength",
    description:
      "Target abs and core muscles for better stability and posture. Strengthen your center to improve performance in all other activities.",
    bgColor: "bg-red-900",
    duration: "25 min",
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Upper Body Burn",
    description:
      "Focus on arms, chest, shoulders, and back strength. Build a powerful upper body with targeted exercises.",
    bgColor: "bg-red-700",
    duration: "40 min",
    level: "Advanced",
  },
  {
    id: 8,
    title: "Lower Body Power",
    description:
      "Build powerful legs and glutes with lower-body exercises. Develop strong legs that support you in everything you do.",
    bgColor: "bg-red-600",
    duration: "45 min",
    level: "Intermediate",
  },
];

export default function WorkoutDetails() {
  const { id } = useLocalSearchParams();
  const workout = workouts.find((w) => w.id === Number(id));

  if (!workout) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl text-red-500">Workout not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className={`flex-1 ${workout.bgColor}`}>
      {/* Header */}
      <View className="p-6">
        <Pressable onPress={() => router.back()}>
          <Text className="text-white mb-6">← Back</Text>
        </Pressable>

        <Text className="text-4xl font-extrabold text-white">
          {workout.title}
        </Text>

        {/* Badges */}
        <View className="flex-row gap-3 mt-4">
          <View className="bg-white/20 px-4 py-1 rounded-full">
            <Text className="text-white">{workout.duration}</Text>
          </View>
          <View className="bg-white/20 px-4 py-1 rounded-full">
            <Text className="text-white">{workout.level}</Text>
          </View>
        </View>
      </View>

      {/* Content Card */}
      <View className="flex-1 bg-black/50 rounded-t-3xl p-6">
        <Text className="text-lg text-white leading-6">
          {workout.description}
        </Text>

        {/* Info */}
        <View className="mt-6">
          <Text className="text-white">Workout ID</Text>
          <Text className="text-white font-bold">#{workout.id}</Text>
        </View>

        {/* CTA */}
        <Pressable
          onPress={() => router.push("/(tabs)")}
          className="mt-auto bg-red-600 py-4 rounded-xl items-center"
        >
          <Text className="text-white text-lg font-bold">Start Workout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
