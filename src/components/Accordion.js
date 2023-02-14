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
        {questionAnswers.map((item,index) => {
         
          return  <Accordionitem qa ={item} key = {index} />
        })}
        
      </dl>
    </div>
  );
}// passed a prop form accordion to accordionitem <Accordionitem qa ={item} key = {index} />
// when mapping a component with out passing a key prop react will give a warning saying that we need to pass a key prop
// when mapping in react we need to write a key prop here aso react will understand whioch one isthe firs second andquestoin
// with out passing hte ke prop it meyu not usderstand clearly 
// key should be unique so we pass unque elemnt each and everytime here  Accordionitem key = {here}
// index starts at 0 and goes at the end of the array its always unoque so we cna write index here  Accordionitem key = {index}
// most of the tome we getit from api or some time we generate , we need to pass the key or we will see the error.Each child in a list should have a unique "key" prop. 
export default Accordion;
