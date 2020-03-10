// @flow
import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components'
import styles from './styles'

export default function Main() {
  const [count, setCount] = useState(0)
  const { title } = useSelector((state) => state.main)
  const { main: { changeTitle } } = useDispatch()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{`Count: ${count}`}</Text>
      <TextInput
        value={title}
        onChangeText={(text) => changeTitle(text)}
        style={styles.input}
      />
      <Button label="Press this" onPress={() => setCount(count + 1)} />
    </View>
  )
}
