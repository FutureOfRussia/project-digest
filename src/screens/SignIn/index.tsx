import React, { useState } from 'react'
import {
  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View as BaseView, Platform, ImageBackground, Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { BlurView } from 'expo-blur'
import {
  BounceButton, CheckBox, TextInput, View, Text, SocialButton,
} from '../../components'
import { validateEmail } from '../../helpers/Utilities'
import { useColorScheme, useTerms } from '../../hooks'
import { black, white } from '../../helpers/Colors'
import { Images, Styles } from '../../constants'
import styles from './styles'

export default function SignIn() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [emailValidError, setEmailValidError] = useState('')
  const [passwordValidError, setPasswordValidError] = useState('')
  const colorScheme = useColorScheme()
  const { signIn: terms, validations } = useTerms()

  const toggleRemember = () => setRemember(!remember)

  const checkEmail = () => {
    if (!validateEmail(email)) {
      if (email.length === 0) setEmailValidError(validations.emailEmpty)
      else setEmailValidError(validations.emailIncorrect)
      return false
    }
    return true
  }

  const checkPassword = () => {
    if (password.length === 0) {
      setPasswordValidError(validations.passportEmpty)
      return false
    }
    return true
  }

  const validation = () => {
    const emailStatus = checkEmail()
    const passwordStatus = checkPassword()

    return (emailStatus && passwordStatus)
  }

  const forgotPassword = () => {
    // navigation.navigate('Forgot')
  }

  const login = () => {
    if (validation()) Alert.alert('Login!')
  }

  const loginWithFacebook = () => {

  }

  const loginWithGoogle = () => {

  }

  const loginWithApple = () => {

  }

  const goToSignUp = () => navigation.navigate('SignUp')

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
              onChangeText={(text) => {
                setEmail(text)
                if (emailValidError.length > 0) setEmailValidError('')
              }}
              valid={validateEmail(email)}
              validError={emailValidError}
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
              onChangeText={(text) => {
                setPassword(text)
                if (passwordValidError.length > 0) setPasswordValidError('')
              }}
              validError={passwordValidError}
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
            <BounceButton style={styles.button} onPress={login}>
              <Text style={styles.buttonText}>{terms.login}</Text>
            </BounceButton>
          </View>
          <BaseView style={styles.socialBlock}>
            <SocialButton type="facebook" onPress={loginWithFacebook} />
            <SocialButton type="google" onPress={loginWithGoogle} />
            <SocialButton type="apple" onPress={loginWithApple} />
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
