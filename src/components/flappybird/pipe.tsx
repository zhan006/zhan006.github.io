import React from "react";
export type PipeProps = {
  posX: number;
  posY: number;
  holeHeight: number;
  topRef: any;
  botRef: any;
};
export default function Pipe({
  posX,
  posY,
  holeHeight,
  topRef = null,
  botRef = null,
}: PipeProps) {
  return (
    <div className="pipe" style={{ left: `${posX}vw` }}>
      <div className="pipe-top" style={{ bottom: `${posY}vh` }} ref={topRef} />
      <div
        className="pipe-bottom"
        style={{ top: `calc(${100 - posY}vh + ${holeHeight}px)` }}
        ref={botRef}
      />
    </div>
  );
}
