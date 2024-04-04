import React from "react";
type BGprops = { image: string; width: string; height: string };
const Background = (props: BGprops) => {
  const { image, width, height } = props;
  return (
    <div className="bg-container" style={{ width, height }}>
      <div className="bg-light-blue"></div>
      <div className="bg-light-pink"></div>
    </div>
  );
};

export default Background;
