import React, { useState } from 'react'

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

const Faq = () => {

    const [activeIndex , setactiveindex] = useState(null)
    const handelClick = (index) => {
        setactiveindex(index)
    }
    
  return (
    <div>
        <h1>
            Frequently Asked Questions
        </h1>
        <div className='faq-conatiner'>
            {
                faqs.map((val , index) => (
                    <div className='faq'>
                        <h2 id='ques' onClick={() => handelClick(index)}>{val.question} <span>+</span></h2>
                       {activeIndex === index && <p>{val.answer}</p>}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Faq 



// if we want to remain open rest of the items 

const Faq2 = () => {
  const [openIndexes, setOpenIndexes] = useState([]); // store multiple open items

  const handleClick = (index) => {
    if (openIndexes.includes(index)) {
      // remove index (close it)
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      // add index (open it)
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((val, index) => (
          <div className="faq" key={index}>
            <h2 id="ques" onClick={() => handleClick(index)}>
              {val.question} <span>{openIndexes.includes(index) ? "-" : "+"}</span>
            </h2>
            {openIndexes.includes(index) && <p>{val.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};


