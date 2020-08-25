import React from "react";

function Checklist() {
	return (
		<div> 
			<input type="checkbox" id="option1" name="option1" value="1" />
			<label> yes</label>
			<input type="checkbox" id="option2" name="option2" value="2" />
			<label> no</label>
			<input type="checkbox" id="option3" name="option3" value="3" />
			<label> maybe</label>
		</div> 
	)
}
export default Checklist