import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../screens/Home'
import { QRCodeScreen } from '../screens/QRCode'

const StackNavigation = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator initialRouteName='HomeScreen'>
        <StackNavigation.Screen name="HomeScreen" component={HomeScreen} />
        <StackNavigation.Screen name="QRCodeScreen" component={QRCodeScreen} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  )
}

export { Routes }