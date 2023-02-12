import illustration_box from "./images/illustration-box-desktop.svg";
import illustration_woman_desktop from "./images/illustration-woman-online-desktop.svg";
import illustration_woman_mobile from "./images/illustration-woman-online-mobile.svg";

const App = () => {
  return (
    <div>
      <div>
        <img src={illustration_box} alt="illustration with box" />
        <image src={illustration_woman_desktop} alt="illustration with women" />
        <image src={illustration_woman_mobile} alt="illustration with women" />
      </div>
      <div>
        <h1> FAQ</h1>
        <dl>
          <div>
            <dt>
                <button> My First Question</button>
            </dt>
            <dd>
                <p>My first Answer</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default App;
