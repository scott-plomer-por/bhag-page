import firstSectionSVG from '../imgs/firstSectionSvg.svg';


const FirstSection = () => {

    return ( 
        <div className = 'firstContent center-container lg-container'> 
            <div className = 'sm-container center-container firstContent--container'>
                <img 
                    src="https://bhag.wpengine.com/wp-content/uploads/2020/07/109444364_2597426503852668_4085567755830474488_n.png" 
                    alt="point of rental logo"
                    className = "firstContent--container__heroimg"
                />
                <h1 className = "h1-text firstContent--container__herotext">Big, Hairy, Audacious Goal</h1>
                <p className = "p-text firstContent--container__text">
                    When we started really making future plans, we had to come up with a BHAG – a big, hairy, audacious goal. 
                    (You’d think that BAG, Big Audacious Goal, would be simpler, but the hairiness of the goal really makes 
                    it easier to remember). Here’s our goal:
                </p>
                <img src={firstSectionSVG} alt="team working togeather" className = "firstContent--container__svg"/>
                <h3 className = "h3-text firstContent--container__h3">To become the <b>premier</b> global rental/hire technology company.</h3>
                <p className = "p-text firstContent--container__text">
                    More specifically, we will revolutionize the industry through reimagined rental technology. In doing so, 
                    rental/hire businesses throughout the world will desire our premier products. We will gain a market share 
                    of 20% of the world’s top 10 rental markets in six strategic global locations. The best of the best will 
                    vie for positions to join our ranks of trailblazers. We will win “Best Places to Work” awards. In our wake, 
                    we will inspire and empower companies and individuals to carry on the legacy of serving others to give a hand-up 
                    to those in need.
                    <br/><br/>
                    But how can we achieve this audacious goal?  As with everything around here, we’ll get there as a team.
                </p>
                <div className = "firstContent--container__link--container">
                    <a className = "a-text firstContent--container__link--container__link" href="#mission-statement">Mission Statement</a>
                    <a className = "a-text firstContent--container__link--container__link" href="#happy-customers">Happy Customers</a>
                    <a className = "a-text firstContent--container__link--container__link" href="#expanding-service">Expanding Service</a>
                    <a className = "a-text firstContent--container__link--container__link" href="#empowered-employees">Empowered Employees</a>
                </div>
                
            </div>
            <svg className = "waveSVG firstContent--container__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                                                            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                                                            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z">
                    </path>
                </svg>
        </div>
     );
}
 
export default FirstSection;