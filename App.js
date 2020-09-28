import React, {useEffect} from 'react'
import {View} from 'react-native'
import firebase from 'firebase'
import SignUpForm from './src/components/Form'

import firebaseConfig from './firebase/config'

import styles from './src/constants/style'

export default function App() {
  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }, [])

  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  )
}
