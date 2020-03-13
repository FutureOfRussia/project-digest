// @flow
import React, { useRef, useState } from 'react'
import {
  View, TouchableWithoutFeedback, Text, Image, Animated, ImageBackground, TouchableOpacity,
} from 'react-native'
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element'
import { px, width } from '../../helpers/Dimensions'
import styles from './styles'
import { Colors } from '../../constants'

export default function Card() {
  const uri = 'https://sun1-98.userapi.com/c857728/v857728693/1958e6/fhqtCtXk4a4.jpg'
  const position = useRef(new Animated.Value(0)).current
  const startAncestor = useRef(null)
  const [startNode, setStartNode] = useState(null)
  const [endNode, setEndNode] = useState(null)
  const endAncestor = useRef(null)
  const [animation, setAnimation] = useState(true)

  // useEffect(() => {
  //   Animated.timing(position, {
  //     toValue: animation ? 1 : 0,
  //     duration: 250,
  //     delay: 500,
  //   }).start(() => setAnimation(!animation))
  // }, [animation])

  const startAnimation = () => {
    Animated.timing(position, {
      toValue: animation ? 1 : 0,
      duration: 250,
      delay: 500,
    }).start(() => setAnimation(!animation))
  }

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        marginBottom: px(30),
      }}
      onPress={startAnimation}
    >
      <View ref={startAncestor}>
        <SharedElement onNode={setStartNode}>
          <View
            style={{
              width: '100%',
              height: px(300),
              backgroundColor: Colors.white(),
              borderRadius: px(20),
            }}
          />
        </SharedElement>
      </View>
      <View ref={endAncestor}>
        <SharedElement onNode={setEndNode}>
          <View
            style={{
              // zIndex: 999,
              // position: 'absolute',
              // top: 0,
              width: width(100),
              height: px(700),
              backgroundColor: Colors.white(),
            }}
          />
        </SharedElement>
      </View>
      <SharedElementTransition
        start={{
          node: startNode,
          ancestor: nodeFromRef(startAncestor.current),
        }}
        end={{
          node: endNode,
          ancestor: nodeFromRef(endAncestor.current),
        }}
        position={position}
        animation="move"
        resize="auto"
        align="auto"
      />
    </TouchableOpacity>
  )
}
