import React from "react";
import bird from "../../images/bird.gif";
export type BirdProps = {
  posY: number;
  deg?: number;
};
export function Bird({ posY, deg }: BirdProps, ref: any) {
  return (
    <div
      className="bird"
      style={{ top: `${posY}vh`, transform: `rotate(${deg || 0}deg)` }}
      ref={ref}
    >
      <img src={bird}></img>
    </div>
  );
}
export default React.forwardRef(Bird);
