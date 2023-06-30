import React, { useState } from "react";
import "./style.css";
import { BsBackspace } from "react-icons/bs";
import { PiDivideBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import {
  AiOutlinePlus,
  AiOutlinePercentage,
  AiOutlineMinus,
} from "react-icons/ai";
import { LiaEqualsSolid } from "react-icons/lia";
import { BsDot } from "react-icons/bs";

AiOutlineMinus;

const Layout = () => {
  const [result, setResult] = useState("");

  const onClickButton = (e) => {
    setResult(result.concat(e.target.name));
    console.log(result.concat(e.target.name));
  };

  const calculateResult = () => {
    setResult(eval(result).toString());
  };
  const clearResult = () => {
    setResult("");
  };
  console.log(setResult);
  return (
    <div className="container">
      <div className="evalution_area">
        <input
          type="text"
          value={result}
          className="input"
          onChange={onClickButton}
        />
        <h1>{result}</h1>
      </div>
      <div className="btn__container">
        <button name="clear" className="btn__item" onClick={clearResult}>
          C
        </button>
        <button className="btn__item" name="backslash" onClick={onClickButton}>
          <BsBackspace className="icon" />
        </button>
        <button name="%" className="btn__item" onClick={onClickButton}>
          <AiOutlinePercentage className="icon" />
        </button>
        <button name="/" className="btn__item" onClick={onClickButton}>
          <PiDivideBold className="icon" />
        </button>
        <button name="7" className="btn__item" onClick={onClickButton}>
          7
        </button>
        <button name="8" className="btn__item" onClick={onClickButton}>
          8
        </button>
        <button name="9" className="btn__item" onClick={onClickButton}>
          9
        </button>
        <button name="*" className="btn__item" onClick={onClickButton}>
          <IoMdClose className="icon" />
        </button>
        <button name="4" className="btn__item" onClick={onClickButton}>
          4
        </button>
        <button name="5" className="btn__item" onClick={onClickButton}>
          5
        </button>
        <button name="6" className="btn__item" onClick={onClickButton}>
          6
        </button>
        <button name="-" className="btn__item" onClick={onClickButton}>
          <AiOutlineMinus className="icon" />
        </button>
        <button name="1" className="btn__item" onClick={onClickButton}>
          1
        </button>
        <button name="2" className="btn__item" onClick={onClickButton}>
          2
        </button>
        <button name="3" className="btn__item" onClick={onClickButton}>
          3
        </button>
        <button name="+" className="btn__item" onClick={onClickButton}>
          <AiOutlinePlus className="icon" />
        </button>
        <button name="0" className="btn__item" onClick={onClickButton}>
          0
        </button>
        <button className="btn__item"></button>
        <button name="." className="btn__item" onClick={onClickButton}>
          <BsDot className="icon" />
        </button>
        <button
          name="equal"
          className="btn__item equal__btn"
          onClick={calculateResult}
        >
          <LiaEqualsSolid className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Layout;
