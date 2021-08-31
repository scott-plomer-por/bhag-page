
import Navbar from "./Navbar";
import FirstSection from "./HomepageCompenents/FirstSection";
import SecondSection from "./HomepageCompenents/SecondSection";
import ThirdSection from "./HomepageCompenents/ThirdSection";
import FourthSection from "./HomepageCompenents/FourthSection";
import FifthSection from "./HomepageCompenents/FifthSection";
import FormSection from "./HomepageCompenents/FormSection";



const Homepage = ({nameFocus, setNameFocus, emailFocus, setEmailFocus, messageFocus, setMessageFocus, graphOneData, isAdmin, handleFormSubmit, formName, setFormName, setFormEmail, formEmail, formMessage, setFormMessage, GoogleLogout, clientID, setisUserLogIn}) => {


const formProps = {handleFormSubmit, formName, setFormName, setFormEmail, formEmail, formMessage, setFormMessage, nameFocus, setNameFocus, emailFocus, setEmailFocus, messageFocus, setMessageFocus};


    return ( 
        <>
            <Navbar isAdmin={isAdmin} GoogleLogout = {GoogleLogout} clientID = {clientID} setisUserLogIn = {setisUserLogIn} isBackend = {false}/>
            <div className="homepage__content--container">
                <FirstSection />
                <SecondSection />
                <ThirdSection graphOneData = {graphOneData}/>
                <FourthSection graphOneData = {graphOneData}/>
                <FifthSection graphOneData = {graphOneData}/>
                <FormSection {...formProps}/>                
            </div>
           
        </>
     );
}
 
export default Homepage;