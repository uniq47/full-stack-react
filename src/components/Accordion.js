import { useState } from "react";
import Accordionitem from "./Accordionitem";
//questionAnswers is the props that we got from App.js as a props
function Accordion({ questionAnswers }) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="faq">
      <h1 className="faq__title"> FAQ</h1>

      <dl>
        {questionAnswers.map((item, index) => {
          // when we click on the button then the index of the button will be stored in the activeItem
          // index is the index of the button that we clicked match with the index of the questionAnswers array then we will show the answer
          const showDescription = index === activeItem ? "show-description" : "";
          //to detect if passed or not
          const ariaExpanded = index === activeItem ? true : false;
          //aria level  <span role - button so now the span will be a button
          // if wanna make font bold when clicked ,
          // crated variable andpassed it as a props to Accordionitem
          const fontBold = index === activeItem ? true : false;

          return (
            <Accordionitem
              qa={item} // qa is item it is an object,
              key={index} // keu is index it is a numnber
              // myClick={() => {
              //   console.log("clicked");
              //   setActiveItem(index);
              // }}
              // myClick={handleClick}

              onClick={() => setActiveItem(index)}
              index={index}
              showDescription={showDescription}
              ariaExpanded={ariaExpanded}
              fontBold={fontBold}
            />
          );
        })}
      </dl>
    </div>
  );
}
export default Accordion;
