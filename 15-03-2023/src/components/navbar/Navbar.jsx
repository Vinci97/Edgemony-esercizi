import { useState } from "react";
import "./index.css";

const Navbar = ({ cartListLength, setSearchInputValue,setModalCart,modalCart}) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchInputValue(() => inputValue);
  };
  
  const ButtonClick = () => {
    setModalCart(!modalCart);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
      </form>
      <div className="Navbar__cart">
        <p onClick={ButtonClick}>{cartListLength} 🛒</p>
      </div>
    </div>
  );
};

export default Navbar;