import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from '@/components/ui/view';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable'
import { PlayIcon, MenuIcon, BookOpenIcon, UserIcon, NotebookPenIcon, PhoneIcon } from 'lucide-react-native';
import HomeScreen from '../../screens/HomeScreen';
import ChatbotScreen from '../../screens/ChatbotScreen';
import ReadingPage from '../../screens/ReadingPage';
import ProfileScreen from '../../screens/ProfileScreen';
import WritingScreen from '../../screens/WritingTrainingScreen';
import ModuleSelectionScreen from '../../screens/ModuleSelectionScreen';

const Tab = createBottomTabNavigator();

function TabBar({ state, descriptors, navigation }) {

  return (
    <View
      className="flex-row h-16 pb-2 bg-background-100 border-t border-gray-600 shadow-md"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });

        return (
            <Pressable key={route.key} onPress={onPress} onLongPress={onLongPress} className="flex-1 items-center justify-center">
            <Icon
              size={'xl'}
              as={
              route.name === 'Home' ? PlayIcon :
              route.name === 'Modules' ? MenuIcon :
              route.name === 'Reading' ? BookOpenIcon :
              route.name === 'Profile' ? UserIcon :
              route.name === 'Writing' ? NotebookPenIcon :
              route.name === 'Chatbot' ? PhoneIcon :
              null
              }
            />
            </Pressable>
        );
      })}
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator id={null} tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Modules" component={ModuleSelectionScreen} />
      <Tab.Screen name="Reading" component={ReadingPage} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Writing" component={WritingScreen} />
      <Tab.Screen name="Chatbot" component={ChatbotScreen} />
    </Tab.Navigator>
  );
}
