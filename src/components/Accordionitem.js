// we got myClick as a props from Accordion.js
//function Accordionitem({qa: {question,answer}, myClick}) {
function Accordionitem({ qa, myClick,showDescription, ariaExpanded,fontBold, index }) {
  return (
    <div className="faq__question" onClick={myClick}>
      <dt>
        <button className="faq__question-button"> {qa.question}</button>
      </dt>
      <dd>
        <p className="showDescription">{qa.answer}</p>
      </dd>
    </div>
  );
}

// prop drilling can be solved by context api, if is passing between greater then 3 then we should use context api
export default Accordionitem;
