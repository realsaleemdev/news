import { useState } from 'react';
import Nav from "./Nav";
export default function Header({ getKeyword }) {
  const [active, setActive] = useState(false);
  const [keyword, setKeyword] = useState('');
  
  const onChangeHHandler = (event) => {
    const value = event.target.value === '' ? false : true;
    setKeyword(event.target.value);
    setActive(value);
  }
  const handleClick = () => {
    // Add your click handler logic here
  }
  return (
    <>
      <header style={{background: active ? "red" : "pink"}}>
        <div className="logo" onClick={handleClick}>
          Awesome News
        </div>
        <input type="text" onChange={getKeyword}/>
        {/* <p>The Keywords are: {keyword}</p> */}
        <Nav />
      </header>
    </>
  );
}