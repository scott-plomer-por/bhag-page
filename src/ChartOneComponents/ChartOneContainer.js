import ChartOneGraph from "./ChartOneGraph";
import ChartOneNew from "./ChartOneNew";
import ChartValEdit from "../GenericComponets/ChartValEdit";

import { useState } from "react";

const ChartOneContainer = ({ handleSubmit, graphOneData, handleArryChange}) => {

    const [graphInputVal, setGraphInputVal] = useState ('');
    const chartCollectionNameSpace = "graph-one-data";
    const [backupGraphDataOne] = useState(graphOneData);

    function handleChange(e){
        setGraphInputVal(e.target.value);
      }


    return ( 
        <div className = 'chart--wrapper'>
            <ChartOneNew 
                handleChange = {handleChange} 
                handleSubmit = {handleSubmit} 
                graphInputVal = {graphInputVal}
                chartCollectionNameSpace = {chartCollectionNameSpace}
                setGraphInputVal = {setGraphInputVal}
                chartData = {graphOneData}
            />
            <ChartOneGraph 
                graphOneData = {graphOneData}
            />
            <ChartValEdit
                graphData = {graphOneData} 
                handleArryChange={handleArryChange}
                chartCollectionNameSpace = {chartCollectionNameSpace}
                backupGraphData = {backupGraphDataOne}
            />
        </div>
    );
}
 
export default ChartOneContainer;