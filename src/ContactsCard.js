import React from "react";

function ContactsCard(props) {
	console.log(props)
	return (
		<div className = "contact-card-container"> 
			<div className="contact-name">
				<h2>{props.contacts.contactName}</h2>
				<p>{props.contacts.contactEmail}</p>
				<p>{props.contacts.contactNumber}</p>
			</div> 
		</div> 
	)
}
export default ContactsCard