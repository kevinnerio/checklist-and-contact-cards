import React from "react";
import checklistData from "./checklistData"; 

function Checklist(props) {
	return (
		<div className="checkList"> 
			<div className = 'item'>
				<input type="checkbox"/>
				<p> {props.item}</p>
				<p> {props.due}</p> 
				{/* <p className='checkBoxLabel'> yes</p> */}
			</div> 
		</div> 
	)
}
export default Checklist