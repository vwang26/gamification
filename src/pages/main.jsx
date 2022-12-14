import React, { useState } from 'react';
import { Modal } from 'react-blueprint-library';
import cal from '.././img/calculator-website.svg'; 

const Main = () => {
  const [show, setShow] = useState(false)
  return (
      <>
      <img onClick={()=>{setShow(!show);}} style={{position: 'absolute', left: 0, width:'100%',height: '100%'}} src={cal} alt=""/>
        <Modal show={show}>
          <Modal.Header onClose={()=>{setShow(false)}} title="Insurance">Insurance</Modal.Header>
          <Modal.Body>
            <div><a href='/calculator'>Life Insurance Calculator</a></div>
            <p>If you’re wondering, “How much life insurance do I need?” then our life insurance calculator can provide you with some quick answers. After you calculate your life insurance estimate, consider contacting a financial professional to discuss your individual situation.</p>

            <div><a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.massmutual.com%2Ffinancial-wellness%2Fcalculators%2Fdisability-income-calculator" target="_blank">Disability Insurance Calculator</a></div>
            <p>If you were too sick or injured to work, do you have enough income to cover your living expenses? Use the disability insurance calculator to find out.</p>
          
            <div><a href='https://www.figma.com/exit?url=https%3A%2F%2Fwww.massmutual.com%2Ffinancial-wellness%2Fcalculators%2Fincome-protection-quiz' target="_blank">Income Protection Quiz</a></div>
            <p>Test your knowledge of a disability’s effect on finances.</p>
          
            <div><a href="https://www.massmutual.com/financial-wellness/calculators/modal-apr-calculator" target="_blank">Modal Charge Disclosure and APR Calculator</a></div>
            <p>Use this calculator to determine the total dollar amount and the annual percentage rate (APR) for any additional charge you may incur if you pay your annual premium in installments.</p>
          </Modal.Body>
        </Modal>
      </>
  );
};

export default Main;
