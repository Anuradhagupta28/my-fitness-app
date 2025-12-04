import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import TrainScreen from './screens/TrainScreen';
import TeamScreen from './screens/TeamScreen';
import FeedScreen from './screens/FeedScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();

export default function App() {
   const [fontsLoaded] = useFonts({
  
      AeonikMedium: require("./assets/fonts/Aeonik-Medium.otf"),
     AeonikLight: require("./assets/fonts/Aeonik-Light.otf"),
      AeonikBold: require("./assets/fonts/Aeonik-Bold.otf"),
        AeonikMediumItalic: require("./assets/fonts/Aeonik-MediumItalic.otf"),
     AeonikLightItalic: require("./assets/fonts/Aeonik-LightItalic.otf"),
      AeonikBoldItalic: require("./assets/fonts/Aeonik-BoldItalic.otf"),
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1F2937',
            borderTopColor: '#374151',
            borderTopWidth: 1,
            height: 80,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Train') {
              iconName = focused ? 'flash' : 'flash-outline';
            } else if (route.name === 'Team') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'play' : 'play-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Train" component={TrainScreen} />
        <Tab.Screen name="Team" component={TeamScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}