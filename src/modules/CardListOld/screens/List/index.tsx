import React, { useRef, useState, useEffect } from 'react'
import {
  View, Animated, PanResponder, NativeScrollEvent,
} from 'react-native'
import Reanimated, { Easing } from 'react-native-reanimated'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { useValue } from 'react-native-redash'
import { Images, Styles } from '../../../../constants'
import { px } from '../../../../helpers/Dimensions'
import { Card } from '../../components'
import { CardType } from '../../types'
import styles from './styles'

export default function Home() {
  const [headerShow, setHeaderShow] = useState(true)
  const [scrollDistance, setScrollDistance] = useState(0)
  const scrollY: Animated.Value = new Animated.Value(0)
  const velocity = useValue(0)
  // const scroll = useRef<Animated.AnimatedComponent<ScrollView>>(null)

  const navigation = useNavigation()
  const isFocused = useIsFocused()

  let timeout: any

  useEffect(() => {
    if (isFocused && !headerShow) {
      setTimeout(() => {
        setHeaderShow(true)
        // timeout = scroll.current.scrollTo({ y: scrollDistance - 1 })
      }, 300)
    }
  }, [isFocused])

  useEffect(() => {
    clearTimeout(timeout)
  }, [scrollDistance])

  const cards = [
    {
      id: 'saitama',
      name: 'Saitama',
      photo: Images.getImage('onepunch'),
      quote: 'Just an average guy who serves as an average hero',
      description: 'Saitama is usually deliberately drawn in a simpler style than all the other characters, with an '
        + 'elliptical-shaped head and only a basic mouth and eyes. When drawn in a more serious style with more detail,'
        + ' Saitama is revealed to have sharp features, fearsome eyes, and chiseled musculature. Even his posture '
        + 'undergoes a metamorphosis, with a slack posture and sloping elbows when lax, while possessing a straightened'
        + ' posture and squared shoulders when serious. His costume is a plain yellow one-piece jumpsuit with a short '
        + 'zipper at the collar, along with a black belt with a round golden buckle at the center. He wears red gloves '
        + 'that go 3/4 up his forearms, as well as red boots that go up 3/4 of his shins. His costume is finished off '
        + 'by a white cape, which is secured to his shoulders with black circular fasteners.',
    },
    {
      id: 'garou',
      name: 'Garou',
      photo: Images.getImage('onepunch'),
      quote: "The popular will win, the hated will lose, it's such a tragedy.",
      description: 'Garou is a young man with sharp features, yellow eyes, and long silver hair that spikes upwards in '
        + 'two large prongs, giving a feeling of a young wolf.[8][9] While not being a particularly large person, he is'
        + ' shown to be quite muscular. He wears a tight black long-sleeved shirt and loose fitting white martial arts '
        + 'pants, similar to his former master Bang, with a yellow belt wrapped around his waist. He wears tai chi '
        + 'slippers for footwear. As time goes on and he battles stronger opponents, Garou\'s appearance changes and he'
        + ' becomes more and more monster-like. After suffering a second defeat at the hands of Saitama, he removes his'
        + ' shirt and wraps his upper body in bandages as he tries to recover. After fighting Death Gatling and the '
        + 'other heroes, his right eye becomes red and bloodshot, and during the consecutive battle with Genos he rubs '
        + 'his own blood into his hair and it becomes red in color.[10] Next he is given a tight long-sleeved black '
        + 'shirt and tight black martial arts pants by the Monster Association,[11] which begin to stick to the blood '
        + 'on his body and merge with his skin as he becomes a "half-monster" after his fight with Royal Ripper and Bug'
        + ' God. He also retains a large diagonal scar across his face that was inflicted by Royal Ripper. Later, after'
        + ' enduring several blasts from Overgrown Rover, his clothes become extremely torn and two strands of fabric '
        + 'flow in the wind behind him like scarves,[12] and after being defeated by Orochi his entire body is black '
        + 'with soot and ash.',
    },
    {
      id: 'genos',
      name: 'Genos',
      photo: Images.getImage('onepunch'),
      quote: 'Demon Cyborg',
      description: 'Genos is an extremely serious character. He constantly strives to become stronger and pesters '
        + "Saitama to train him frequently. Since becoming Saitama's disciple, Genos is very reverent and protective "
        + 'towards his "teacher", whom to an extent he envies, although he does express annoyance and disbelief at '
        + 'the mundane training regimen Saitama used to gain his powers. On most occasions, Genos acts as a comic foil '
        + "to Saitama's clueless antics, using a variety of special techniques, battle tactics and robotic upgrades to "
        + 'combat villains (and sustaining terrible damage in the process), only to be outclassed by Saitama with a '
        + "single punch. Due to Saitama's incredible strength, Genos is led to believe that there is a secret to "
        + "Saitama's power.",
    },
    {
      id: 'silverfang',
      name: 'Silverfang',
      photo: Images.getImage('onepunch'),
      quote: 'You do not need to know who the victor is within a battle using martial arts',
      description: 'Bang has a serious personality. His normal demeanor is very calm, shown when he is seemingly '
        + 'unafraid of the dragon-level meteor falling on Z-City. Unlike most other heroes in the series, Bang prefers '
        + 'to be called by his name rather than his hero alias, Silver Fang. Bang is also well-grounded in the ethics '
        + 'of heroism; he accuses the other S-Class heroes of being heartless for ignoring the disaster in Z-City and '
        + 'attending to their problems instead. Additionally, when witnessing Tanktop Black Hole accuse Saitama of '
        + "causing the civilians' misery, Bang watches from a distance sympathetically, but without interruption, "
        + 'noting that heroes have to take responsibility for their actions, and will normally have to deal with the '
        + 'lack of appreciation for their work. Later, when his disciple Charanko confronts Saitama by praising his '
        + "martial arts master's skill and hero rank, Bang angrily scolds his disciple not to embarrass him and states "
        + 'outright that Saitama is many times stronger than he is.',
    },
    {
      id: 'metalknight',
      name: 'Metal knight',
      photo: Images.getImage('onepunch'),
      quote: 'Dr. Bofoi',
      description: 'Bofoi has white hair and a large nose. He is also seen wearing a lab coat over his blue shirt. '
        + 'Bofoi acts mainly through the use of his robots controlled from a safe distance. Two of his robots have been'
        + ' displayed. The first is a large unit capable of flight with a high level of firepower attached. The second '
        + 'was much smaller, roughly human sized and with no visible weaponry, possibly used for reconnaissance.',
    },
    {
      id: 'tatsumaki',
      name: 'Tatsumaki',
      photo: Images.getImage('onepunch'),
      quote: 'To survive in this world... All you can do is get stronger',
      description: 'Tatsumaki has a rather brash, moody, hotheaded and impatient personality. She is disrespectful '
        + 'towards most people, especially to those she deems incompetent. She is completely intolerant to those who'
        + ' are impertinent, as shown when she pinned Genos to a large piece rubble for retaliating against her verbal'
        + ' abuse of Saitama. Tatsumaki especially dislikes being ignored or being called things like "brat".',
    },
  ]

  const onPressCard = (card: CardType, index: number) => {
    if (scrollDistance > ((index * px(440)) + px(35))
      && scrollDistance < (((index + 1) * px(440)) + px(15))) {
      setHeaderShow(false)
    }
    navigation.navigate('Details', {
      card,
      sharedElements: [
        `background.${card.id}`,
        `image.${card.id}`,
        `name.${card.id}`,
        {
          id: `description.${card.id}`,
          animation: 'fade',
          resize: 'clip',
          align: 'left-top',
        },
      ],
    })
  }

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_e, { vy }: { vy: any }) => {
        velocity.setValue(vy)
      },
      onPanResponderRelease: (_e, { vy }: { vy: any }) => {
        if (vy > 0.5 || vy < -0.5) {
          setTimeout(() => {
            Reanimated.timing(velocity, {
              toValue: 0, duration: 400, easing: Easing.in(Easing.ease),
            }).start()
          }, 1500 / Math.abs(vy))
        }
      },
    }),
  ).current

  return (
    <View style={Styles.fullFlex}>
      <Animated.ScrollView
        // ref={scroll}
        style={Styles.fullFlex}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
            listener: ({ nativeEvent: { contentOffset: { y } } }: { nativeEvent: NativeScrollEvent }) => {
              setScrollDistance(y)
            },
          },
        )}
        {...panResponder.panHandlers}
        contentContainerStyle={styles.content}
      >
        {cards.map((card: CardType, index: number) => (
          <Card
            {...{ card, velocity }}
            key={index.toString()}
            onPress={(): void => onPressCard(card, index)}
          />
        ))}
      </Animated.ScrollView>
    </View>
  )
}
