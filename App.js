import React from 'react'
import {View} from 'react-native'
import SignUpForm from './src/components/Form'

import styles from './src/constants/style'

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  )
}
