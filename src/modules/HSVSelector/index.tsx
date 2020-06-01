// @flow
import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import { Surface } from 'gl-react-expo'
import { GLSL, Node, Shaders } from 'gl-react'
import Animated, {
  call, color, cond, eq, useCode,
} from 'react-native-reanimated'
import { State } from 'react-native-gesture-handler'
import {
  hsv2color, hsv2rgb, ReText, string, useValues,
} from 'react-native-redash'
import { px } from '../../helpers/Dimensions'
import { Picker, Slider } from './components'
import styles from './styles'

interface Color {
  r: number
  g: number
  b: number
}

export default function HSVSelector({ onSave }: { onSave: (color: Color) => void }) {
  const [hue, saturation, value, state] = useValues(0.0, 0.0, 0.0, State.UNDETERMINED)
  const { r, g, b } = hsv2rgb(hue, saturation, value)

  const shaders = Shaders.create({
    hue: {
      frag: GLSL`
        #define PI  3.141592653589793
        precision highp float;
        varying vec2 uv;
        
        vec3 hsv2rgb(vec3 c) {
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        
        float quadraticIn(float t) {
          return t * t;
        }
        
        void main() {
          float mag = distance(uv, vec2(0.5));
          vec2 pos = vec2(0.5) - uv;
          float a = atan(pos.y, pos.x);
          float hue = a * 0.5 / PI + 0.5;
          gl_FragColor = vec4(hsv2rgb(vec3(hue, quadraticIn(mag * 2.0), 1.0)), 1.0);
        }
      `,
    },
  })

  useCode(() => cond(
    eq(state, State.END),
    call([r, g, b], ([_r, _g, _b]) => onSave({ r: _r, g: _g, b: _b })),
  ), [])

  return useMemo(() => (
    <View style={styles.container}>
      <View style={styles.rgbBlock}>
        <ReText text={string`R${r}`} style={[styles.rgb, { color: color(r, 0, 0) }]} />
        <ReText text={string`G${g}`} style={[styles.rgb, { color: color(0, g, 0) }]} />
        <ReText text={string`B${b}`} style={[styles.rgb, { color: color(0, 0, b) }]} />
      </View>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>HSV selector</Text>
      </View>
      <Slider value={value} color={hsv2color(hue, saturation, 1)} state={state} />
      <Animated.View style={[styles.colorBlock, { backgroundColor: color(r, g, b) }]}>
        <View style={styles.hueBlock}>
          <Surface style={styles.hue}>
            <Node shader={shaders.hue} />
          </Surface>
          <Picker hue={hue} saturation={saturation} size={px(225)} state={state} />
        </View>
      </Animated.View>
    </View>
  ), [])
}
