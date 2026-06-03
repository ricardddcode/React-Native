import { StatusBar } from 'expo-status-bar';
import {safeAreaProvider } from"react-native-safe-area-context"
import AppNavigator from './src/navigation/AppNavigatior';
export default function App() {
  return (
    <safeAreaProvider>
 
      <AppNavigator/>
    <statusbar style="auto"/>
    </safeAreaProvider>

  );
}