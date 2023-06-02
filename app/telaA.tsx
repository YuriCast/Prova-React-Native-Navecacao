import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width: 150, height: 150, alignItems: 'center', justifyContent: 'center' }} source={require('./img/cerejeira2.png')}></Image>
      <Text style={styles.text}>Careijeira's store</Text>
      <Text style={{maxWidth: 300, textAlign: 'center'}}>Bom dia professor, lá vou eu novamente tendo que enrolar aqui para chegar na quantidade de linhas solicitadas na atividade, mais um pouco aqui e deu, obrigado por ler.</Text>
      <Link style={{fontSize: 18, fontWeight: 'bold'}} href="/telaB">Ir para tela Cadastro</Link>
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
  }
});
