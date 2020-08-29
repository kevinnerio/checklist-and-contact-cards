import React, {Component} from "react"; 
import checklistData from "./checklistData"; 
import Header from "./Header"; 
import Checklist from "./Checklist"; 
import ContactsCard from "./ContactsCard"; 

class App extends Component{
  render() {
    return (
      <div> 
      <Header />
      <Content /> 
    </div>
    )
  }

}

class Content extends Component{
  render() {
    const checklist = checklistData.map(
      (toDoItem) => <Checklist key={toDoItem.id} item={toDoItem.item}/>)
        return (
        <div className="checklistComponent">
          {checklist}
        </div> 
        )
  }

}
export default App; 