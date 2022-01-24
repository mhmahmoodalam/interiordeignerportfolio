import logo from './logo.svg';
import './App.css';
import background from './assets/pexels-taryn-elliott-9583764.mp4';

function App() {
  return (
    <div className="App">
      <header className="navigation_container">
            <div className='navigation_item'>
              Home
            </div>
            <div className='navigation_item'>
              About Me
            </div>
            <div className='navigation_item'>
              Projects
            </div>
            <div className='navigation_item'>
              Contact Now
            </div>
      </header>
      <section className='hero_container'> 
          {/* <div className='hero_background'>
            <video loop autoPlay muted >
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
          <div className='hero_Details'>
          
          </div> */}
      </section>
    </div>
  );
}

export default App;
