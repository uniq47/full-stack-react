import Accordionitem from "./Accordionitem";
//questionAnswers is the props that we got from App.js as a props
function Accordion({ questionAnswers }) {
  // we have array of objects , with array we have metods like map, filter, reduce
  console.log(questionAnswers);
  // what can we write insdie map method. We can write a function that will return a jsx,
  // callback function that will return a jsx
  //call back fucntion(()=>{}) argument that we can write insdie  accepting something here(anyname)
  //item the nlets console.log(item) what is the data type of item, its a object
  // it will print 5 objects on the console, it will reder twice so another 5

  // how to write java script in jsx put insdie the curly braces
  //map function is running 5 time 
  return (
    <div className="faq">
      <h1 className="faq__title"> FAQ</h1>
      {/* writing Accordion here is like writting <div>Accordion</div> */}

      <dl>
        {questionAnswers.map((item) => {
          // <Accordionitem />>
          return <div>
            <div>
            {item.question}
            </div>
            <div>
            {item.answer}
            </div>
          </div>
        })}
        
      </dl>
    </div>
  );
}

export default Accordion;
