import  React , { useState } from 'react';
import './App.css'
import { Route , Switch } from 'react-router-dom'


 const Head = () => {


const [pin , setPin] = useState('');
const [nPin , setnPin] = useState();

const updateVal = (e) => {

	setPin(e.target.value);
}

const updateEvent = (props) =>
{

setnPin(pin);
localStorage.setItem('pin' , pin);
window.open('main' , '_parent')
}

        return ( <>

     <div className="main_div  bg-faded d-flex justify-content-center align-items-center" >
		<div className="center_div  shadow-lg" >
			<div className="internal d-flex flex-column justify-content-center align-items-center" > 
			<input onChange={updateVal} id="input" 
			 type="number"
			 maxlength="6"
			minlength="6" 
			required 
			 placeholder="Enter pin code here "
			  />
			<button onClick={updateEvent} className="btn btn-dark btn-lg mt-3"> Submit</button>

		</div>
	</div>
    </div>
  


</>);
}

export default Head;