import { View, Text, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from 'twrnc';
import { useState } from "react";

export default function PaperPlanePage() {
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView style={tw`flex-1 bg-blue-50`}>
      {/* Header */}
      <View style={tw`flex-row items-center px-6 pt-10`}>
        <Pressable 
          onPress={() => router.back()}
          style={tw`p-3`}
        >
          <Ionicons name="arrow-back" size={28} color="#374151" />
        </Pressable>
        <Text style={tw`text-2xl font-bold text-gray-800 ml-4`}>Paper Plane</Text>
      </View>

      {/* Main Content */}
      <View style={tw`flex-1 items-center justify-center px-6`}>
        
        {/* Plane Icon */}
        <View style={tw`mb-8`}>
          <View style={tw`bg-gradient-to-r from-blue-400 to-cyan-400 w-32 h-32 rounded-full items-center justify-center shadow-lg`}>
            <Ionicons name="paper-plane" size={64} color="white" />
          </View>
        </View>

        {/* Title */}
        <Text style={tw`text-3xl font-bold text-gray-800 mb-3`}>
          Send a Message
        </Text>
        
        {/* Description */}
        <Text style={tw`text-center text-gray-600 mb-8 text-lg`}>
          Write your message and let it fly away
        </Text>

        {/* Message Input */}
        <View style={tw`w-full mb-8`}>
          <TextInput
            style={tw`bg-white border border-blue-200 rounded-xl p-4 text-lg h-32 text-gray-800`}
            placeholder="Type your message here..."
            placeholderTextColor="#93c5fd"
            multiline
            value={message}
            onChangeText={setMessage}
          />
        </View>

        {/* Action Buttons */}
        <View style={tw`flex-row gap-4 w-full`}>
          <Pressable
            onPress={() => console.log("Message sent!")}
            style={({ pressed }) => [
              tw`flex-1 bg-blue-500 px-6 py-4 rounded-xl items-center`,
              pressed && tw`bg-blue-600`,
              !message.trim() && tw`opacity-50`
            ]}
            disabled={!message.trim()}
          >
            <Text style={tw`text-white font-bold text-lg`}>Send</Text>
          </Pressable>
          
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              tw`bg-gray-200 px-6 py-4 rounded-xl`,
              pressed && tw`bg-gray-300`
            ]}
          >
            <Text style={tw`text-gray-800 font-bold`}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}