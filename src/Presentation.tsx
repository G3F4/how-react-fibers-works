import React from 'react';
import { CodePane, Deck, Heading, Image, Slide, Text, Link, List, ListItem } from 'spectacle';
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
  gears: 'images/gears.svg',
  reactLogo: 'images/reactLogo.png',
  blocks: 'images/blocks.svg',
  binaryState: 'images/binaryState.svg',
  magic: 'images/magic.svg',
  atoms: 'images/atoms.svg',
  alice: 'images/alice.svg',
  fibersWork: 'images/fibersWork.gif',
  simply: 'images/simply.svg',
  theEnd: 'images/theEnd.svg',
};

function getImage(name: keyof typeof images) {
  return images[name];
}

export default function Presentation() {
  return (
    <Deck
      theme={theme}
      transitionDuration={1000}
      contentWidth="90%"
      contentHeight="90%"
    >
      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('gears')}>
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

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Text bold caps textSize="100" textColor="secondary">
          First of all
        </Text>
        <Heading fit caps lineHeight={1.5} textColor="secondary">
          What is React?
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <List>
          <ListItem bold>Library for building UI Components</ListItem>
          <ListItem bold>@Facebook open source since 201x</ListItem>
          <ListItem bold>Abstract UI with JS objects (React Elements)</ListItem>
          <ListItem bold>Simplifies state management (Components with state)</ListItem>
          <ListItem bold>Event handling and much more</ListItem>
        </List>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('blocks')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          So, how React
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          does UI
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Meet JSX
        </Heading>
        <CodePane lang="javascript" theme="light" style={{ fontSize: 36 }} source={`
  <div>
    <h1>Application header</h1>
    <CustomComponent str="abc" num={2} flag />
  </div>
          `}
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('magic')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          But what is this
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Magic JSX
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Text bold caps fit textColor="secondary">
          After @babel'ing code
        </Text>
        <CodePane lang="javascript" theme="light" style={{ fontSize: 36 }} source={`  createElement('div', {
    children: [
      createElement(
        'h1',
        { text: 'Application header' }
      ),
      createElement(
        CustomComponent, 
        { str: 'abc', num: 2, flag: true })
    ]
  });
          `}
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('atoms')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React elements
        </Heading>
        <Text bold caps fit textColor="secondary">
          describes UI building blocks
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('binaryState')}>
        <Text bold caps textSize="100" textColor="secondary">
          and how
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React handles state
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Function component with state
        </Heading>
        <CodePane lang="javascript" theme="light" style={{ fontSize: 32 }} source={`
  function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)
    const increase = () => { setCounter(v => v + 1) }
    return (
      <div>
        <span>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
    )
  }`}
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Text bold caps fit textColor="secondary">
          Now we can start story about
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React Fibers
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Text bold caps fit textColor="secondary">
          it starts with single GIF
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']}>
        <Image src={images.fibersWork} width="80%" height="50%"/>
        <br/>
        <br/>
        <br/>
        <Text bold caps fit textColor="darkGrey">
          Source: indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React Fibers structure
        </Heading>
        <CodePane lang="typescript" theme="light" style={{ fontSize: 32 }} source={`
  interface Fiber {
    tag: FunctionComponent | HostComponent | ...
    type: Function | string;
    stateNode: HTMLElement | null;
    pendingProps: Props;
    memoizedState: any;
    return: Fiber | null;
    sibling: Fiber | null;
    child: Fiber | null;
    alternate: Fiber | null;
    effectTag: EffectTag;
  }
        `}
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('simply')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Simply
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React Fibers are
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          way to describe work
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          which needs to be done on React Element
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Text bold caps textColor="secondary">
          What is
        </Text>
        <Text bold caps fit textColor="secondary">
          the simplest
        </Text>
        <Text bold caps fit textColor="secondary">
          React application?
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Simplest React app
        </Heading>
        <CodePane lang="javascript" theme="light" style={{ fontSize: 36 }} source={`
  ReactDOM.render(
    <span>Simplest React App</span>,
    document.getElementById('root'),
  );
          `}
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Text bold caps fit textColor="secondary">
          And how we can
        </Text>
        <Text bold caps fit textColor="secondary">
          visualize it?
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Link href="https://g3f4.github.io/build-own-react-workshop?scenario=simplest">
          <Text bold caps fit textColor="secondary">
            Simplest React App visualized link
          </Text>
        </Link>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Text bold caps fit textColor="secondary">
          Ok, now React app with state
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Link href="https://g3f4.github.io/build-own-react-workshop">
          <Text bold caps fit textColor="secondary">
            React app with state visualized link
          </Text>
        </Link>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Text bold caps fit textColor="secondary">
          And that is how
        </Text>
        <Text bold caps fit textColor="secondary">
          React Fibers work :)
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading caps textColor="secondary">
          Cool links
        </Heading>
        <List>
          <ListItem>https://pomb.us/build-your-own-react</ListItem>
          <ListItem>https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react</ListItem>
          <ListItem>https://github.com/G3F4/how-react-fibers-works</ListItem>
          <ListItem>https://github.com/G3F4/build-own-react-workshop</ListItem>
          <ListItem>https://dev.to/ameerthehacker/build-your-own-react-in-90-lines-of-javascript-1je2</ListItem>
        </List>
      </Slide>

      <Slide textColor="tertiary" transition={['fade']} bgImage={getImage('theEnd')}>
      </Slide>
    </Deck>
  );
}
