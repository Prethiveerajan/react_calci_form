import React, { useState } from 'react';
import './CalciComponent.css';

function Calculator() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumClick = (num) => {
    if (!operator) {
      setNum1(num1 + num);
    } else {
      setNum2(num2 + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (num1 && num2) {
      calculateResult();
    }
    setOperator(op);
  };

  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res = 0;

    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n1 / n2;
        break;
      default:
        break;
    }

    setResult(res);
    setNum1(res.toString());
    setNum2('');
    setOperator('');
  };

  const handleClearClick = () => {
    setResult(0);
    setNum1('');
    setNum2('');
    setOperator('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={num1 + operator + num2} readOnly />
      <br />
      <button onClick={() => handleNumClick('1')}>1 </button>
      <button onClick={() => handleNumClick('2')}>2 </button>
      <button onClick={() => handleNumClick('3')}>3 </button>
      <button onClick={() => handleOperatorClick('+')}>+ </button>
      <br />
      <button onClick={() => handleNumClick('4')}>4 </button>
      <button onClick={() => handleNumClick('5')}>5 </button>
      <button onClick={() => handleNumClick('6')}>6 </button>
      <button onClick={() => handleOperatorClick('-')}>- </button>
      <br />
      <button onClick={() => handleNumClick('7')}>7 </button>
      <button onClick={() => handleNumClick('8')}>8 </button>
      <button onClick={() => handleNumClick('9')}>9 </button>
      <button onClick={() => handleOperatorClick('*')}>* </button>
      <br />
      <button onClick={() => handleNumClick('0')}>0 </button>
      <button onClick={() => handleOperatorClick('/')}>/ </button>
      <button onClick={() => calculateResult()}>= </button>
      <button onClick={() => handleClearClick()}>Clear </button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
