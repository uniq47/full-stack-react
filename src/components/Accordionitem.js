function Accordionitem() {


  return (
    <div className="faq__question">
      <dt>
        <button className ="faq__question-button"> My First Question</button>
      </dt>
      <dd className ="faq__desc">
        <p>My first Answer</p> 
      </dd>
    </div>
  );
}

export default Accordionitem;

// Accordionitem.js goes inside Accordion.js and Accordion.js goes inside App.js
///app.js goes into index.js
// index.js goes into index.html

// we are linking them componentssomehow and sending it to index.html
