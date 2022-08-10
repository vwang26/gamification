import React,{useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import bg from '../img/calculator_background.svg'
import icon1 from '../img/icon1.svg'
import icon2 from '../img/icon2.svg'
import icon3 from '../img/icon3.svg'
import icon4 from '../img/icon4.svg'

const formInput = (stage,dropdownLabel, setDropdownLabel) => {
  const placeHolders = ['dd/mm/yy','Zipcode', 'Select an option', 'Estimated debt value']
  console.log('asdflskfjlsdj',stage)
  if (stage === 2){
    return (
      <div>
        <div id="form-input-text"></div>
        <Dropdown className="dropdown">
        <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" variant="success" id="dropdown-basic">
          {dropdownLabel}
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>{console.log('test1',dropdownLabel); setDropdownLabel('Just me')}}>Just me</Dropdown.Item>
          <Dropdown.Item onClick={()=>{console.log('test2',dropdownLabel); setDropdownLabel('A dependent adult')}}>A dependent adult</Dropdown.Item>
          <Dropdown.Item onClick={()=>{console.log('test3',dropdownLabel); setDropdownLabel('My spouse/partner')}}>My spouse/partner</Dropdown.Item>
          <Dropdown.Item onClick={()=>{console.log('test4',dropdownLabel); setDropdownLabel('My spouse/partner and kids')}}>My spouse/partner and kids</Dropdown.Item>
          <Dropdown.Item onClick={()=>{console.log('test5',dropdownLabel); setDropdownLabel('My kids')}}>My kids</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    )
  }
  else{
    return (
      <div>
        <input id="form-input-text" type="text" className="form-control" onBlur={()=>{this.value=''}} placeholder={placeHolders[stage]}/>
      </div>
    )
  }
}

const Calculator = () => {
  const [stage, setStage] = useState(0)
  const [icon, setIcon] = useState(icon1)
  const [dropdownLabel, setDropdownLabel] = useState('Select an option');

  const prompts = ['Date of Birth', 'Zipcode', 'Who do you need life insurance to protect?','What is the estimated value of your debt?']
  const icons = [icon1, icon2, icon3, icon4]
  const progressWidth = [100,200,300,1026]
  const [buttons, setButtons] = useState()

  useEffect(()=>{
    console.log('stage:',stage)
    if (stage === 3){
      setButtons(
        <div style={{display: 'flex', position: 'absolute', left: '50%', top: '70%', transform: 'translate(-50%,-50%'}}>
          <div  style={{paddingLeft: '1vw'}}>
            <button onClick={()=>{ document.getElementById('form-input-text').value=''; setStage(stage-1)}} type="button" className="btn btn-link"><span className="icon-arrow-spin-left"></span><span style={{fontSize: 18}}>Previous</span></button>
          </div>
          <div style={{paddingLeft: '1vw'}}>
            <button type="button" className="btn btn-primary"><a href='/result' style={{fontSize: 18}}>Calculate</a></button>
          </div>
        </div>
      )
    }
    else if (stage >= 1){
      setButtons(
        <div style={{display: 'flex', position: 'absolute', left: '50%', top: '70%', transform: 'translate(-50%,-50%'}}>
          <div  style={{paddingLeft: '1vw'}}>
            <button onClick={()=>{document.getElementById('form-input-text').value=''; setStage(stage-1)}} type="button" className="btn btn-link"><span className="icon-arrow-spin-left"></span><span style={{fontSize: 18}}>Previous</span></button>
          </div>
          <div style={{paddingLeft: '1vw'}}>
            <button onClick={()=>{document.getElementById('form-input-text').value=''; setStage(stage+1)}} type="button" className="btn btn-link"><span style={{fontSize: 18}}>Next</span><span className="icon-arrow"></span></button>
          </div>
        </div>
      )
    }
    else{
      setButtons(
        <div style={{position: 'absolute', left: '50%', top: '70%', transform: 'translate(-50%,-50%'}}>
          <button onClick={()=>{document.getElementById('form-input-text').value=''; setStage(stage+1)}} type="button" className="btn btn-link"><span style={{fontSize: 18}}>Next</span><span className="icon-arrow"></span></button>
        </div>
      )
    }
    setIcon(icons[stage])
    
  },[stage]) 

  return (
    <>
      <img src={bg} style={{position: 'absolute', left: 0, width:'100%',height: '100%'}}/>
      <img src={icon} style={{position: 'absolute', left: 630, top: 392, width:'134',height: '134'}}/>
      <div style={{position: 'absolute', left: 820, top: 420}}>
        <label style={{fontSize: 18}} htmlFor="form1">{prompts[stage]}</label>
        {formInput(stage,dropdownLabel,setDropdownLabel)}
      </div>
      <div style={{position: 'absolute', top:765, left: 383, width: progressWidth[stage], height: 5, backgroundColor: '#009CDE'}} />
      {buttons}
    </>
  );
};

export default Calculator;