export default {
  titles: {
    home: 'Components',
    hsv: 'HSV Selector',
  },
  home: {
    title: 'Components',
    cards: {
      hsv: {
        title: 'HSV Selector',
        description: 'This component allows you to select a color from the HVS model.',
      },
      cardList: {
        title: 'Card list',
        description: 'A list of cards with responsive animation of movements and transitions to the page with details.',
      },
    },
  },
  hsv: {
    selectColor: 'Select color',
    description: '## Description'
      + '\n'
      + 'A component for accurate and convenient color adjustment, has two independent pickers:'
      + '\n\n'
      + '* circular to select hue and saturation\n'
      + '* linear for brightness control\n'
      + '\n\n'
      + 'The upper part shows the RGB version of the selected color. Callback '
      + '"onSave" returns the color in RGB format after releasing one of the pickers.'
      + '\n\n'
      + '## Technical part'
      + '\n'
      + 'The color wheel was created using [gl-react](https://github.com/gre/gl-react) and its implementation for '
      + 'React Native - [gl-react-native](https://github.com/gre/gl-react/blob/master/packages/gl-react-native).'
      + '\n'
      + '[gl-react](https://github.com/gre/gl-react) is a React library for writing and creating WebGL shaders.'
      + '\n\n'
      + 'Animation is handled using the '
      + '[React Native Reanimated](https://software-mansion.github.io/react-native-reanimated/) '
      + 'library, a low-level abstraction for the Animation API.'
      + '\n\n'
      + '[React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/) '
      + 'is responsible for handling touches.',
  },
  profile: {
    name: 'Nikita Zalygin',
    work: 'React Native Developer',
    place: 'Orel, Russia',
    linksTitle: 'My links:',
    contactsTitle: 'Contact me:',
    resume: 'resume on HeadHunter',
    repository: 'my repository',
  },
}
