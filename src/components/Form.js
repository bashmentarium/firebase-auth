import React from 'react'
import {View, Text} from 'react-native'
import {Formik} from 'formik'
import {Input, Button} from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

import styles from '../constants/style'

const ROOT_URL = 'https://us-central1-otpa-ebded.cloudfunctions.net'

const SignUpForm = () => {
  const submitSignUp = async (values) => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, {phone: values.phone})

      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: values.phone,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const submitLogin = async (values) => {
    try {
      let {data} = await axios.post(`${ROOT_URL}/verifyOTP`, {
        phone: values.phone2,
        code: values.code,
      })

      firebase.auth().signInWithCustomToken(data.token)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Formik
        initialValues={{phone: ''}}
        onSubmit={(values) => submitSignUp(values)}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <Text style={{...styles.label, color: 'red'}}>Sign up</Text>
            <View style={styles.form}>
              <Text style={styles.label}>Enter your phone number</Text>
              <Input
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                style={styles.input}
              />
              <Button onPress={handleSubmit} title='Submit' />
            </View>
          </>
        )}
      </Formik>

      <Formik
        initialValues={{phone2: '', code: ''}}
        onSubmit={(values) => submitLogin(values)}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <Text style={{...styles.label, color: 'red', marginTop: 50}}>
              Sign in
            </Text>
            <View style={styles.form}>
              <Text style={styles.label}>Phone number</Text>
              <Input
                onChangeText={handleChange('phone2')}
                onBlur={handleBlur('phone2')}
                value={values.phone2}
                style={styles.input}
              />
              <Text style={styles.label}>Code</Text>
              <Input
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
                value={values.code}
                style={styles.input}
              />
              <Button onPress={handleSubmit} title='Submit' />
            </View>
          </>
        )}
      </Formik>
    </>
  )
}

export default SignUpForm
