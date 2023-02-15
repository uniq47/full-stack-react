import Accordionitem from "./Accordionitem";
//questionAnswers is the props that we got from App.js as a props
function Accordion({ questionAnswers }) {
  console.log(questionAnswers);
  // the main use of active insex is to apply css or events or expand or collaps e depending on the state of our activeitem,
  const [activeItem, setActiveItem] = useState(0);
  // // lets see if we cna recieve that state here,  so we are perfoming cick event and activating the state, when we clikc the value of the  state is changing when we click in 0, 1,2,3,4
  //
  console.log(activeItem);

  // to capture the clicp event from Accordionitem.js

  //the function from accordion is activating when we clikc on the screen, by cicking on the element on the accordionitem.js
  // the function which is on accordion.js is activating, we are not calling it ourself, we are calling it from Accordionitem.js
  // _____
  // now lets store setActivetem in a function
  // this is not a large code a single line code so we can actually just write it on myClick as
  // function handleClick() {

  //   setActiveItem(index);
  // }

  return (
    <div className="faq">
      <h1 className="faq__title"> FAQ</h1>

      <dl>
        {questionAnswers.map((item, index) => {
          // console.log(item);
          // if we had html element like div it would have called by itself,
          // but sicne its our one element its a component it will not be able to call onClick by itself
          // we call it insdie Accordianitem.js and pass it as a props

          //what we  are doing in the Accordionitem.js is we were passing iteam to accordiamitem , we are passing key to accprdian, but the key will not be passed to the Accordionitem.js as it is not a props
          // it is just to write in accrodian.js to make it usinque each adn everytime, we are recievving on click from Accordion.js to Accordionitem.js
          // we only accept item and onClick as a props in Accordionitem.js, later we destructure the item or we can use item.quetion or item.answer
          // so we passed two props in Accordionitem.js form accrodian.js
          // onclikc is used in the div element in Accordionitem.js
          //
          return (
            <Accordionitem
              qa={item} // qa is item it is an object,
              key={index} // keu is index it is a numnber
              //// this will not call it by itself as it's a callback function and we are directly calling it in
              // Accordionitem.js so it will be called depending on the interaction with the user, we can attac it some were in the dic ,
              // we hav eto write exact event here as now we are going to call it in the we can sue function , it will be activated,
              // we have a fucntion comming from, her ewe are not writing the function ourself as we are calling it from Accordionitem.js
              // there is a fucntion comming from Accordion.js and myclick we wwant to cliuck that funciton on click so we apply that onClick instead of the fucntion we had
              // we wil call it depending on someof our interaction. we can attually attact it in the dic and it will be called by itself
              // we have to crfeate a new function now to handle the click event
              // myClick={() => {
              //   console.log("clicked");
              //   setActiveItem(index);
              // }}
              // myClick={handleClick}
              // we are passing one more prop to Accordionitem.js from Accordion.js // handleclick is a reference to the function, we can call it direclt if we do it will clikced 5 times
              // then we pass it to Accordionitem.js and we call it there, we have to accept it so we have accepted in myClick function Accordionitem({qa: {question,answer}, myClick})
              //then we are attaching it in onClick event, that is the actual even that is attached on the div which is an html elemnt  <div className="faq__question" onClick={myClick}>
              //
              myClick={() => setActiveItem(index)}
              // arrow function is returning setActive Item function here, cant wirte it directly here it will call it itseld so we have e to pass it in with in the function
            />
          );
        })}
      </dl>
    </div>
  );
}
export default Accordion;
