import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
export default function GymCard() {
  const workouts = [
    {
      id: 1,
      title: "Full Body Workout",
      description:
        "Strengthen, tone, and build endurance with this 45 min routine.",
      bgColor: "bg-red-600",
    },
    {
      id: 2,
      title: "Cardio Blast",
      description:
        "High-intensity cardio to burn calories and improve stamina.",
      bgColor: "bg-red-700",
    },
    {
      id: 3,
      title: "Strength Training",
      description:
        "Build muscle strength with focused exercises for all major groups.",
      bgColor: "bg-red-800",
    },
    {
      id: 4,
      title: "HIIT Workout",
      description: "Quick and intense HIIT sessions to maximize fat burn.",
      bgColor: "bg-red-500",
    },
    {
      id: 5,
      title: "Yoga Flow",
      description:
        "Improve flexibility, balance, and mindfulness with guided yoga.",
      bgColor: "bg-red-400",
    },
    {
      id: 6,
      title: "Core Strength",
      description:
        "Target abs and core muscles for better stability and posture.",
      bgColor: "bg-red-900",
    },
    {
      id: 7,
      title: "Upper Body Burn",
      description: "Focus on arms, chest, shoulders, and back strength.",
      bgColor: "bg-red-700",
    },
    {
      id: 8,
      title: "Lower Body Power",
      description:
        "Build powerful legs and glutes with lower-body exercises. Build powerful legs and glutes with lower-body exercises.",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <View>
      <View className="flex-1 ">
        <ScrollView
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Text className="text-4xl font-extrabold text-red-600 mb-2 text-center">
            FitLife Gym
          </Text>
          <Text className="text-gray-800 text-center mb-8">
            Push your limits. Achieve your goals.
          </Text>

          {/* Cards */}
          {workouts.map((workout) => (
            <View
              key={workout.id}
              className={`${workout.bgColor} rounded-2xl p-6 mb-6`}
            >
              <Text className="text-white text-2xl font-bold mb-2">
                {workout.title}
              </Text>
              <Text className="text-red-100 mb-4">{workout.description}</Text>

              <Link href={`/workout/${workout.id}`} asChild>
                <Pressable className="bg-black py-3 rounded-xl items-center">
                  <Text className="text-red-600 font-bold text-lg">
                    Start Workout to day
                  </Text>
                </Pressable>
              </Link>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
