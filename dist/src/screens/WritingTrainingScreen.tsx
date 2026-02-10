import { View, Text } from "@gluestack-ui/themed";
import { config } from "../../components/ui/gluestack-ui-provider/config"; // adjust path

export default function WritingTrainingScreen() {
  return (
    <View
      flex={1}
      backgroundColor="$background50"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={20}
        fontWeight="$bold"
        color="$typography950"
        marginBottom="$sm"
      >
        Welcome to the Writing Training Screen
      </Text>
    </View>
  );
}
