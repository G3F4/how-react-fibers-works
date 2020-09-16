import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default function Presentation() {
  return (
    <Deck
      theme={theme}
      transitionDuration={1000}
      contentWidth="90%"
      contentHeight="90%"
    >
      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          How React Fibers works
        </Heading>
        <Text bold fit margin="10px 0 0" textColor="tertiary">
          Deep dive into React internals
        </Text>
      </Slide>

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">Thank You!</Heading>
      </Slide>
    </Deck>
  );
}
