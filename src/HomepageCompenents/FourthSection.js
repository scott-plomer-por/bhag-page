import ChartOneGraph from '../ChartOneComponents/ChartOneGraph';
import customerSurveyPng from '../imgs/customerSurveyPng.png';

import { useState } from 'react';

const FourthSection = ({graphOneData}) => {

    const [graphDisplay, setGraphDisplay] = useState(1);
    let dummygraphdata2 = [{id: 1, amount: "11"}, {id: 2, amount: "22"}, {id: 3, amount: "33"}, {amount: "54", id: 4}, {id: 5, amount: "1"}, {id: 6, amount: "24"}, {amount: "21", id: 7}, {amount: "31", id: 8}, {amount: "22", id: 9}, {id: 10, amount: "7"}]
    let dummygraphdata3 = [{id: 1, amount: "22"}, {id: 2, amount: "13"}, {id: 3, amount: "31"}, {amount: "33", id: 4}, {id: 5, amount: "18"}, {id: 6, amount: "60"}, {amount: "55", id: 7}, {amount: "55", id: 8}, {amount: "40", id: 9}, {id: 10, amount: "60"}]


    return ( 
        <div id = "expanding-service" className = 'fourthContent lg-container center-container'>
            <div className = 'fourthContent--container md-container center-container'>
                <div className = 'fourthContent--container__content--container flex-row-container'>
                    <img className = 'fourthContent--container__content--container__img graph-img' src= {customerSurveyPng} alt="postitive customer survey reviews"/>
                    <div className = 'fourthContent--container__content--container__text--container aln-left-container'>
                        <h3 className = 'h3-text'>Expanding Service</h3>
                        <p className = 'p-text'>
                        If our customers are successful and happy, they’re referring us to 
                        others. That helps us grow. Our marketing and sales teams find it easier 
                        to get people interested in (and convince them to buy) our software. We’re 
                        able to provide more people with the best software and support in the business. 
                        As we grow, we can afford to add more support experts to accommodate the 
                        new users. We’re the premier software provider in the industry, and the line 
                        at our door to be a part of the Point of Rental family proves it.  
                        </p>
                    </div>
                </div>
                <div className = "fourthContent--container__graph--container">
                    <button 
                        className = {`fourthContent--container__graph--container__btn graph-btn ${graphDisplay === 1 ? 'active-graph-btn' : 'unactive-graph-btn'}`} 
                        onClick = {()=>setGraphDisplay(1)}>
                            Add-on Module Sales
                            <i className="fas fa-info-circle"></i>
                            <div>
                                On a sale of 1-5 what, Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Suscipit quis vel cumque optio expedita 
                                adipisci aperiam odit perspiciatis dignissimos dolore?
                            </div>
                    </button>
                    <button 
                        className = {`fourthContent--container__graph--container__btn graph-btn ${graphDisplay === 2 ? 'active-graph-btn' : 'unactive-graph-btn'}`} 
                        onClick = {()=>setGraphDisplay(2)}>
                            Accounts over $50K ACV 
                            <i className="fas fa-info-circle"></i>
                            <div>
                                On a sale of 1-5 what, Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Saepe magnam minima 
                                possimus?
                            </div>
                    </button>
                    <button 
                        className = {`fourthContent--container__graph--container__btn graph-btn ${graphDisplay === 3 ? 'active-graph-btn' : 'unactive-graph-btn'}`} 
                        onClick = {()=>setGraphDisplay(3)}>
                            Number of user licenses globally
                            <i className="fas fa-info-circle"></i>
                            <div>
                                On a sale of 1-5 what, Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Molestiae reprehenderit 
                                delectus maxime, odit ipsam repudiandae, vel est minima, 
                                dignissimos pariatur similique quod ullam eos. Hic ducimus 
                                impedit reiciendis nemo odio!
                            </div>
                    </button>
                    {graphDisplay ===1 && <ChartOneGraph graphOneData = {graphOneData}/>}
                    {graphDisplay ===2 && <ChartOneGraph graphOneData = {dummygraphdata2}/>}
                    {graphDisplay ===3 && <ChartOneGraph graphOneData = {dummygraphdata3}/>}
                </div>
               
            </div>
            <svg className = "waveSVG thirdContent--container__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z">
                </path>
            </svg>
        </div>
     );
}
 
export default FourthSection;