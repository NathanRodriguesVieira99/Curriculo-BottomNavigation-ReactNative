import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs

      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'semibold',
          color: '#000',
          top: 3,
          marginBottom: 4,
        },
      }}
      initialRouteName='Home'
    >
      <Tabs.Screen
        name="tabs/Profile"
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person" size={24} color={focused ? 'blue' : 'gray'} />
          ),
        }}
      />

      <Tabs.Screen
        name="tabs/Academic"
        options={{
          tabBarLabel: "Acadêmico",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="school" size={24} color={focused ? 'green' : 'gray'} />
          ),
        }}
      />

      <Tabs.Screen
        name="tabs/SoftSkills"
        options={{
          tabBarLabel: "Soft Skills",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="bulb" size={24} color={focused ? 'purple' : 'gray'} />
          ),
        }}
      />

      <Tabs.Screen
        name="tabs/Lenguages_and_techs"
        options={{
          tabBarLabel: "Hard Skills",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="code-slash-outline" size={24} color={focused ? 'orange' : 'gray'} />
          ),
        }}
      />
    </Tabs>
  );
}
