import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import SanPhamScreen from './screens/sanPhamScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddSanPham from './screens/addSanPham';
import EditSanPham from './screens/editSanPham';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "SanPhamScreen" component={SanPhamScreen}></Stack.Screen>
          <Stack.Screen name = "AddSanPham" component={AddSanPham}></Stack.Screen>
          <Stack.Screen name = "EditSanPham" component={EditSanPham}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <SanPhamScreen></SanPhamScreen> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
