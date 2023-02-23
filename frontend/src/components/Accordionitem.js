// we got myClick as a props from Accordion.js
//function Accordionitem({qa: {question,answer}, myClick}) {
function Accordionitem({
  qa,
  onClick,
  showDescription,
  ariaExpanded,
  fontBold,
  index,

  //button does not have a control feature so to bring the control feature we use aria-control arrtibute
}) {
  console.log("accordionitem");
  return (
    <div className="faq__question" onClick={onClick}>
      <dt>
        <button
          className={`faq__question-button ${fontBold}`}
          aria-expanded={ariaExpanded}
          data-qa="faq__question-button"
          aria-control={`faq${index + 1}_desc`}
        >
          {qa.question}
        </button>
      </dt>
      <dd>
        <p
          className={`faq__desc ${showDescription}`}
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
        >
          {qa.answer}
        </p>
      </dd>
    </div>
  );
}

// prop drilling can be solved by context api, if is passing between greater then 3 then we should use context api
export default Accordionitem;
