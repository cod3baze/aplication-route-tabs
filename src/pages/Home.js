import React, { useState, useEffect } from 'react';
import { 
   Platform,
   StyleSheet,
   KeyboardAvoidingView
} from 'react-native';

// componets 
import Form from '../components/form'


function Home() {

   return (
      <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={styles.conatainer}>
         
         <Form />

      </KeyboardAvoidingView>
   );
}

const styles = StyleSheet.create({
   conatainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   form: {},

   text: {
      fontSize: 16,
      fontWeight: 'bold',
   },

   email: {
      height: 44,
      minWidth: `90%`,
      marginHorizontal: 10,
      padding: 10,
      margin: 10,
      borderWidth: 1,
      borderColor: '#000',
      fontSize: 18,
   },

   senha: {},

   button: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#444',
      borderRadius: 4,
      height: 40,
   },

   textButton: {
      fontSize: 23,
      color: '#FFF',
   }

})


export default Home