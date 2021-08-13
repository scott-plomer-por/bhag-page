import ChartOneGraph from "./ChartOneComponents/ChartOneGraph";
import Navbar from "./Navbar";



const Homepage = ({graphOneData, handleLogout, isAdmin}) => {
    return ( 
        <div>
            <Navbar handleLogout={handleLogout} isAdmin={isAdmin}/>
            <ChartOneGraph graphOneData = {graphOneData}/>
        </div>
     );
}
 
export default Homepage;