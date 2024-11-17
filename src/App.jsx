import { useState, useEffect } from 'react';
import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';

function App() {
  // Set initial state for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    // Set interval to change image every 1.5 seconds (1500 ms)
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='main'>
    <span className="hrts" id="hrt1">&#10084;</span>
    <span className="hrts" id="hrt2">&#10084;</span>
    <span className="hrts" id="hrt3">&#10084;</span>
    <span className="hrts" id="hrt4">&#10084;</span>
      <h1 className="bdyTitle">
        <span className="hrt">&#10084;</span> Happy Birthday Hargun{' '}
        <span className="hrt">&#10084;</span>
      </h1>
      <div className="imgBody">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className={`imgs ${currentImageIndex === index ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
              transition: 'transform 1.5s ease-in-out'
            }}
          />
        ))}
      </div>
      <div className="textBox"><span>Koi itna pyara kaise ho skta hai <br />
      frr sarre ka sarra kaise ho skta hai <br />
      tujhse jbb milkar udasi dur nhi hoti <br />
      to frr tere bger guzara kaise ho skta hai
      </span></div>
    </div>
  );
}

export default App;
