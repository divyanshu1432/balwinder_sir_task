import React , { useEffect , useState} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const Main  = () => {

const [actualData, setactualData] = useState([])
const [time , setTime] = useState('')
const pin = localStorage.getItem('pin');
if(pin.length != 6){
	window.open('/' , '_parent')

}

if(actualData == null){
	window.open('/' , '_parent')
}
const d = new Date()

const getData = async () => {

const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
const data = await res.json();


setactualData(data[0].PostOffice);
console.log(actualData)

}

	useEffect(() => {
		getData()
	} ,[])
	return (<>

<div className="container mt-5">

<h4 classNamemt-3> Time -> {d.toLocaleDateString() + " " + d.toLocaleTimeString() } </h4> 




<table className="table table-hover table-bordered text-center mt-3" id="table-to-xls">

<thead className="bg-dark text-light">
<th> index </th>
<th> Pincode </th> 
<th> Name </th>
<th> BranchType </th> 
<th> Circle </th> 
<th> Region </th> 
<th> state </th> 
<th> country </th> 


</thead>

<tbody> 


{

	

	actualData.map((curElement , ind) => {
if (actualData == null) { window.open('/')}
if(ind<=10){
		const x = curElement.Pincode
let y = 2;
let z = x % y;

if(z == 1){
return(
 
                      
<tr key={ind} className="bg-danger text-light">
 <td>  {ind}  </td> 
 <td>  {x}  </td> 
<td>  {curElement.Name} </td> 
<td> {curElement.BranchType} </td> 
<td>  {curElement.Circle}</td> 
<td>  {curElement.Region}</td> 
<td>  {curElement.State}</td> 
<td>  {curElement.Country}</td>  </tr> 

);
}



else{
return(
 
                      
<tr key={ind} className="bg-success text-light">
 <td>  {ind}  </td> 
 <td>  {x}  </td> 
<td>  {curElement.Name} </td> 
<td>  {curElement.BranchType}</td> 

<td>  {curElement.Circle}</td> 
<td>  {curElement.Region}</td> 
<td>  {curElement.State}</td> 
<td>  {curElement.Country}</td>  </tr> 

);
}
}

	})
}



</tbody> 

</table> 

<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-sm btn-warning"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download in Excel"/>
</div> 

	 </>
	 );
}

export default Main;