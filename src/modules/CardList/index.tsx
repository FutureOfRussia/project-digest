import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Reanimated from 'react-native-reanimated'
import { useValue, onScrollEvent } from 'react-native-redash'
import { px } from '../../helpers/Dimensions'
import { Card } from './components'
import styles from './styles'

const AnimatedFlatList = Reanimated.createAnimatedComponent(FlatList)

export default function CardList() {
  const length = 37
  const cards = new Array(length).fill(true)
  const y = useValue(0)

  return (
    <>
      <View />
      <AnimatedFlatList
        data={cards}
        keyExtractor={(_item: any, index: number) => index.toString()}
        renderItem={({ index }: { index: number }) => <Card {...{ index, y }} length={length} />}
        contentContainerStyle={styles.content}
        scrollEventThrottle={1}
        snapToInterval={px(230)}
        onScroll={onScrollEvent({ y })}
      />
    </>
  )
}
