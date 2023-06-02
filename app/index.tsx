import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width: 150, height: 150, alignItems: 'center', justifyContent: 'center' }} source={require('./img/cerejeira2.png')}></Image>
      <Text style={styles.text}>Careijeira's store</Text>
      <Text style={{maxWidth: 300, textAlign: 'center'}}>Bom dia professor, eu realmente não sei o que escrever aqui provessor, então vou ficar somente enrolando até chegar na quantidade de linhas pedidas.</Text>
      <Link style={{fontSize: 18, fontWeight: 'bold'}} href="/telaA">Ir para tela Sobre</Link>
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
