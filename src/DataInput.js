import TestChartOne from "./TestChartOne";
import BackendNavbar from "./BackendNavbar";
import ChartOneContainer from "./ChartOneComponents/ChartOneContainer";

const DataInput = ({handleChange, handleSubmit, graphOneData, graphOneInputVal, handleLogout, handleArryChange}) => {



    return ( 
        <div>
            <BackendNavbar handleLogout = {handleLogout}/>
            <br/>
            <br/>

            <ChartOneContainer 
                graphOneData = {graphOneData} 
                graphOneInputVal = {graphOneInputVal}
                handleSubmit = {handleSubmit} 
                handleArryChange = {handleArryChange}
                handleChange = {handleChange}
            />
            <br/>
            <br/>
        </div>
     );
}
 
export default DataInput;