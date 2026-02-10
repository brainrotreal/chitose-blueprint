import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, Text, Icon } from '@gluestack-ui/themed';
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
      style={{
        flexDirection: 'row',
        height: 70,
        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
        backgroundColor: '#1A202C',
        borderTopWidth: 1,
        borderTopColor: '#3E4957',
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowRadius: 4,
      }}
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
          <Pressable
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
          >
            <Icon
              as={
                label === 'Home'
                  ? MenuIcon
                  : label === 'Modules'
                  ? PlayIcon
                  : label === 'Reading'
                  ? BookOpenIcon
                  : label === 'Profile'
                  ? UserIcon
                  : label === 'Writing'
                  ? NotebookPenIcon
                  : label === 'Chatbot'
                  ? PhoneIcon
                  : 'home'
              }
              color={isFocused ? "$primary500" : '#718096'}
              transition={0.2}
              size={24}
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
