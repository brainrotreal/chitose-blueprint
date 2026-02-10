import { View, Text } from "@gluestack-ui/themed";
import { config } from "../../components/ui/gluestack-ui-provider/config"; // adjust path

export default function ReadingPage() {
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
        color="$typography50"
        marginBottom="$sm"
      >
        Welcome to the Reading Page
      </Text>
    </View>
  );
}
