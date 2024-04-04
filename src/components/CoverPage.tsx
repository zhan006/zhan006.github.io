import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Band from "./Band";
import { Link, useHistory } from "react-router-dom";
import Chika from "../images/chika.jpg";
import ghBtn from "../images/ghBtn.png";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.png";
import LinkBtn from "./LinkBtn";
import gmail from "../images/gmail.png";
import { THRESHOLD } from "./NavBar";
export type CoverProps = { photo: string };

const CoverPage = (props: CoverProps) => {
  const history = useHistory();
  let [largeSize, setLargeSize] = useState<Boolean>(() => {
    return window.innerWidth > THRESHOLD;
  });
  const onResize = () => {
    if (window.innerWidth < THRESHOLD) setLargeSize(false);
    else setLargeSize(true);
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="cover">
      <NavBar />
      <Band children={Intro} />
      <div className="show-case">
        {largeSize && (
          <article
            className="article-low-padding paper"
            style={{ width: "35vw", margin: 0 }}
          >
            <ul className="blog-list" style={{ marginTop: "0px" }}>
              <li className="header" style={{ color: "black" }}>
                Blog
              </li>
              <li>
                <div className="blog-title">
                  <Link to="/blog/Importance_of_shallow_copy_in_useState">
                    Importance of shallow copy in useState
                  </Link>
                </div>
              </li>
              <li>
                <div className="blog-title">
                  <Link to="/blog/implementation-of-combination-in-recursive-way">
                    implementation of combination in recursive way
                  </Link>
                </div>
              </li>
              <li>
                <div className="blog-title">
                  <Link to="/blog/menu-toggle-display-problem">
                    menu toggle play
                  </Link>
                </div>
              </li>
              <li>
                <div className="blog-title">
                  <Link to="/blog/wave-like-css-effect">
                    wave-like css effect
                  </Link>
                </div>
              </li>
            </ul>
          </article>
        )}
        <div
          className="contact-card paper"
          style={{ width: "300px", height: "600px" }}
        >
          <img src={Chika} alt="" style={{ width: "240px" }} />
          <h4>Catch Me</h4>
          <div className="button-show">
            <LinkBtn
              image={ghBtn}
              link={"https://github.com/zhan006"}
              name="zhan006"
            />
            <LinkBtn
              image={facebook}
              link={"https://www.facebook.com/profile.php?id=100018493895836"}
              name="zhan wang"
            />
            <LinkBtn
              image={linkedin}
              link={"https://www.linkedin.com/in/zhan-wang-703249164/"}
              name="Zhan wang"
            />
            <LinkBtn
              image={gmail}
              link="mailto:wzdx1024@gmail.com"
              name="Ben Wang"
            />
          </div>
        </div>
        {largeSize && (
          <div
            className="paper application"
            style={{ height: "500px", maxWidth: "500px" }}
          >
            <div className="header">App</div>
            <div style={{ padding: "1em 1em" }}>
              <h4>Split your bill</h4>
              <button
                className="btn-main"
                onClick={() => {
                  history.push("/bill-spliter");
                }}
              >
                Bill spliter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const Intro: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
      <article className="intro">
        <h2>Ben</h2>
        <p style={{ fontSize: "1.2em" }}>A software developer</p>
      </article>
      <button className="btn-main" onClick={() => history.push("/about")}>
        Learn More
      </button>
    </>
  );
};
export default CoverPage;
