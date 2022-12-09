import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cycles from './screens/Cycles';
import Cycle1 from './screens/Cycle1';
import Dictionary from './screens/Dictionary';
import Parafrasis from './screens/Parafrasis';
import Reading from './screens/Reading';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import HomePage from './screens/HomePage';
import FirstAccess from './screens/FirstAccess';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomePage}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="FirstAccess" component={FirstAccess}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="HomePage" component={HomePage}/>
      <Stack.Screen name="Cycles" component={Cycle1}/>
      <Stack.Screen name="Cycle1" component={Cycles}/>
      <Stack.Screen name="Parafrasis" component={Parafrasis}/>
      <Stack.Screen name="Dictionary" component={Dictionary}/>
      <Stack.Screen name="Reading" component={Reading}/>
    </Stack.Navigator>
  );
}
export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}