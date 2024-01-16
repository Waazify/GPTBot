import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, KeyboardAvoidingView, PlatformColor } from 'react-native';

export default function Message({message})  {

    return (
      <SafeAreaView>
          <View>
          <View style={[styles.message, 
          { marginLeft:message.role == 'user' ? 'auto' : 0,
            backgroundColor: message.role == 'user' ? 'royalblue' : 'gainsboro',
          }]}>
            <Text style={[styles.messageText, {color: message.role == 'user' ? 'white' : 'black'}]}>
              {message.content}
            </Text>
          </View>
          </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({

  message: {
    backgroundColor: 'gainsboro',
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },

  messageText: {
    
  },
});
