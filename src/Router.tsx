import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoverPage from "./components/CoverPage";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import About from "./components/About";
import photo from "./images/photo.jpg";
import Article from "./components/Article.js";
import BillSplit from "./components/BillSplit";
import Flappy from "./components/flappybird";
const MRouter = () => {
  return (
    <Router basename="myblog">
      <Switch>
        <Route exact path="/">
          <CoverPage photo={photo} />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Blog">
          <Blog />
        </Route>
        <Route path="/flappy-bird">
          <Flappy />
        </Route>
        <Route path="/blog/:title">
          <Article />
        </Route>
        <Route path="/bill-spliter">
          <BillSplit />
        </Route>
      </Switch>
    </Router>
  );
};
export default MRouter;
