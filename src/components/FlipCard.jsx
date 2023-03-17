import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './FlipCards.css';

function FlipCard() {
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    });
    return (
        <div className="FlipCard" onClick={() => setFlipped(state => !state)}>
          <animated.div className="FlipCard-front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
            <h1 className="text-4xl font-bold">Front</h1>
          </animated.div>
          <animated.div className="FlipCard-back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
            <h1 className="text-4xl font-bold">Back</h1>
          </animated.div>
        </div>
      );}

export default FlipCard;
