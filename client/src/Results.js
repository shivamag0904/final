import React, { useState } from "react";
import "./Results.css";
import data from './mock-data.json';
import SideBar from "./SideBar";
import TopBar from "./TopBar";
const Results = () => {
 const [contacts,setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    fname: "",
    skilla: "",
    skillb: "",
    skillc: "",
    skilld: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) =>{
      event.preventDefault();
      const newContact = {
          fname:addFormData.fname,
          skilla:addFormData.skilla,
          skillb:addFormData.skillb,
          skillc:addFormData.skillc,
          skilld:addFormData.skilld,
      };
      const newContacts = [...contacts,newContact];
      setContacts(newContacts);
  }
  return ( 
  <>
  <TopBar />
    <div className='dashboardContainer'>
        <SideBar />
    <div className="app-container">
      <table className="skillTable">
        <thead>
          <tr>
            <th className="skillth">Name</th>
            <th className="skillth">Drilling</th>
            <th className="skillth">5s</th>
            <th className="skillth">Skill Training</th>
            <th className="skillth">Automation</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td className="skilltd">{contact.fname}</td>
              <td className="skilltd">{contact.skilla}</td>
              <td className="skilltd">{contact.skillb}</td>
              <td className="skilltd">{contact.skillc}</td>
              <td className="skilltd">{contact.skilld}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={{padding:"34px",textAlign:"center"}}>Add a Skill Matrix</h2>
      <form onSubmit={handleAddFormSubmit} className="skillform">
        <input
          type="text"
          name="fname"
          required="required"
          placeholder="Enter the name..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="skilla"
          required="required"
          placeholder="Enter the skills..."
          min="0"
          max="5"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="skillb"
          required="required"
          placeholder="Enter the skills..."
          min="0"
          max="5"
          onChange={handleAddFormChange}
        />
        
        <input
          type="number"
          name="skillc"
          required="required"
          placeholder="Enter the skills..."
          min="0"
          max="5"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="skilld"
          required="required"
          placeholder="Enter the skills..."
          min="0"
          max="5"
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Results;
