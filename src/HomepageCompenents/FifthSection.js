import ChartOneGraph from '../ChartOneComponents/ChartOneGraph';
import customerSurveyPng from '../imgs/customerSurveyPng.png';

import { useState } from 'react';

const FifthSection = ({graphOneData}) => {

    const [graphDisplay, setGraphDisplay] = useState(1);
    let dummygraphdata2 = [{id: 1, amount: "11"}, {id: 2, amount: "22"}, {id: 3, amount: "33"}, {amount: "54", id: 4}, {id: 5, amount: "1"}, {id: 6, amount: "24"}, {amount: "21", id: 7}, {amount: "31", id: 8}, {amount: "22", id: 9}, {id: 10, amount: "7"}];

    return ( 
        <div id = "empowered-employees" className = 'fifthContent lg-container center-container'>
            <div className = 'fifthContent--container md-container center-container'>
                <div className = 'fifthContent--container__content--container flex-row-container'>
                    <div className = 'fifthContent--container__content--container__text--container aln-left-container'>
                        <h3 className = 'h3-text'>Empowered Employees</h3>
                        <p className = 'p-text'>
                        Being a premier company means we have premier people and a premier company 
                        culture. You’re a big part of that. From seeking out more knowledge to providing 
                        knowledge to your fellow Pointers, you’re making us smarter. When you’re working 
                        on your own or pitching in on a group effort, you’re getting us toward goals. 
                        And when you’re making progress toward your goals, we all move a little closer 
                        to ours. It’s tough to measure how awesome we think you are. But we’re going to 
                        try doing it by looking at a few key factors.
                        </p>
                    </div>
                    <img className = 'fifthContent--container__content--container__img graph-img' src= {customerSurveyPng} alt="postitive customer survey reviews"/>
                </div>
                <div className = "fifthContent--container__graph--container">
                    <button 
                        className = {`fifthContent--container__graph--container__btn graph-btn ${graphDisplay === 1 ? 'active-graph-btn' : 'unactive-graph-btn'}`} 
                        onClick = {()=>setGraphDisplay(1)}>
                            Employee Survey Scores
                            <i className="fas fa-info-circle"></i>
                            <div>
                                On a sale of 1-5 what, Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Suscipit quis vel cumque optio expedita 
                                adipisci aperiam odit perspiciatis dignissimos dolore?
                            </div>
                    </button>
                    <button 
                        className = {`fifthContent--container__graph--container__btn graph-btn ${graphDisplay === 2 ? 'active-graph-btn' : 'unactive-graph-btn'}`} 
                        onClick = {()=>setGraphDisplay(2)}>
                            eNPS
                            <i className="fas fa-info-circle"></i>
                            <div>
                                On a sale of 1-5 what, Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Saepe magnam minima 
                                possimus?
                            </div>
                    </button>
                    {graphDisplay ===1 && <ChartOneGraph graphOneData = {graphOneData}/>}
                    {graphDisplay ===2 && <ChartOneGraph graphOneData = {dummygraphdata2}/>}
                </div>
               
            </div>
            <svg className = "waveSVG fifthContent--container__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z">
                </path>
            </svg>
        </div>
     );
}
 
export default FifthSection;