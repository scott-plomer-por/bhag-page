

const ChartValEdit = ({handleArryChange, graphData, chartCollectionNameSpace, backupGraphData}) => {

    let updatedArr = graphData;

    function handleLocalArrChange(i, e){
        e.preventDefault();
        updatedArr[i].amount = e.target.value;
    }

    function handleLocalArrCancel(e){
        e.preventDefault();
        document.querySelector(`.${chartCollectionNameSpace}-inputs`).reset();
        updatedArr = backupGraphData;

    }

    return ( 
        <>
        <form className = {`graphInputs--form ${chartCollectionNameSpace}-inputs`} >
            {graphData.map((arr, index)=>{
                return <input 
                            className = {`graphInputs--form__input graphInputs--form__input--${index}`} 
                            type="number" 
                            key = {arr.id} 
                            defaultValue={arr.amount} 
                            onChange={(e)=>handleLocalArrChange(index, e)}
                        />
            })}
        </form>
        <button className = 'general--submit_btn' onClick = {(e)=>{handleArryChange(e, chartCollectionNameSpace, updatedArr)}}>Change Values</button>
        <button className = 'cancel_btn' onClick = {(e)=>handleLocalArrCancel(e)}>Cancel</button>
        </>
    );
}
 
export default ChartValEdit;