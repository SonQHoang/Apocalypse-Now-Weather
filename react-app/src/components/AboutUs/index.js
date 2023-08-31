import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id='about-us-parent-container'>
            <h1 id='about-us-h1'>About Our Team</h1>
            <div id='team-member-cards-container'>
                <div className='member-card-div' id='sam-member-card'>
                    <h2 className='member-name-h2'>Sam Boyle</h2>
                    <p className='about-member-body'>About Sam body...</p>
                </div>
                <div className='member-card-div' id='aston-member-card'>
                    <h2 className='member-name-h2'>Aston Martinez</h2>
                    <p className='about-member-body'>About Aston body...</p>
                </div>
                <div className='member-card-div' id='john-member-card'>
                    <h2 className='member-name-h2'>John Wofford</h2>
                    <p className='about-member-body'>About John body...</p>
                </div>
                <div className='member-card-div' id='son-member-card'>
                    <h2 className='member-name-h2'>Son (Sean) Hoang</h2>
                    <p className='about-member-body'>About Son body...</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
