import { useSpring, animated } from 'react-spring';

function TestComponent() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <h1>Hello, world!</h1>
    </animated.div>
  );
}

export default TestComponent;