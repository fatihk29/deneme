import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EpisodePage from './src/pages/EpisodePage';
import EpisodeDetails from './src/pages/EpisodeDetailPage';
import CharacterList from './src/pages/CharacterList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={CharacterList} />
      <Tab.Screen name="Episodes" component={EpisodePage} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={EpisodePage} />
        <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
