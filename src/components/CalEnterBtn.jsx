const CalEnterBtn = ({
  result,
  setResult,
  temp,
  setTemp,
  operator,
  setOperator,
}) => {
  const onClickEnter = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(parseInt(String(Number(temp) / Number(result)), 10));
        break;
    }

    setTemp("");
    setOperator("");
  };

  return (
    <button
      className="btn-style bg-pink-400 active:bg-pink-100"
      onClick={onClickEnter}
    >
      Enter
    </button>
  );
};

export default CalEnterBtn;
