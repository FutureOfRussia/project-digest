import React, { useState } from 'react'
import {
  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View as BaseView, Platform, ImageBackground,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { BlurView } from 'expo-blur'
import {
  BounceButton, CheckBox, TextInput, View, Text, SocialButton,
} from '../../components'
import { useColorScheme, useTerms } from '../../hooks'
import { black, white } from '../../helpers/Colors'
import { Images, Styles } from '../../constants'
import styles from './styles'

export default function LogIn() {
  const navigation = useNavigation()
  const [remember, setRemember] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const colorScheme = useColorScheme()
  const { logIn: terms } = useTerms()

  const validateEmail = () => (
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(email)
  )

  const toggleRemember = () => setRemember(!remember)

  const forgotPassword = () => {
    // navigation.navigate('Forgot')
  }

  const logIn = () => {

  }

  const logInWithFacebook = () => {

  }

  const logInWithGoogle = () => {

  }

  const logInWithApple = () => {

  }

  const goToSignUp = () => {
    // navigation.navigate('SignUp')
  }

  return (
    <KeyboardAvoidingView style={styles.background} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <BaseView style={styles.container}>
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style="dark" />
          <ImageBackground source={Images.getImage('flower1')} style={styles.backgroundImage}>
            <BlurView intensity={25} tint={colorScheme} style={Styles.fullFlex} />
          </ImageBackground>
          <View style={styles.body}>
            <Text style={styles.title}>{terms.title}</Text>
            <Text style={styles.subtitle} lightColor={black(0.5)} darkColor={white(0.5)}>
              {terms.subtitle}
            </Text>
            <TextInput
              icon="ios-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
              valid={validateEmail()}
              inputProps={{
                autoCompleteType: 'email',
                keyboardType: 'email-address',
                textContentType: 'emailAddress',
                placeholder: terms.emailPlaceholder,
              }}
            />
            <TextInput
              icon="ios-lock"
              value={password}
              onChangeText={(text) => setPassword(text)}
              inputProps={{
                autoCompleteType: 'password',
                textContentType: 'password',
                secureTextEntry: true,
                placeholder: terms.passwordPlaceholder,
              }}
            />
            <BaseView style={styles.row}>
              <CheckBox value={remember} onPress={toggleRemember} label={terms.remember} />
              <BounceButton onPress={forgotPassword}>
                <Text style={styles.activeBtnText}>{terms.forgot}</Text>
              </BounceButton>
            </BaseView>
            <BounceButton style={styles.button} onPress={logIn}>
              <Text style={styles.buttonText}>{terms.logIn}</Text>
            </BounceButton>
          </View>
          <BaseView style={styles.logosBlock}>
            <SocialButton type="facebook" onPress={logInWithFacebook} />
            <SocialButton type="google" onPress={logInWithGoogle} />
            <SocialButton type="apple" onPress={logInWithApple} />
          </BaseView>
          <BaseView style={styles.singUpBtnBlock}>
            <Text style={styles.signUpBtnText}>{terms.signUpQuestion}</Text>
            <BounceButton style={styles.signUpBtn} onPress={goToSignUp}>
              <Text style={styles.activeBtnText}>{terms.signUp}</Text>
            </BounceButton>
          </BaseView>
        </BaseView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
