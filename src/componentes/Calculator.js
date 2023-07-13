import React, { useState } from 'react';

const Calculator = () => {
  const [valores, setValores] = useState('');
  const [result, setResult] = useState(0);

  const buttonClick = (value) => {
    setValores(valores + value);
  };

  const clearClick = () => {
    setValores('');
    setResult(0);
  };

  const equalsClick = () => {
      setResult(eval(valores));
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={valores} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button className="button gray" onClick={clearClick}>
          C
        </button>
        <button className="button gray" onClick={() => equalsClick()}>
          =
        </button>
        <button className="button gray" onClick={() => buttonClick("%")}>
          %
        </button>
        <button className="button orange" onClick={() => buttonClick("/")}>
          ÷
        </button>
        <button className="button" onClick={() => buttonClick("7")}>
          7
        </button>
        <button className="button" onClick={() => buttonClick("8")}>
          8
        </button>
        <button className="button" onClick={() => buttonClick("9")}>
          9
        </button>
        <button className="button orange" onClick={() => buttonClick("*")}>
          x
        </button>
        <button className="button" onClick={() => buttonClick("4")}>
          4
        </button>
        <button className="button" onClick={() => buttonClick("5")}>
          5
        </button>
        <button className="button" onClick={() => buttonClick("6")}>
          6
        </button>
        <button className="button orange" onClick={() => buttonClick("+")}>
          +
        </button>
        <button className="button" onClick={() => buttonClick("1")}>
          1
        </button>

        <button className="button" onClick={() => buttonClick("2")}>
          2
        </button>
        <button className="button" onClick={() => buttonClick("3")}>
          3
        </button>
        <button className="button orange" onClick={() => buttonClick("-")}>
          -
        </button>

        <br />
      </div>
    </div>
  );
};

export default Calculator;
