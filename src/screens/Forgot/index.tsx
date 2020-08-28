import React, { useState } from 'react'
import {
  Alert,
  ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View as BaseView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { BlurView } from 'expo-blur'
import { validateEmail } from '../../helpers/Utilities'
import { useColorScheme, useTerms } from '../../hooks'
import { black, white } from '../../helpers/Colors'
import { Images, Styles } from '../../constants'
import {
  BounceButton, Text, TextInput, View,
} from '../../components'
import styles from './styles'

export default function Forgot() {
  const [email, setEmail] = useState('')
  const [emailValidError, setEmailValidError] = useState('')
  const { forgot: terms, validations } = useTerms()
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  const goAway = () => {}

  const checkEmail = () => {
    if (!validateEmail(email)) {
      if (email.length === 0) setEmailValidError(validations.emailEmpty)
      else setEmailValidError(validations.emailIncorrect)
      return false
    }
    return true
  }

  const reset = () => {
    const emailStatus = checkEmail()
    if (emailStatus) {
      Alert.alert(
        'Reset password',
        'Your password will be reset',
        [
          { onPress: () => navigation.navigate('SignIn'), style: 'destructive', text: 'Reset' },
          { onPress: () => {}, style: 'cancel', text: 'Cancel' },
        ],
      )
    }
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
            <BounceButton style={styles.button} onPress={reset}>
              <Text style={styles.buttonText}>{terms.reset}</Text>
            </BounceButton>
          </View>
          <BaseView style={styles.footer}>
            <Text style={styles.footerText}>{terms.footer}</Text>
            <BounceButton style={styles.footerBtn} onPress={goAway}>
              <Text style={styles.footerActiveBtnText}>{terms.footerBtn}</Text>
            </BounceButton>
          </BaseView>
        </BaseView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
