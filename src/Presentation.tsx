import React from 'react';
import { Deck, Heading, Slide, Text, Image  } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    darkGrey: '#5f5f5f',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const images = {
  gears: '/images/gears.svg',
  reactLogo: '/images/reactLogo.png',
  blocks: '/images/blocks.svg',
  binaryState: '/images/binaryState.svg',
  magic: '/images/magic.svg',
  atoms: '/images/atoms.svg',
  alice: '/images/alice.svg',
  fibersWork: '/images/fibersWork.gif',
  simply: '/images/simply.svg',
  theEnd: '/images/theEnd.svg',
}

export default function Presentation() {
  return (
    <Deck
      theme={theme}
      transitionDuration={1000}
      contentWidth="90%"
      contentHeight="90%"
    >
      <Slide bgColor="primary" transition={['fade']} bgImage={images.gears}>
        <Text bold caps textSize="100" textColor="secondary">
          How
        </Text>
        <Heading fit caps lineHeight={1.5} textColor="secondary">
          React Fibers
        </Heading>
        <Text bold caps textSize="100" textColor="secondary">
          works
        </Text>
        <br/>
        <Text bold fit textColor="secondary">
          Deep dive into React internals
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={images.reactLogo}>
        <Text bold caps textSize="100" textColor="secondary">
          First of all
        </Text>
        <Heading fit caps lineHeight={1.5} textColor="secondary">
          What is React?
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={images.blocks}>
        <Text bold caps textSize="100" textColor="secondary">
          Next
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          how React
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          does UI
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={images.binaryState}>
        <Text bold caps textSize="100" textColor="secondary">
          and how
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React handles state
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={images.magic}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          But what is this
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Magic JSX
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={images.atoms}>
        <Text bold caps fit textColor="secondary">
          Now what are those
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React elements
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={images.alice}>
        <Text bold caps fit textColor="secondary">
          And now we start story about
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React Fibers
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Image src={images.fibersWork} width="80%" height="50%" />
        <br />
        <br />
        <br />
        <Text bold caps fit textColor="darkGrey">
          Source: https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/
        </Text>

      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={images.simply}>
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

      <Slide textColor="tertiary" transition={['fade']} bgImage={images.theEnd}>
      </Slide>
    </Deck>
  );
}
