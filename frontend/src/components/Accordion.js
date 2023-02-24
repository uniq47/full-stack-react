import { useState } from "react";
import Accordionitem from "./Accordionitem";
// import styles from "./Accordion.module.css";
import {Loader} from "../Loader";



import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}


//questionAnswers is the props that we got from App.js as a props
function Accordion({ questionAnswers }) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="faq">
      <h1 className="faq__title"> FAQ</h1>

      <dl>
        {questionAnswers ? (
          questionAnswers?.map((item, index) => {
            const showDescription =
              index === activeItem ? "show-description" : "";

            const ariaExpanded = index === activeItem ? true : false;

            const fontBold = index === activeItem ? true : false;

            return (
              <Accordionitem
                qa={item} // qa is item it is an object,
                key={index} // keu is index it is a numnber
                onClick={() => setActiveItem(index)}
                index={index}
                showDescription={showDescription}
                ariaExpanded={ariaExpanded}
                fontBold={fontBold}
              />
            );
          })
        ) : (
          // <div className={styles.loader}></div> we can use this but we will use the loader from the styles folder
          // we can use this anywhere 
          // <Loader border={"red"} borderTop={"blue"} />
          <LinearIndeterminate />
        )}
      </dl>
    </div>
  );
}
export default Accordion;
