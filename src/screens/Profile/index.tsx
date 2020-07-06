import React from 'react'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { useThemeColor, useTerms } from '../../hooks'
import { Link, View, Text } from '../../components'
import { Images, Styles } from '../../constants'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'
import styles from './styles'

export default function Profile() {
  const { profile: terms } = useTerms()

  const links = {
    hh: {
      icon: 'file-document-outline',
      url: 'https://orel.hh.ru/applicant/resumes/view?resume=de660428ff03b843b30039ed1f423667336e79',
      title: terms.resume,
    },
    git: {
      icon: 'github-circle',
      url: 'https://github.com/FutureOfRussia',
      title: terms.repository,
    },
    mail: {
      icon: 'email-outline',
      url: 'mailto:futureofrussia@list.ru',
      title: 'futureofrussia@list.ru',
    },
    telegram: {
      icon: 'telegram',
      url: 'https://tlg.fyi/futureofrussia',
      title: '@futureofrussia',
    },
  }

  const color = useThemeColor({}, 'text')

  return (
    <View style={Styles.fullFlex}>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
      <Image source={Images.for} style={styles.headerImage} />
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: px(38) }]}>{terms.name}</Text>
        <View style={styles.textBlock}>
          <MaterialCommunityIcons name="briefcase-outline" size={px(28)} color={color} />
          <Text style={styles.text}>{terms.work}</Text>
        </View>
        <View style={styles.textBlock}>
          <MaterialCommunityIcons name="map-marker-outline" size={px(28)} color={color} />
          <Text style={styles.text}>{terms.place}</Text>
        </View>
        <Text lightColor={black(0.6)} style={styles.title}>{terms.linksTitle}</Text>
        <Link {...links.hh} />
        <Link {...links.git} />
        <Text style={styles.title}>{terms.contactsTitle}</Text>
        <Link {...links.mail} />
        <Link {...links.telegram} />
      </View>
    </View>
  )
}
