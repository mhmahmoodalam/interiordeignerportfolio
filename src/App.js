import './App.css';
import HeroPage from './HeroPage/HeroPage'
import Header from './Header/Header';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header/>
        <HeroPage/>
        <section style={{ height: '2000px', width: '100%', backgroundColor: 'yellow'}}>

        </section>
      </div>
    </ParallaxProvider>
  );
}

export default App;
