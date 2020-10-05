import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Formik} from 'formik'
import {Input, Button} from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

import styles from '../constants/style'

const ROOT_URL = 'https://us-central1-otpa-ebded.cloudfunctions.net'

const SignUpForm = () => {
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const submitSignUp = async (values) => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, {phone: values.phone})

      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: values.phone,
      })
    } catch (err) {
      console.log(err)
    }

    setIsSignedUp(true)
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

    setIsLoggedIn(true)
  }

  return (
    <>
      <Formik
        initialValues={{phone: ''}}
        onSubmit={(values) => submitSignUp(values)}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <Text style={styles.formLabel}>Sign up</Text>
            {isSignedUp ? (
              <View
                style={{
                  ...styles.form,
                  height: 150,
                }}
              >
                <Text style={{...styles.buttonTitle, color: 'green'}}>
                  Successfuly signed up!
                </Text>
                <Text style={{...styles.buttonTitle, textAlign: 'center'}}>
                  Use your phone number and the recieved code to login
                </Text>
              </View>
            ) : (
              <View style={{...styles.form, height: 150}}>
                <Text style={styles.label}>Enter your phone number</Text>
                <Input
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  style={styles.input}
                  keyboardType='numeric'
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                  <Text style={styles.buttonTitle}>Sign up</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </Formik>

      <Formik
        initialValues={{phone2: '', code: ''}}
        onSubmit={(values) => submitLogin(values)}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <Text style={{...styles.formLabel, marginTop: 20}}>Sign in</Text>
            {isLoggedIn ? (
              <View style={{...styles.form, height: 350}}>
                <Text style={{...styles.buttonTitle, color: 'green'}}>
                  Successfuly logged in!
                </Text>
              </View>
            ) : (
              <View style={{...styles.form, height: 240}}>
                <Text style={styles.label}>Phone number</Text>
                <Input
                  onChangeText={handleChange('phone2')}
                  onBlur={handleBlur('phone2')}
                  value={values.phone2}
                  style={styles.input}
                  keyboardType='numeric'
                />
                <Text style={styles.label}>Code</Text>
                <Input
                  onChangeText={handleChange('code')}
                  onBlur={handleBlur('code')}
                  value={values.code}
                  style={styles.input}
                  keyboardType='numeric'
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                  <Text style={styles.buttonTitle}>Sign In</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </Formik>
    </>
  )
}

export default SignUpForm
