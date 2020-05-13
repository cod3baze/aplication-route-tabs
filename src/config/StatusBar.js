import { StatusBar, Platform } from 'react-native'

if(Platform.OS === 'ios') {
   StatusBar.setBarStyle('dark-content')
}else {
   StatusBar.setBarStyle('dark-content')
   StatusBar.setBackgroundColor('#fff')
}

