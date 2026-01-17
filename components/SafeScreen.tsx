
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SafeScreenProps {
  children: React.ReactNode;
}

const SafeScreen = ({ children }: SafeScreenProps) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;





 