import React, { useState, useEffect } from 'react';
import { 
   View, 
   Text, 
   StyleSheet,
   TouchableOpacity,
   SafeAreaView,
   Keyboard,
   ScrollView,
   ActivityIndicator,
   TextInput,
   InputAccessoryView
} from 'react-native';


function Perfil({ navigation }) {

   useEffect(() => {
      const keyBoardDidShow = Keyboard.addListener("keyboardDidShow", () => {

      })
   }, [])

   return (
      <SafeAreaView style={styles.conatainer}>
         {/* <ActivityIndicator size="large" color="#00ff00" animating={true} /> */}

         <TextInput 
            style={{height: 44, color: '#000', padding: 10}}
            placeholder="digite aqui"
            inputAccessoryViewID='1'
         />

         <InputAccessoryView nativeID='1'>
            <Text>ola mundo</Text>
         </InputAccessoryView>

         <ScrollView 
            indicatorStyle="black"
            scrollIndicatorInsets= {{top: 0, left: 0, bottom: 0, right: 0}}
         >
            <View style={styles.component}>
               <View style={styles.menu}>
                  <Text>Elias</Text>
                  <Text>Dsiplay</Text>
               </View>
               <View style={styles.content}></View>
            </View>

            <View style={styles.component}>
               <View style={styles.menu}>
                  <Text>Elias</Text>
                  <Text>Dsiplay</Text>
               </View>
               <View style={styles.content}></View>
            </View>

            <View style={styles.component}>
               <View style={styles.menu}>
                  <Text>Elias</Text>
                  <Text>Dsiplay</Text>
               </View>
               <View style={styles.content}></View>
            </View>

            <View style={styles.component}>
               <View style={styles.menu}>
                  <Text>Elias</Text>
                  <Text>Dsiplay</Text>
               </View>
               <View style={styles.content}></View>
            </View>

            <View style={styles.component}>
               <View style={styles.menu}>
                  <Text>Elias</Text>
                  <Text>Dsiplay</Text>
               </View>
               <View style={styles.content}></View>
            </View>

            <View style={styles.component}>
               <View style={styles.menu}>
                  <Text>Elias</Text>
                  <Text>Dsiplay</Text>
               </View>
               <View style={styles.content}></View>
            </View>

            <View style={styles.component}>
               <View style={styles.menu}>
                  <Text>Elias</Text>
                  <Text>Dsiplay</Text>
               </View>
               <View style={styles.content}></View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   conatainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
   },

   component: {
      borderWidth: 1,
      width: 350,
      padding: 5,
      margin: 10,
   },

   menu: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },

   content: {
      height: 120,
      backgroundColor: 'rgba(0,0,0, 0)',
      margin: 10,
      borderLeftColor: 'green',
      borderLeftWidth: 1,
   },

})


export default Perfil