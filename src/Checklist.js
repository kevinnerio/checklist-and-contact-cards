import React from "react";

function Checklist() {
	return (
		<div> 
			<input type="checkbox" id="option1" name="option1" value="1" />
			<label for="option1"> yes</label>
			<input type="checkbox" id="option2" name="option2" value="2" />
			<label for="option2"> no</label>
			<input type="checkbox" id="option3" name="option3" value="3" />
			<label for="option3"> maybe</label>
		</div> 
	)
}
export default Checklist