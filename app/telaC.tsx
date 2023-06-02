import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";
import { Directions } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width: 150, height: 150, alignItems: 'center', justifyContent: 'center' }} source={require('./img/cerejeira2.png')}></Image>
      <Text style={styles.text}>Careijeira's store</Text>
      <Text style={styles.text}>Tela C</Text>
      <Link style={{fontSize: 18, fontWeight: 'bold'}} href="/">Voltar para Index</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
