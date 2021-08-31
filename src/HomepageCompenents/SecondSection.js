const SecondSection = () => {
    return ( 
        <div id = 'mission-statement' className = 'secondContent center-container lg-container'>
            <div className = 'sm-container center-container secondContent--container'>
                <h3 className = "h3-text">Our Mission</h3>
                <p className = 'p-text'>
                    Pointers lift up the world around them. From developing great software to providing a great customer 
                    experience to helping people discover ways to save money and time, we make others’ lives better. And 
                    that’s just what we do when we’re on the clock. To put it in official mission statement form:
                </p>
                <h4 className = 'h4-text secondContent--container__h4'>We exist to make a difference by empowering companies and individuals to reach their full potential.</h4>
                <iframe 
                    src="https://player.vimeo.com/video/451233543?color=81bd41&title=0&byline=0&portrait=0" 
                    width="640" 
                    height="360" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    title = 'point of rental empowering video'
                />
            </div>
            <svg className = "waveSVG secondContent--container__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z">
                </path>
            </svg>
        </div>
     );
}
 
export default SecondSection;