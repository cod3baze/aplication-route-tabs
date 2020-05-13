import React, { useState, useEffect } from 'react';
import { 
   KeyboardAvoidingView,
   View, 
   TextInput,
   Platform,
   Text, 
   StyleSheet,
   TouchableOpacity,
   AsyncStorage
} from 'react-native';

function Login({ navigation }) {
   const [email, setEmail] = useState(null)
   const [senha, setSenha] = useState(null)

   useEffect(() => {
      async function handleNavigation() {
         let user = await AsyncStorage.getItem('user_id')
         if(!user)
            return

         navigation.navigate('Home')
      }

      handleNavigation()
   }, [])

   async function handleSubmit() {
      if(!email || !senha)
         return
      
      await AsyncStorage.setItem('user_id', email)
      
      navigation.navigate('Home')
   }

   return (
      <KeyboardAvoidingView 
         behavior="padding"
         style={styles.conatainer} 
         enabled={Platform.OS === 'ios'
         
         }>
         <Text style={styles.logo}> Login </Text>

         <View style={styles.form}>
            <Text style={styles.label}> SEU E-MAIL * </Text>
            <TextInput 
               value={email}
               onChangeText={setEmail}
               style={styles.input}
               placeholder="Digite seu email"
               placeholderTextColor="#999"
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}
            />

            <Text style={styles.label}> Sua senha * </Text>
            <TextInput 
               value={senha}
               onChangeText={setSenha}
               style={styles.input}
               placeholder="Digite a senha correspondente"
               placeholderTextColor="#999"
               keyboardType="default"
               autoCapitalize="none"
               autoCorrect={false}
            />

            <TouchableOpacity 
               style={styles.button}
               onPress={handleSubmit}
               >
               <Text style={styles.textButton}> Logar </Text>
            </TouchableOpacity>
         </View>
      </KeyboardAvoidingView>
   );
}

const styles = StyleSheet.create({
   conatainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333',
   },

   logo: {
      color: '#fff',
      fontSize: 20,
   },

   form: {
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      marginTop: 30,
   },

   label: {
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 8,
   }, 

   input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      fontSize: 16,
      color: "#fff",
      height: 44,
      marginBottom: 20,
      borderRadius: 2,
   },

   button: {
      height: 44,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
   },

   textButton: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
   },
})

export default Login