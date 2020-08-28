import React, { useState } from 'react'
import {
  Alert,
  ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View as BaseView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { BlurView } from 'expo-blur'
import {
  BounceButton, SocialButton, Text, TextInput, View,
} from '../../components'
import { validateEmail, validatePassword } from '../../helpers/Utilities'
import { useColorScheme, useTerms } from '../../hooks'
import { black, white } from '../../helpers/Colors'
import { Images, Styles } from '../../constants'
import styles from './styles'

export default function SignUp() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [emailValidError, setEmailValidError] = useState('')
  const [passwordValidError, setPasswordValidError] = useState('')
  const [confirmValidError, setConfirmValidError] = useState('')
  const colorScheme = useColorScheme()
  const { signUp: terms, validations } = useTerms()

  const checkEmail = () => {
    if (!validateEmail(email)) {
      if (email.length === 0) setEmailValidError(validations.emailEmpty)
      else setEmailValidError(validations.emailIncorrect)
      return false
    }
    return true
  }

  const checkPassword = () => {
    if (!validatePassword(password)) {
      if (password.length === 0) setPasswordValidError(validations.passportEmpty)
      else setPasswordValidError(validations.passwordIncorrect)
      return false
    }
    return true
  }

  const validateConfirm = () => (confirm === password && confirm.length > 0)

  const checkConfirm = () => {
    if (!validateConfirm()) {
      setConfirmValidError(validations.confirmIncorrect)
      return false
    }
    return true
  }

  const validation = () => {
    const emailStatus = checkEmail()
    const passwordStatus = checkPassword()
    const confirmStatus = checkConfirm()

    return (emailStatus && passwordStatus && confirmStatus)
  }

  const register = () => {
    if (validation()) Alert.alert('Register!')
  }

  const registerWithFacebook = () => {

  }

  const registerWithGoogle = () => {

  }

  const registerWithApple = () => {

  }

  const goToSignIn = () => navigation.navigate('SignIn')

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
              valid={validatePassword(password)}
              validError={passwordValidError}
              inputProps={{
                autoCompleteType: 'password',
                textContentType: 'newPassword',
                secureTextEntry: true,
                placeholder: terms.passwordPlaceholder,
              }}
            />
            <TextInput
              icon="ios-lock"
              value={confirm}
              onChangeText={(text) => {
                setConfirm(text)
                if (confirmValidError.length > 0) setConfirmValidError('')
              }}
              valid={validateConfirm()}
              validError={confirmValidError}
              inputProps={{
                autoCompleteType: 'password',
                textContentType: 'newPassword',
                secureTextEntry: true,
                placeholder: terms.confirmPlaceholder,
              }}
            />
            <BounceButton style={styles.button} onPress={register}>
              <Text style={styles.buttonText}>{terms.register}</Text>
            </BounceButton>
          </View>
          <BaseView style={styles.socialBlock}>
            <SocialButton type="facebook" onPress={registerWithFacebook} />
            <SocialButton type="google" onPress={registerWithGoogle} />
            <SocialButton type="apple" onPress={registerWithApple} />
          </BaseView>
          <BaseView style={styles.singInBtnBlock}>
            <Text style={styles.signInBtnText}>{terms.signInQuestion}</Text>
            <BounceButton style={styles.signInBtn} onPress={goToSignIn}>
              <Text style={styles.signInActiveBtnText}>{terms.signIn}</Text>
            </BounceButton>
          </BaseView>
        </BaseView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
