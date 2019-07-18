// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const catList = [
<img src={"https://ae01.alicdn.com/kf/HTB1PITEXizxK1RkSnaVq6xn9VXaT/Pet-cat-dog-hat-scarf-suit-cloak-dress-up-for-New-Year-cloak-Christmas-clothes.jpg_q50.jpg"}
height="50" width="350"  alt="Cat" />,
<img src={"https://i.etsystatic.com/16779379/r/il/24b700/1454364888/il_794xN.1454364888_awx1.jpg"}
height="50" width="350"  alt="Cat" />,
<img src={"https://www.sheknows.com/wp-content/uploads/2018/08/catphoto6_abcgoi.jpeg"}
height="50" width="350"  alt="Cat" />,
<img src={"https://www.sheknows.com/wp-content/uploads/2018/08/catphoto9_evw5l9.jpeg"}
height="50" width="350"  alt="Cat" />,
<img src={"https://www.sheknows.com/wp-content/uploads/2018/08/catphoto2_sohthe.jpeg"}
height="50" width="350"  alt="Cat" />,
<img src={"https://www.sheknows.com/wp-content/uploads/2018/08/catphoto5_qtkp1w.jpeg"}
height="50" width="350"  alt="Cat" />
]
function img() {
  alert("Meow!")
}  
function calcCatIndex(catIndex) {
  if (catIndex ===5) {
    return 0
  }  else {
    return catIndex + 1
  }
}
function App() {
  const [catIndex, setCatIndex] =  useState(0) 
  return (
    <div className="App">
      <header className="App-header">
        {catList[catIndex]}
        <div>
          <p>I am.. {catIndex}</p>
          <button onClick={() => setCatIndex(calcCatIndex(catIndex))}>
            Click Me.
          </button>
        </div>
        <p>
          Hi.
        </p>
        <div>My name is Sunkist (I'm the orange one duh!), and this is my friend Tod!</div>
        <div>I have a lot of friends FYI!</div>
        <div>Follow us on our blog:</div>
        <a
          className="App-link"
          href="https://www.thatcatblog.com/"
          target="_blank"
          rel="noopener noreferrer"
         >
          That Cat Blog!
        </a>
        <button onClick={img}>Click To Make Me Talk</button> 
      </header>
    </div>
  );
}

export default App;
