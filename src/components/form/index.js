import React, {useState, useEffect} from 'react';
import { 
   Keyboard,
   View,
   TextInput,
   Text,
   TouchableOpacity
} from 'react-native';

// Styles
import styles from './styles'


function Form() {

   useEffect(() => {
      function ouvinte() {
         Keyboard.addListener('keyboardWillShow', () => {
         })

         Keyboard.addListener('keyboardWillHide', () => {
         })
      }

      ouvinte()
   }, []);

   return (
      <>
         <View style={styles.form}>
            <Text style={styles.text}>E-mail *</Text>
            <TextInput 
               style={styles.email}
               multiline={false}
               placeholder="Digite aqui sseu email"
               autoCompleteType="email"
               autoCorrect={false}
               autoFocus={true}
               autoCapitalize="none"
               keyboardAppearance="dark"
               keyboardType="email-address"
               returnKeyType="next"
            />

            <Text style={styles.text}>Senha *</Text>
            <TextInput 
               style={[styles.email, styles.senha]}
               multiline={false}
               placeholder="Digite aqui sua senha"
               autoCapitalize="none"
               autoCorrect={false}
               secureTextEntry={true}
               autoCompleteType="password"
               contextMenuHidden={true}
               keyboardAppearance="dark"
               returnKeyType="done"
            />

            <TouchableOpacity style={styles.button} onPress={() => {}}>
               <Text style={styles.textButton}> Acessar </Text>
            </TouchableOpacity>
         </View>
      </>
   );
}


export default Form