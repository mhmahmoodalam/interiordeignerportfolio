import React from 'react'
import background from '../assets/pexels-taryn-elliott-9583764.mp4';
import { Parallax } from 'react-scroll-parallax';

const HeroPage = () => {

    return (
        // <Parallax translateY={[120, -100]} speed={40}  style={{ background: 'blue' }}>
        <section className='hero_container'> 
            <div className='hero_background'>
                <video loop autoPlay muted className='hero_background_video'>
                    <source
                        src={background}
                        type="video/mp4"
                    />
                Your browser does not support the video tag.
                </video> 
            </div>         
            <div className='hero_Details'>
                <div className='hero_header'>
                Design that you will love now and in the future
                </div>
                <div className='hero_button'>
                Contact Now
                </div> 
            </div>
      </section>
    //   </Parallax>
    )
}

export default HeroPage