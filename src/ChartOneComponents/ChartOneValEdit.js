

const ChartOneValEdit = ({handleArryChange, graphOneData}) => {

    let updatedArr = graphOneData;

    function handleLocalArrChange(i, e){
        updatedArr[i].amount = e.target.value;
    }

    return ( 
        <div>
            {graphOneData.map((arr, index)=>{
                return <input type="number" key = {arr.id} defaultValue={arr.amount} onChange={(e)=>handleLocalArrChange(index, e)}/>
            })}
            <button onClick = {(e)=>handleArryChange(e, updatedArr)}>submit</button>
        </div>
    );
}
 
export default ChartOneValEdit;