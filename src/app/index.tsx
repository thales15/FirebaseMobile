
import { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../src/services/firebase';

export default function HomeScreen() {
  const [carregando, setCarregando] = useState(false);

  async function salvarUsuario() {
    try {
      setCarregando(true);

      const documento = await addDoc(collection(db, 'usuarios'), {
        nome: 'João',
        email: 'joao@email.com',
        criadoEm: new Date().toISOString(),
      });

      Alert.alert(
        'Sucesso',
        `Usuário salvo com ID: ${documento.id}`
      );
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meu aplicativo com Firebase
      </Text>

      <Button
        title={carregando ? 'Salvando...' : 'Salvar usuário'}
        onPress={salvarUsuario}
        disabled={carregando}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
});
