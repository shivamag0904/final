import React,{useState} from "react";
import {AgGridColumn,AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import TopBar from './TopBar';
import SideBar from './SideBar';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { CheckboxSelectionComponent } from "ag-grid-community";
import { Link } from "react-router-dom";
import './UserList.css';

const InitalRowData = [
    {emply_Id:'234', fullname: 'Anil', location: 'Uttar Pardesh', department: 'Finance',gender:'M',phone:'90657849002',email:'anil99@gmail.com',status:'Yes' },
    {emply_Id:'294', fullname: 'shivam', location: 'Uttar Pardesh', department: 'Automation',gender:'M',phone:'856356384',email:'shivam@gmail.com',status:'No' },
    {emply_Id:'214', fullname: 'Omansh', location: 'Uttrakhand', department: 'Software Developer',gender:'M',phone:'477948094',email:'omansh123@gmail.com',status:'No' },
    {emply_Id:'254', fullname: 'Ravi', location: 'Haryana', department: 'Business Development',gender:'M',phone:'834049444',email:'ravi199@gmail.com',status:'No' },
    {emply_Id:'224', fullname: 'Saeed', location: 'Otty', department: 'Consultancy',gender:'M',phone:'94089578329',email:'saeed123@gmail.com',status:'Yes'}
  ];
export default function UserList(){

    const [rowData,setRowData] = useState(InitalRowData);

    // const [colDefs,setColDefs] = useState([
    //     {field:'username'},
    //     {field:'location', editable:'true'},
    //     {field:'department'}
    // ])
    // React.useEffect(()=>{
    //     fetch().then(result=>result.json()).then(rowData=>setRowData(rowData))
    // })

//  onButtonClick = () =>{
//         const selectedNodes = this.gridApi.getSelectedNodes();
//         const selectData = selectedNodes.map(node =>node.data);
//         const selectedDataStringPresentation = selectData.map(node=> node.username + ' ' + node.location).join(', ');
//         alert(`selected Node : ${selectedDataStringPresentation}`); 
//     }

    return(

        <>
        <TopBar />
        <div className='dashboardContainer'>
            <SideBar />
            <div className="userList">
            <div className="userListTitleContainer">
              <h1 className="userTitle">User</h1>
           <Link to='/newuser'>  <button className="userAddButton">Create</button></Link>
          </div>
                <div className="ag-theme-balham" style={{ width: '100%', height: '600px',marginTop:'20px' }}>

                    {/* <button onClick={onButtonClick}>Get Selected Rows</button> */}
                    <AgGridReact defaultColDef={{ sortable: true, filter: true }} pagination={true} rowData={rowData} rowSelection="multiple" onGridReady={params => this.gridApi = params.api}>
                        <AgGridColumn field="emplyid" checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="fullname" editable={true}></AgGridColumn>
                        <AgGridColumn field="location" editable={true}></AgGridColumn>
                        <AgGridColumn field="department"></AgGridColumn>
                        <AgGridColumn field="gender"></AgGridColumn>
                        <AgGridColumn field="phone"></AgGridColumn>
                        <AgGridColumn field="email"></AgGridColumn>
                        <AgGridColumn field="status"></AgGridColumn>
                        <AgGridColumn field="action"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </div>

</>            )
            }