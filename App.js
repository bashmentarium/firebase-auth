import React, {useState, useEffect} from 'react'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import {KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import SignUpForm from './src/components/Form'

import firebaseConfig from './firebase/config'

import styles from './src/constants/style'

const fetchFonts = () => {
  return Font.loadAsync({
    light: require('./assets/fonts/Assistant-Light.ttf'),
    regular: require('./assets/fonts/Assistant-Regular.ttf'),
    medium: require('./assets/fonts/Assistant-SemiBold.ttf'),
    bold: require('./assets/fonts/Assistant-Bold.ttf'),
  })
}

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}
      contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
    >
      <SignUpForm />
    </KeyboardAvoidingView>
  )
}

export default function () {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
  }, [])

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoadingComplete(true)}
      />
    )
  }

  return <App />
}
