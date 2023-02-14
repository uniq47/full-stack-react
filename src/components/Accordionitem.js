
// destructuring the props we can do this {question } but we cant 
// as WE NEED TO , WE CAN WRITE ANY NAME WE CAN WRITE ABCDEF INSTED OF QA
//WE WRITE IT PROPS, PROPS CONTAINS THE QUESTION AND ANSWER 
// so first we destructure the qa where it will contain the question ans answers
function Accordionitem({qa: {question,answer}}) {
  //const{question,answer} = qa;
// so  we destructured the qa and we got the question and answer
// we can do nexted destructuring like this const{question,answer} = qa;
//  className ="faq__desc" we apply css with inthe click of the question button the answer should be shown
  return (
    <div className="faq__question">
      <dt>
        <button className ="faq__question-button"> {question}</button>
      </dt>
      <dd >
        <p className ="faq__descj">{answer}</p> 
      </dd>
    </div>
  );
}
// how to revieve the prop, in line number one we need to distructure the prop which is qa
// we wont get hte questoin and answer here because we are not passing the props here
// we need to pass the props here so , pass it from the pasrents
// accordtion is the parent component of accordionitem so we need to pass the props from accordion to accordionitem
//
export default Accordionitem;

// Accordionitem.js goes inside Accordion.js and Accordion.js goes inside App.js
///app.js goes into index.js
// index.js goes into index.html

// we are linking them componentssomehow and sending it to index.html
