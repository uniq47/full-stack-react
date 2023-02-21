import illustration_box from "../images/illustration-box-desktop.svg";
import illustration_woman_desktop from "../images/illustration-woman-online-desktop.svg";
import illustration_woman_mobile from "../images/illustration-woman-online-mobile.svg";
// .. to go one step back in the directory tree
import Accordion from "./Accordion";
import { questionAnswers } from "../data/questionAnswer";

const App = () => {
  return (
    <main className="container">
      <article className="component">
        <div className="illustration">
          <img
            src={illustration_box}
            alt="illustration with box"
            className="illustration__box"
          />
          <img
            src={illustration_woman_desktop}
            alt="illustration with women"
            className="illustration__woman-desktop"
          />
          <img
            src={illustration_woman_mobile}
            alt="illustration with women"
            className="illustration__women_mobile"
          />
        </div>

        {/* all questions into one component but the accordian cannot render the single componnet */}
        <Accordion questionAnswers={questionAnswers} />
        {/* here questionAnswers is the props that we got from App.js as a props and passing `questionAnswers` as a props to Accordian */}
      </article>
    </main>
  );
};

export default App;
