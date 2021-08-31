import ChartTwoGraph from "./ChartTwoGraph";
import ChartTwoNew from "./ChartTwoNew";
import ChartValEdit from "../GenericComponets/ChartValEdit";

import { useState } from "react";

const ChartTwoContainer = ({ handleSubmit, graphTwoData, handleArryChange}) => {

    const [graphInputVal, setGraphInputVal] = useState ('');
    const chartCollectionNameSpace = "second-graph-data";
    const [backupGraphDataTwo] = useState(graphTwoData);

    function handleChange(e){
        setGraphInputVal(e.target.value);
      }


    return ( 
        <div className = 'chart--wrapper'>
            <ChartTwoNew 
                handleChange = {handleChange} 
                handleSubmit = {handleSubmit} 
                graphInputVal = {graphInputVal}
                chartCollectionNameSpace = {chartCollectionNameSpace}
                setGraphInputVal = {setGraphInputVal}
                chartData = {graphTwoData}
            />
            <ChartTwoGraph 
                graphTwoData = {graphTwoData}
            />
            <ChartValEdit
                graphData = {graphTwoData} 
                handleArryChange={handleArryChange}
                chartCollectionNameSpace = {chartCollectionNameSpace}
                backupGraphData = {backupGraphDataTwo}
            />
        </div>
    );
}
 
export default ChartTwoContainer;