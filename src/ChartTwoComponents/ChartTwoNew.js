

const ChartTwoNew = ({handleChange, handleSubmit, graphInputVal, chartCollectionNameSpace, setGraphInputVal, chartData}) => {
    
    return ( 
        <form className = 'form--newinput' action="">
            <label className = 'general--label' htmlFor="graphOneNew">Enter New Value Here</label>
                <input className = 'general--input number' type="number" value = {graphInputVal} onChange = {(e)=>{handleChange(e)}}></input>
                <button className = 'general--submit_btn' onClick = {(e)=>{handleSubmit(e, chartData, chartCollectionNameSpace, graphInputVal); setGraphInputVal('');}}>Add New Value</button>
        </form>
     );
}
 
export default ChartTwoNew;
