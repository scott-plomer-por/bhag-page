import ChartOneGraph from "./ChartOneGraph";
import ChartOneNew from "./ChartOneNew";
import ChartOneValEdit from "./ChartOneValEdit";

const ChartOneContainer = ({handleChange, handleSubmit, graphOneData, graphOneInputVal, handleArryChange}) => {


    return ( 
        <div>
            <ChartOneNew 
                handleChange = {handleChange} 
                handleSubmit = {handleSubmit} 
                graphOneInputVal = {graphOneInputVal}
            />
            <ChartOneGraph 
                graphOneData = {graphOneData}
            />
            <ChartOneValEdit
                graphOneData = {graphOneData} 
                handleArryChange={handleArryChange}
            />
        </div>
    );
}
 
export default ChartOneContainer;