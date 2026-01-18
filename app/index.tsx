import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { useState } from "react";

export default function LandingPage() {
  const { height } = useWindowDimensions();
  const centerY = height * 0.4;
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const pathname = usePathname();
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push("/(tabs)");
    } else {
      router.push("/(auth)/sign-in");
    }
  };

  const pageIcons = [
    { icon: "home" as keyof typeof Ionicons.glyphMap, route: "/(tabs)", label: "Home", path: "/(tabs)" },
    { icon: "information-circle" as keyof typeof Ionicons.glyphMap, route: "/(tabs)/about", label: "About", path: "/about" },
    { icon: "call" as keyof typeof Ionicons.glyphMap, route: "/(tabs)/contact", label: "Contact", path: "/contact" },
    { icon: "logo-whatsapp" as keyof typeof Ionicons.glyphMap, route: "/whatsapp", label: "WhatsApp", path: "/whatsapp" },
    { icon: "cube" as keyof typeof Ionicons.glyphMap, route: "/cube", label: "Cube", path: "/cube" },
    { icon: "paper-plane" as keyof typeof Ionicons.glyphMap, route: "/paper-plane", label: "Paper", path: "/paper-plane" },
    { icon: "feather" as keyof typeof Ionicons.glyphMap, route: "/feather", label: "Feather", path: "/feather" },
    { icon: "shield-checkmark" as keyof typeof Ionicons.glyphMap, route: "/shield", label: "Shield", path: "/shield" },
  ];

  const handleIconPress = (route: string, label: string) => {
    setActiveIcon(label);
    router.push(route as any);
  };

  const isActive = (page: typeof pageIcons[0]) => {
    if (activeIcon) {
      return activeIcon === page.label;
    }
    // Check if current pathname matches
    return pathname.includes(page.path) || (page.path === "/(tabs)" && pathname === "/");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6 pb-24">
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
          <Pressable 
            onPress={handleGetStarted}
            className="bg-red-600 px-8 py-4 rounded-full"
          >
            <Text className="text-white font-bold text-lg">GET STARTED</Text>
          </Pressable>
        </View>
      </View>

      {/* Bottom Navigation Icons */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200"
        style={{
          paddingBottom: 20,
          paddingTop: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View className="flex-row justify-around items-center px-4">
          {pageIcons.map((page, index) => (
            <Pressable
              key={index}
              onPress={() => handleIconPress(page.route, page.label)}
              className="items-center justify-center"
              style={{
                width: 50,
                height: 50,
              }}
            >
              <View
                className="rounded-full items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: isActive(page) ? "#FF0000" : "transparent",
                }}
              >
                <Ionicons
                  name={page.icon}
                  size={24}
                  color={isActive(page) ? "white" : "#666"}
                />
              </View>
              <Text
                className="text-xs mt-1"
                style={{
                  color: isActive(page) ? "#FF0000" : "#666",
                  fontWeight: isActive(page) ? "bold" : "normal",
                }}
              >
                {page.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
