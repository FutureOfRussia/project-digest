// @flow
import React, { useRef } from 'react'
import { Animated, TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'
import { useTerms } from '../../helpers/Utilities'
import { Header, Card } from '../../components'
import { px } from '../../helpers/Dimensions'
import styles from './styles'

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current
  const { home: terms } = useTerms()
  const navigation = useNavigation()

  return (
    <View>
      <Header
        title={terms.title}
        opacity={scrollY.interpolate({ inputRange: [0, 25], outputRange: [0, 1] })}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        contentContainerStyle={{
          paddingHorizontal: px(30),
          paddingTop: px(100),
        }}
      >
        <TouchableOpacity onPress={() => navigation.push('Card', { sharedElements: ['title'] })}>
          <SharedElement id="title">
            <Text>Details Screen</Text>
          </SharedElement>
        </TouchableOpacity>
      </Animated.ScrollView>
    </View>
  )
}
