// we got myClick as a props from Accordion.js
//function Accordionitem({qa: {question,answer}, myClick}) {
function Accordionitem({ qa, myClick }) {
  //// myClick();  this will not call it by itself as it's a callback function and we are directly calling it in
  // Accordionitem.js so it will be called depending on the interaction with the user we can attach it in div
  //and it will be called by itself and

  //// this will not call it by itself as it's a callback function and we are directly calling it in
  // Accordionitem.js so it will be called depending on the interaction with the user, we can attac it some were in the dic ,
  // we hav eto write exact event here as now we are going to call it in the we can sue function , it will be activated,
  // we have a fucntion comming from, her ewe are not writing the function ourself as we are calling it from Accordionitem.js
  // there is a fucntion comming from Accordion.js and myclick we wwant to cliuck that funciton on click so we apply that onClick instead of the fucntion we had
  return (
    //we want to applu that fucnion on CLick insdteasd of that one we had here
    // onclick ={()={}} we dont have to write it our self as myclick is comming from Accordion.js and we are calling it from Accordionitem.js , onclick={myClick}
    <div className="faq__question" onClick={myClick}>
      {/* we can still use fucntion here and clicked here and when we click itwill be activated here , 
      we are / this will not call it by itself as it's a callback function and we are directly calling it in 
              // Accordionitem.js so it will be called depending on the interaction with the user, we can attac it some were in the dic , 
              // we hav eto write exact event here as now we are going to call it in the we can sue function , it will be activated,
              // we have a fucntion comming from, her ewe are not writing the function ourself as we are calling it from Accordionitem.js
              // there is a fucntion comming from Accordion.js and myclick we wwant to cliuck that funciton on click so we apply that onClick instead of the fucntion we had 
  return ( //we want to applu that fucnion on CLick insdteasd of that one we had here  */}
      <dt>
        <button className="faq__question-button"> {qa.question}</button>
      </dt>
      <dd>
        <p className="faq__descj">{qa.answer}</p>
      </dd>
    </div>
  );
}
// prop drilling can be solved by context api, if is passing between greater then 3 then we should use context api
export default Accordionitem;
