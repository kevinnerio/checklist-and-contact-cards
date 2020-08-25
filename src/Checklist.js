import React from "react";

function Checklist() {
	return (
		<div className="checkList"> 
			<div className = 'item'>
				<input type="checkbox"/>
				<p className='checkBoxLabel'> yes</p>
			</div> 
			<div className = 'item'>
				<input type="checkbox" />
				<p className='checkBoxLabel'> no</p>
			</div> 
			<div className = 'item'>
				<input type="checkbox" />
				<p className='checkBoxLabel'> maybe</p>
			</div> 
		</div> 
	)
}
export default Checklist