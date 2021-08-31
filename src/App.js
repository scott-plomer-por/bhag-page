import DataInput from "./DataInput";
import LoginPage from "./LoginPage";
import Homepage from "./Homepage";

import { db } from "./Firebase";
import { namespace, emailCheck , clientID} from "./HelperVars";

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { GoogleLogin , GoogleLogout} from 'react-google-login';

import axios from "axios";


function App() {


  const [graphOneData, setGraphOneData] = useState([]);
  const [graphTwoData, setGraphTwoData] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserLogIn, setisUserLogIn] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');


  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);







  function handleFormSubmit(e, fname, femail, fmsg){
    e.preventDefault();
    axios.get(`https://hooks.zapier.com/hooks/catch/895175/bu8ry8j/?fullname=${fname}&email=${femail}&message=${fmsg}`,   {transformRequest: [(data, headers) => {
      delete headers.common.Authorization
      return data
  }]})
    .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
    });

    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setNameFocus(false);
    setEmailFocus(false);
    setMessageFocus(false);
  }


  function handleSubmit(e, dname, cname, value){
    e.preventDefault();
    if(dname.length >= 12) { return };
    if(value === '') { return };
    let newObject = {
      "id": dname.length + 1,
      "amount": value
    };
    db.collection(cname).doc(`21-${namespace[newObject.id - 1]}`).set(newObject);
    let arraySetter = [];
    db.collection(cname).get()
    .then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
        arraySetter = [...arraySetter, doc.data()];
        });

        switch(dname){
          case graphOneData : 
            setGraphOneData(arraySetter);
            break;
          case graphTwoData :
            setGraphTwoData(arraySetter);
            break;
          default : 
            break;
        }
    });
  }

  function handleLogin(res){
    setisUserLogIn(true);
    let userEmail = res.profileObj.email;
    emailCheck.includes(userEmail)? 
    setIsAdmin(true) :
    setIsAdmin(false);

  }


  function handleArryChange(e, cname, arr){
    e.preventDefault();
    arr.forEach((obj, index)=>{
      db.collection(cname).doc(`21-${namespace[index]}`).set({ "id": obj.id, "amount": obj.amount});
    });
    let arraySetter = [];
    db.collection(cname).get()
      .then((snapshot)=>{
        snapshot.docs.forEach(doc =>{
          arraySetter = [...arraySetter, doc.data()];
          });
          switch(cname){
            case 'graph-one-data': 
              setGraphOneData(arraySetter);
              break;
            case 'second-graph-data':
              setGraphTwoData(arraySetter);
              break;
            default : 
              break;
          }
    });
  };


  useEffect(() => {
    let arraySetter = [];
    db.collection('graph-one-data').get()
    .then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
        arraySetter = [...arraySetter, doc.data()];
        });
      setGraphOneData(arraySetter);
    });
  }, []);

  useEffect(() => {
    let arraySetter = [];
    db.collection('second-graph-data').get()
    .then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
        arraySetter = [...arraySetter, doc.data()];
        });
      setGraphTwoData(arraySetter);
    });
  }, []);


  const loginProps = {handleLogin, GoogleLogin, clientID};
  const inputProps = { handleSubmit, graphOneData, graphTwoData, handleArryChange, GoogleLogout};
  const homepageProps = {nameFocus, setNameFocus, emailFocus, setEmailFocus, messageFocus, setMessageFocus, isAdmin, graphOneData, graphTwoData, handleFormSubmit, formName, setFormName, setFormEmail, formEmail, formMessage, setFormMessage, GoogleLogout, setisUserLogIn};

  return (
    <>
      <Router>
      <Route exact path = '/bhag'>
        {isUserLogIn ? <Homepage {...homepageProps}/> : <LoginPage {...loginProps}/>}
      </Route>
      <Route exact path = '/input'>
        {isAdmin ?
          <DataInput {...inputProps}/> :
          <Redirect to = '/bhag'/>
        }
      </Route>
    </Router>
    </>
  );
};

export default App;
