import React, { ReactNode } from 'react';
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
  heart: 'images/heart.png',
  eye: 'images/eye.svg',
  fiber: 'images/fiber.svg',
  fibers: 'images/fibers.png',
};

function getImage(name: keyof typeof images) {
  return images[name];
}
const spaceChar = '\u00A0';
function FixedFitText({ children, length, center = false }: { children: string; length: number; center?: boolean }) {
  const emptyCharsMargin = Math.floor((length - children.length) / 2);
  const text = emptyCharsMargin > 0
    ? (
      center
        ? spaceChar.repeat(emptyCharsMargin) + children + spaceChar.repeat(emptyCharsMargin)
        : children + spaceChar.repeat(length - children.length)
    )
    : children;

  return (
    <Text bold caps fit textColor="secondary">
      {text}
    </Text>
  );
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
        <Text bold fit textColor="secondary">
          Deep dive into React internals
        </Text>
        <FixedFitText length={10} center>How</FixedFitText>
        <Heading fit caps textColor="secondary">
          React Fibers
        </Heading>
        <Text bold caps fit textColor="secondary">
          works
        </Text>
        <br/>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Text bold caps fit textColor="secondary">
          First of all
        </Text>
        <Heading fit caps lineHeight={1.5} textColor="secondary">
          What is React?
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <FixedFitText length={55}>Library for building UI Components</FixedFitText>
        <br/>
        <FixedFitText length={55}>@Facebook open source since 201x</FixedFitText>
        <br/>
        <FixedFitText length={55}>Abstract UI with JS objects (React Elements)</FixedFitText>
        <br/>
        <FixedFitText length={55}>Simplifies state management (Components with state)</FixedFitText>
        <br/>
        <FixedFitText length={55}>Event handling and much more</FixedFitText>
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
        <CodePane lang="javascript" theme="light" style={{ fontSize: 32 }} source={` <div>
   <h1>Application header</h1>
   <CustomComponent str="abc" num={2} flag />
 </div>`}
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
        <CodePane lang="javascript" theme="light" style={{ fontSize: 28 }} source={` createElement('div', {
   children: [
     createElement(
       'h1',
       { text: 'Application header' }
     ),
     createElement(
       CustomComponent, 
       { str: 'abc', num: 2, flag: true })
   ]
 });`}
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
        <Text bold caps fit textColor="secondary">
          Ok, but how
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React handles state
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Function component with state
        </Heading>
        <br />
        <CodePane lang="javascript" theme="light" style={{ fontSize: 24 }} source={` function Counter({ initialValue = 0 }) {
   const [counter, setCounter] = useState(initialValue)
   const increase = () => { setCounter(v => v + 1) }
   return (
     <div>
       <span>{counter}</span>
       <button onClick={increase}>+</button>
     </div>
   )
 }`
        }
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('alice')}>
        <Text bold caps fit textColor="secondary">
          Now we can start story about
        </Text>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React Fibers
        </Heading>
        <Text bold caps fit textColor="secondary">
          Enter rabbit hole!
        </Text>
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

      <Slide textColor="tertiary" transition={['fade']} bgImage={getImage('fibers')}>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          React Fibers structure
        </Heading>
        <CodePane lang="typescript" theme="light" style={{ fontSize: 28 }} source={` interface Fiber {
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
 }`}
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('simply')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Simply
        </Heading>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Fibers = Work
        </Heading>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Text bold caps fit textColor="secondary">
          Simplest
        </Text>
        <Text bold caps fit textColor="secondary">
          React application?
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading fit caps lineHeight={1} size={1} textColor="secondary">
          Simplest React app
        </Heading>
        <br />
        <CodePane lang="javascript" theme="light" style={{ fontSize: 36 }} source={` ReactDOM.render(
   <span>Simplest React App</span>,
   document.getElementById('root'),
 );`}
        />
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('eye')}>
        <Text bold caps fit textColor="secondary">
          And how we can
        </Text>
        <Text bold caps fit textColor="secondary">
          visualize it?
        </Text>
        <Link href="https://g3f4.github.io/build-own-react-workshop?scenario=simplest">
          <Text bold caps fit textColor="secondary">
            Visualization link
          </Text>
        </Link>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('eye')}>
        <Text bold caps fit textColor="secondary">
          Ok, now React app with ...
        </Text>
        <Text bold caps fit textColor="secondary">
          FUNCTIONAL COMPONENT!
        </Text>
        <Link href="https://g3f4.github.io/build-own-react-workshop?scenario=withComponent">
          <Text bold caps fit textColor="secondary">
            Visualization link
          </Text>
        </Link>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('eye')}>
        <Text bold caps fit textColor="secondary">
          lastly, React app with Function Component
        </Text>
        <Link href="https://g3f4.github.io/build-own-react-workshop">
          <Text bold caps fit textColor="secondary">
            Visualization link
          </Text>
        </Link>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('simply')}>
        <Text bold caps fit textColor="secondary">
          And that is how
        </Text>
        <Text bold caps fit textColor="secondary">
          React Fibers work :)
        </Text>
      </Slide>

      <Slide bgColor="primary" transition={['fade']} bgImage={getImage('reactLogo')}>
        <Heading caps fit textColor="secondary">
          Cool links
        </Heading>
        <Text fit>https://pomb.us/build-your-own-react</Text>
        <Text fit>https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react</Text>
        <Text fit>https://github.com/G3F4/how-react-fibers-works</Text>
        <Text fit>https://github.com/G3F4/build-own-react-workshop</Text>
        <Text fit>https://dev.to/ameerthehacker/build-your-own-react-in-90-lines-of-javascript-1je2</Text>
      </Slide>

      <Slide textColor="tertiary" transition={['fade']}>
        <Heading fit caps size={2} textColor="secondary">
          Thank You!
        </Heading>
        <Image src={images.heart} width="33%" />
      </Slide>
    </Deck>
  );
}
