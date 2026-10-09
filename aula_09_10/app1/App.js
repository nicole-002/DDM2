import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Confeitaria</Text>
      <Text>Conheça nosso menu</Text> 

      <ScrollView style={styles.scr}>

        <Text> 
          Um texto é qualquer manifestação da linguagem (escrita, falada, visual ou mista) dotada de sentido e capaz de transmitir uma mensagem dentro de uma situação de comunicação.

O que define um texto?

• Sentido completo: Precisa fazer sentido para quem o lê ou ouve em determinado contexto.
• Coesão e Coerência: A coesão conecta as palavras e frases de forma lógica; a coerência garante que a mensagem faça sentido globalmente.
• Diversidade de linguagens: Pode ser verbal (usando palavras), não verbal (usando imagens, cores, gestos ou sons) ou misto (combinando ambos).

Tipos de texto

• Narrativo: Conta uma história com personagens, tempo e espaço (ex.: romances, contos).
• Descritivo: Retrata características de um objeto, pessoa ou lugar.
• Dissertativo-expositivo: Explica ou apresenta informações sobre um tema sem emitir juízo de valor.
• Argumentativo: Defende um ponto de vista com base em argumentos (ex.: artigos de opinião, editoriais).
• Injuntivo (ou instrucional): Orienta ou dá instruções de como fazer algo (ex.: receitas culinárias, manuais de uso).

Principais classificações

• Literários: Usam linguagem conotativa (figurada) e artística para emocionar (poemas, peças de teatro).
• Não literários: Usam linguagem denotativa (direta) com o objetivo principal de
        </Text>

      </ScrollView>

      <TextInput placeholder='Digite seu email'></TextInput>

      <Button title='Botão' onpress={''}/>

      
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

  scr: {
    backgroundColor: '#dd1d93',
    maxHeight: '20%',

  },
});
