import React from "react"; 
import Header from "./Header"; 
import Checklist from "./Checklist"; 
import ContactsCard from "./ContactsCard"; 


function App() {
  return (
    <div>
      <Header /> 
      <Checklist />
      <ContactsCard 
        contacts = {{contactName:"Kevin Nerio", contactEmail:"kevindvlp@gmail.com", contactNumber:"(xxx)xxx-xx72"}}
      />
      <ContactsCard 
      	contacts = {{contactName:"John Smith", contactEmail:"mrPocohantos@gmail.com", contactNumber:"(xxx)xxx-xx00"}}
      />
    </div>   
    )
}

export default App; 