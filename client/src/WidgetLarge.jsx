import "./WidgetLarge.css";
import {Link} from 'react-router-dom';
export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Course Content</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Title</th>
          <th className="widgetLgTh">Training</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Marks Scored</th>
          <th className="widgetLgTh p-3">Options</th>
          
        </tr>

        <tr className="widgtLgTr ">
        <Link to="/course1" > <td className="widgetLgTitleName">
            
            Advanced Product quality planning program-APQP
            
          </td>
          </Link>
          <td className="widgetLgTraining">Technical TRAINING </td>
          {/* <td className="widgetLgButton Completition mt-2">Completed</td> */}
        <td className='widgetLgCompletion'><span class="badge bg-danger">Not Completed</span></td>
          

          <td className="widgetLgDuration">-</td>
          <Link to="/quiz"><td ><button type="button" className="btn btn-outline-danger mt-2">Appear for Test</button>
   </td></Link> 
        </tr>

        <tr className="widgtLgTr ">
          <td className="widgetLgTitleName">
            
            Environmental, social and governance (ESG) 
          </td>
          <td className="widgetLgTraining">Strategic TRAINING </td>
          {/* <td className="widgetLgButton Completition mt-2">Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"></td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger mt-2">Appear for Test</button>
   </td></Link>  */}
        </tr>

        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
            
            Presentation skills training courses
          </td>
          <td className="widgetLgTraining">Behavioural TRAINING </td>
          {/* <td className="widgetLgButton NotComplete mt-2">Not Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"></td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger  mt-2">Appear for Test</button>
   </td></Link>  */}
        </tr>

        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Statistical Process Control Training -SPC
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
        {/* <td className="widgetLgButton NotComplete">Not Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"></td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger  mt-2">Appear for Test</button>
   </td></Link> */}
    </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Inventory Management and stock Management
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
        {/* <td className="widgetLgButton NotComplete">Not Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"></td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger  mt-2">Appear for Test</button>
   </td></Link>     */}
   </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Process failure and mode effect analysis
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
        {/* <td className="widgetLgButton NotComplete">Not Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"></td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger  mt-2">Appear for Test</button>
   </td></Link> */}
        </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Geometric Dimensioning and Tolerancing
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
        {/* <td className="widgetLgButton NotComplete">Not Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"></td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger  mt-2">Appear for Test</button>
   </td></Link> */}
        </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Design FMEA course
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
        {/* <td className="widgetLgButton NotComplete">Not Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"></td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger  mt-2">Appear for Test</button>
   </td></Link>      */}
   </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
            
            Simple and Low-cost automation industry
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
        {/* <td className="widgetLgButton NotComplete">Not Completed</td> */}
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration"> </td>
          {/* <Link to="/course1"><td ><button type="button" className="btn btn-outline-danger  mt-2">Appear for Test</button>
   </td></Link>      */}
    </tr>

      </table>
    </div>
  );
}