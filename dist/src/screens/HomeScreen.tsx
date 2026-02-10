import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
// adjust path
import { signOut } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-background-50">
      <Text className="text-2xl font-bold text-typography-950 mb-2">
        Welcome to the Home Screen
      </Text>
      <Button className="bg-secondary-500 text-typography-950" onPress={() => signOut(auth)}>
        Force Logout
      </Button>
    </View>
  );
}
