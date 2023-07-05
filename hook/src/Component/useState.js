import { useState } from 'react';
import logo from './../logo.svg';
import ak47 from "./../ak47.jpg";
import m4a1 from "./../m4a1.jpg";
import awm from "./../awm.jpg";
const items=[
  'AK47',
  'M4A1',
  'AWM'
]
const img_items = [
  ak47,
  m4a1,
  awm
]

function UseStatepage() {
  const [item,setItem] = useState();
  const [imgItem,setImgItem] = useState();
  const Random = () => {
    const random = Math.floor(Math.random() * items.length);
    setItem(items[random]);
    setImgItem(img_items[random]);
  }
  return (
    <div className="App">
      <img src={imgItem||logo} className="App-logo" alt="logo" />
      <h1>{item||"Khong co gi"}</h1>
      <button onClick={Random}>Doi Sung</button>
    </div>
  );
}

export default UseStatepage;
