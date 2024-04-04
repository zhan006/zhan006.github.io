import React, { useCallback, useEffect, useRef, useState } from "react";
import Bird from "./bird";
import Pipe, { PipeProps } from "./pipe";
import "./flappy.scss";
const pipeSpeed = 25;
const pipeInterval = 2;
const holeHeight = 200;
const GRAVITY = 100;
let lastPipeUpdate = 0;
let birdSpeed = 0;

const checkLose = (birdRef: any, pipes: any) => {
  return collideWithPipe(birdRef, pipes) || hitMargin(birdRef);
};
const collideWithPipe = (birdRef: any, pipes: any) => {
  const bird = birdRef.current;
  const birdRect = bird.getBoundingClientRect();
  const pipeRect = pipes
    .map((pipe: any) => {
      return [
        pipe.topRef.current?.getBoundingClientRect(),
        pipe.botRef.current?.getBoundingClientRect(),
      ];
    })
    .flat()
    .filter((rect: any) => rect !== undefined);
  return pipeRect.some((rect: any) => {
    return (
      birdRect.top < rect.bottom - 10 &&
      birdRect.bottom > rect.top + 10 &&
      birdRect.left < rect.right - 10 &&
      birdRect.right > rect.left + 10
    );
  });
};
const hitMargin = (birdRef: any) => {
  const birdRect = birdRef?.current?.getBoundingClientRect();
  return birdRect.top < 0 || birdRect.bottom > window.innerHeight;
};
const createPipe = (): PipeProps => {
  return {
    posX: 110,
    posY: Math.random() * (100 - 20) + 20,
    holeHeight: holeHeight,
    topRef: React.createRef(),
    botRef: React.createRef(),
  };
};
const updateBird = (speed: number, height: any, delta: any) => {
  return height - speed * delta;
};
// let lastTime: null | number = null;
const jump = () => {
  birdSpeed = 50;
};

export default function Flappy() {
  const [pipes, setPipes] = useState<PipeProps[]>([]);
  const [birdHeight, setBirdHeight] = useState(50);
  const [birdDeg, setBirdDeg] = useState(0);
  const [gravity, setGravity] = useState(GRAVITY);
  const [pipeNumber, setPipeNumber] = useState(0);
  const [lose, setLose] = useState(true);
  const [lastTime, setLastTime] = useState(null);
  const birdRef = useRef(null);
  const start = () => {
    setPipeNumber(0);
    setGravity(GRAVITY);
    setLose(false);
  };
  const refreshFrame = (time: any) => {
    if (!lose) {
      if (lastTime != null) {
        const delta = (time - (lastTime || 0)) / 1000;
        if (checkLose(birdRef, pipes)) {
          return setTimeout(() => {
            setLose(true);
            setGravity(0);
            birdSpeed = 0;
            window.removeEventListener("keydown", jump);
            setBirdHeight(50);
            setLastTime(null);
            setBirdDeg(0);
          }, 300);
        }
        setPipes(updatePipes(pipes, delta));
        birdSpeed -= delta * gravity;
        setBirdDeg(() => {
          return -(Math.atan(birdSpeed / pipeSpeed) / Math.PI) * 180;
        });
        setBirdHeight((height) => updateBird(birdSpeed, height, delta));
      }
      setLastTime(time);
    } else {
      return;
    }
  };
  const updatePipes = (pipes: any, delta: any) => {
    lastPipeUpdate += delta;
    if (lastPipeUpdate > pipeInterval) {
      lastPipeUpdate = 0;
      pipes.push(createPipe());
    }
    let newPipes = pipes.map((pipe: any) => {
      pipe.posX -= pipeSpeed * delta;
      return pipe;
    });
    newPipes = newPipes.filter((p: any) => {
      if (p.posX < 0) {
        setPipeNumber((p) => p + 1);
      }
      return p.posX > 0;
    });

    return newPipes;
  };

  useEffect(() => {
    window.requestAnimationFrame(refreshFrame);
  }, [lastTime]);
  useEffect(() => {
    window.addEventListener("keydown", jump);
    if (!lose) {
      window.requestAnimationFrame(refreshFrame);
    } else {
      setPipes([]);
      window.addEventListener("keydown", start, { once: true });
    }
    return () => {
      window.removeEventListener("keydown", jump);
      window.removeEventListener("keydown", start);
    };
  }, [lose]);
  return (
    <div className="flappy-game">
      <div className="prompt">
        {lose && (
          <>
            <h1>Flappy Bird</h1>
            <p>Press any key to begin</p>
          </>
        )}
        {<p>{pipeNumber}</p>}
      </div>
      <Bird posY={birdHeight} ref={birdRef} deg={birdDeg} />
      {pipes.map((p) => (
        <Pipe {...p} />
      ))}
    </div>
  );
}
