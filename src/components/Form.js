import React from 'react'
import {View, Text} from 'react-native'
import {Formik} from 'formik'
import {Input, Button} from 'react-native-elements'

import styles from '../constants/style'

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={(values) => console.log(values)}
    >
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.form}>
          <Text style={styles.label}>Enter your phone number</Text>
          <Input
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
          />
          <Button onPress={handleSubmit} title='Submit' />
        </View>
      )}
    </Formik>
  )
}

export default SignUpForm
