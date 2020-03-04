import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HeyScreen from '../screens/HeyScreen';
import FindScreen from '../screens/FindScreen';
import GetScreen from '../screens/GetScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Hey"
        component={HeyScreen}
        options={{
          title: 'Hey Covid!',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Find"
        component={FindScreen}
        options={{
          title: 'Find Covid!',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working"/>,
        }}
      />
      <BottomTab.Screen
        name="Get"
        component={GetScreen}
        options={{
          title: 'Get Covid!',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? 'Hey'; //INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Hey':
      return 'Hey Covid 😉';
    case 'Find':
      return 'Find Covid 🌎';
    case 'Get':
        return 'Get Covid 📱';
  }
}
