import DataInput from "./DataInput";
import LoginPage from "./LoginPage";
import Homepage from "./Homepage";

import { db , fire} from "./Firebase";
import { validateEmail } from "./Helpers";
import { namespace, emailCheck } from "./HelperVars";

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function App() {


  const [graphOneData, setGraphOneData] = useState(()=> {return [];});
  const [user, setUser] = useState(()=> {return '';});
  const [email, setEmail] = useState(()=> {return '';});
  const [password, setPassword] = useState(()=> {return '';});
  const [emailError, setEmailError] = useState(()=> {return '';});
  const [passwordError, setPasswordError] = useState(()=> {return '';});
  const [isAdmin, setIsAdmin] = useState(()=> {return false});
  const [wantsToSignIn, setwantsToSignin] = useState(()=>{return false});
  const [graphOneInputVal, setGraphOneInputVal] = useState ('');


  function handleChange(e){
    setGraphOneInputVal(e.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();
    if(graphOneData.length >= 12) { return };
    if(graphOneInputVal === '') { return };
    let newObject = {
      "id": graphOneData.length + 1,
      "amount": graphOneInputVal
    };
    setGraphOneInputVal('');
    db.collection('graph-one-data').doc(`21-${namespace[newObject.id - 1]}`).set(newObject);
    let arraySetter = [];
    db.collection('graph-one-data').get()
    .then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
        arraySetter = [...arraySetter, doc.data()];
        });
      setGraphOneData(arraySetter);
    });
  }


  function handleLogin(){
    fire.auth().signInWithEmailAndPassword(email, password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case 'auth/wrong-password':
          setPasswordError(err.message);
          setPassword('');
          break;
      }
    });
  };


  function handleSignup(){
    if(!validateEmail(email)){
      setEmailError('Not A Point of Rental Email');
      return;
    } 
    fire.auth().createUserWithEmailAndPassword(email, password)
    .catch(err=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invail-email":
          setEmailError(err.message);
          break;
        case 'auth/weak-password':
          setPasswordError(err.message);
          setPassword('');
          break;
      }
    });
  };


  function handleLogout(){
    fire.auth().signOut();
  };


  function handleArryChange(e, arr){
    e.preventDefault();
    arr.forEach((obj, index)=>{
      db.collection('graph-one-data').doc(`21-${namespace[index]}`).set({ "id": obj.id, "amount": obj.amount});
    });
    let arraySetter = [];
    db.collection('graph-one-data').get()
      .then((snapshot)=>{
        snapshot.docs.forEach(doc =>{
          arraySetter = [...arraySetter, doc.data()];
          });
        setGraphOneData(arraySetter);
    });
  };


  function authListener(){
    fire.auth().onAuthStateChanged((user)=>{
    user ? setUser(user) : setUser('');
    });
  };


  useEffect(()=>{
    authListener();
  }, []);


  useEffect(()=>{
    emailCheck.includes(user.email)? 
      setIsAdmin(true) :
      setIsAdmin(false);
  }, [user]);


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


  const loginProps = {emailError, passwordError, email, setEmail, password, setPassword, user, handleLogin, handleSignup, wantsToSignIn, setwantsToSignin};
  const inputProps = {graphOneInputVal, handleChange, handleSubmit, graphOneData, handleLogout, handleArryChange, isAdmin};
  const homepageProps = {graphOneData, handleLogout, isAdmin};


  return (
    <>
      <Router>
        <Route exact path = '/'>
          {user ? <Homepage {...homepageProps}/> : <LoginPage {...loginProps}/>}
        </Route>
        <Route exact path = '/input'>
          {isAdmin && user ?
            <DataInput {...inputProps}/> :
            <Redirect to = '/'/>
          }
        </Route>
      </Router>
    </>
  );
};

export default App;
