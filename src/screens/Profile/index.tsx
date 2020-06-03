import React from 'react'
import {
  Image, StatusBar, Text, View,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors, Images, Styles } from '../../constants'
import { useTerms } from '../../helpers/Utilities'
import { LinkComponent } from '../../components'
import { px } from '../../helpers/Dimensions'
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

  return (
    <View style={Styles.fullFlex}>
      <StatusBar barStyle="light-content" />
      <Image source={Images.for} style={styles.headerImage} />
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: px(38) }]}>{terms.name}</Text>
        <View style={styles.textBlock}>
          <MaterialCommunityIcons name="briefcase-outline" size={px(28)} color={Colors.BLACK} />
          <Text style={styles.text}>{terms.work}</Text>
        </View>
        <View style={styles.textBlock}>
          <MaterialCommunityIcons name="map-marker-outline" size={px(28)} color={Colors.BLACK} />
          <Text style={styles.text}>{terms.place}</Text>
        </View>
        <Text style={styles.title}>{terms.linksTitle}</Text>
        <LinkComponent link={links.hh} />
        <LinkComponent link={links.git} />
        <Text style={styles.title}>{terms.contactsTitle}</Text>
        <LinkComponent link={links.mail} />
        <LinkComponent link={links.telegram} />
      </View>
    </View>
  )
}
