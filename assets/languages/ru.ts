export default {
  titles: {
    home: 'Компоненты',
    hsv: 'HSV Selector',
  },
  home: {
    title: 'Компоненты',
    cards: {
      hsv: {
        title: 'HSV Selector',
        description: 'Этот компонент позволяет выбрать цвет в HSV моделе.',
      },
      cardList: {
        title: 'Список карточек',
        description: 'Список карточек с отзывчивой анимацией движения и переходами на страницу с подробностями.',
      },
    },
  },
  hsv: {
    selectColor: 'Выберите цвет',
    description: '## Описание'
      + '\n'
      + 'Компонент для точной и удобной настройки цвета, имеет два независимых пикера:'
      + '\n\n'
      + '* круговой для выбора тона и насыщенности\n'
      + '* линейный для регулирования яркости\n'
      + '\n\n'
      + 'В верхней части указан RGB вариант выбранного цвета. Callback '
      + '"onSave" возвращает цвет в формате RGB после отпускания одного из пикеров.'
      + '\n\n'
      + '## Техническая часть'
      + '\n'
      + 'Цветовой круг создан с помощью [gl-react](https://github.com/gre/gl-react) и ее реализацией '
      + 'для React Native - [gl-react-native](https://github.com/gre/gl-react/blob/master/packages/gl-react-native).'
      + '\n'
      + '[gl-react](https://github.com/gre/gl-react) - это библиотека React для написания и создания шейдеров WebGL.'
      + '\n\n'
      + 'Работа с анимацией осуществляется с помощью библиотеки '
      + '[React Native Reanimated](https://software-mansion.github.io/react-native-reanimated/) '
      + '- низкоуровневая абстракция для API Animation.'
      + '\n\n'
      + 'За обработку касаний отвечает библиотека '
      + '[React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/).',
  },
  profile: {
    name: 'Никита Зaлыгин',
    work: 'React Native Developer',
    place: 'Орёл, Россия',
    linksTitle: 'Ссылки',
    contactsTitle: 'Контакты',
    resume: 'резюме на HeadHunter',
    repository: 'мой репозиторий',
  },
}
