import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Shopping from './components/Shopping';
import AddCart from './components/AddCart';
import Payment from './components/Payment';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Payment/> */}
      {/* <AddCart/> */}
      <Shopping/>
      {/* <StatusBar style="auto" /> */}
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
