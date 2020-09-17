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

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          First of all, what is React
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Next, how React does UI
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          and how React handles state
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          But what is JSX
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Now, what those React elements are
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Is it all we need?
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          And now we start story about
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React Fibers
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Simply
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          It is just another way
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          To abstract DOM with state
        </Heading>
      </Slide>

      <Slide bgColor="tertiary" textColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">Thank You!</Heading>
      </Slide>
    </Deck>
  );
}
