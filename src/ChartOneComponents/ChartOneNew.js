

const ChartOneNew = ({handleChange, handleSubmit, graphOneInputVal}) => {
    
    return ( 
        <form action="">
                <input type="number" value = {graphOneInputVal} placeholder = 'Enter New Value Here' onChange = {(e)=>{handleChange(e)}}></input>
                <button onClick = {(e)=>handleSubmit(e)}>submit</button>
        </form>
     );
}
 
export default ChartOneNew;
