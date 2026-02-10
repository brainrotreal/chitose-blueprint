import { View, Text, Button } from "@gluestack-ui/themed";
import { config } from "../../components/ui/gluestack-ui-provider/config"; // adjust path
import { signOut } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";

export default function HomeScreen() {
  return (
    <View
      flex={1}
      backgroundColor="$background50"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={28}
        fontWeight="$bold"
        color="$typography950"
        marginBottom="$sm"
      >
        Welcome to the Home Screen
      </Text>
      <Button onPress={() => signOut(auth)} color="$typography950" backgroundColor="$secondary500">Force Logout</Button>
    </View>
  );
}
