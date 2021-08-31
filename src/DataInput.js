import Navbar from "./Navbar";
import ChartOneContainer from "./ChartOneComponents/ChartOneContainer";
import ChartTwoContainer from "./ChartTwoComponents/ChartTwoContainer";

const DataInput = ({handleChange, handleSubmit, graphOneData, graphTwoData, GoogleLogout, handleArryChange}) => {


    return ( 
        <div className ='dataInput--container lg-container center-container'>
            <Navbar GoogleLogout = {GoogleLogout} isBackend = {true}/>
            <div className ='dataInput--container__graph--container md-container center-container'>
                <h2 className = 'h2-text'>Customer Satisifaction Score</h2>
                <ChartOneContainer 
                    graphOneData = {graphOneData} 
                    handleSubmit = {handleSubmit} 
                    handleArryChange = {handleArryChange}
                    handleChange = {handleChange}
                />
            </div>
            <div className ='dataInput--container__graph--container md-container'>
                <h2 className = 'h2-text'>Net Promoter Score</h2>
                <ChartTwoContainer 
                    graphTwoData = {graphTwoData} 
                    handleSubmit = {handleSubmit} 
                    handleArryChange = {handleArryChange}
                    handleChange = {handleChange}
                />
            </div>
        </div>
     );
}
 
export default DataInput;