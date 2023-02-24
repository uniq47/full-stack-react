import { useEffect, useState } from "react";
import illustration_box from "../images/illustration-box-desktop.svg";
import illustration_woman_desktop from "../images/illustration-woman-online-desktop.svg";
import illustration_woman_mobile from "../images/illustration-woman-online-mobile.svg";
// .. to go one step back in the directory tree
// import { Loader } from "../styles/Loader";
import Accordion from "./Accordion";
import { fetchdata } from "../services/fetchData";

const App = () => {
  // we can have a variable one state to store the data cuz its chaing initial value wil benull
  // we want to set the questoinAnswers to the data that we got from the backend
  //so when we update the state(questionAnswers) with the help of useEffect,  because of the state updating function
  //(setQuestionAnswers) we can update this state with the data that we got from the backend
  const [questionAnswers, setQuestionAnswers] = useState();
  // useEffect is is used to fetch the data from the backend
  // fetch is a promise so to consume the promise we use then
  // res is in json formant so we will not have the data so
  // onceagin we will not have the data so we will use (res.json)then again to convert our json dat ato js object
  //res,jso, this is once again a promise so we will use then again to get the data
  // then method will return a promise so we use then again
  //
  // so here we are using then method 3 times
  // we are fetching it fron the external url,  converted json to js object (.then(res => res.json)) , now we have our js object in data then(data => )

  useEffect(() => {
    // //res has a data so we directlry rwrite data nad tehn set quesetionAnswers with data
    // fetchdata().then(data => setQuestionAnswers(data))
    // we dont have to wirte function key word
    //________________
    // imidiate invoke function so we dont have to wirte function keyword, and inside the function we can directly await the fucntion
    // we can directly provide it into the setQuestionAnswers function
    // we want to await what ever the data commig(await fetchdata()) from the fetchdata function and set ot to the
    // state updating fucntoi whihc is the questionAnswers, to invoke it we need to wrap it insdie a paranthesis
    //   (async () => {
    //     setQuestionAnswers(await fetchdata());
    //   })();
    // }, []);

    (async () => {
      try {
        const data = await fetchdata();
        setQuestionAnswers(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <main className="container">
      {
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
      }
    </main>
  );
};

export default App;
