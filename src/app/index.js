import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  Text, SafeAreaView, Button, FlatList, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
// import OpenAI from 'openai';
import Message from '../components/Message';
import { useState } from 'react';
// const openai = new OpenAI({apiKey:"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"});



export default function App() {
  const [message, setMessage] = useState([
    {role: 'system', content: 'You are a helpful assistant'},
    {role: 'user', content: 'Hello'},
    {role: 'assistant', content: 'Hello there! How can I help you today?'},
  ]);

const funnyCall = () => {setMessage((existingMessages) => [
  ...existingMessages, {
    role: 'user', 
    content: prompt}
  ]);

setPrompt('');
}
const [prompt, setPrompt] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex:1}}>
      <FlatList 
      data={message} 
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({item}) => <Message message={item}/>}/>
      <View style={styles.footer}>
        <TextInput value={prompt} onChangeText={setPrompt} style={styles.input} placeholder="Type your message here"/>
        <Button title="Send" onPress={funnyCall}/>
      </View>

      <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    padding: 10,
  },

  input: {
    borderColor: 'gainsboro',
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    width: '80%',
  },
});

