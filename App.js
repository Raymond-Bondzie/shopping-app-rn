import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Shopping from './components/Shopping';
import AddCart from './components/AddCart';
import Payment from './components/Payment';
import Items from './components/Items';
import ItemDetail from './components/ItemDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      {/* <Payment/> */}
      {/* <AddCart/> */}
      {/* <Shopping/> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Items/> */}
      {/* <ItemDetail/> */}
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Shopping">
         <Stack.Screen name='Shopping' component={Shopping} />
         <Stack.Screen name='AddCart' component={AddCart} />
         <Stack.Screen name='Payment' component={Payment} />
       </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // paddingHorizontal: 20,
   
  },
});
