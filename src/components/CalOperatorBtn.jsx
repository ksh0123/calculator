const CalOperatorBtn = ({
  bgColor,
  result,
  setResult,
  setTemp,
  setOperator,
  inputOperator,
}) => {
  const onClickOperator = () => {
    if (isNaN(result)) {
      alert("숫자를 입력해 주세요!");
    } else {
      setTemp(result);
      setResult("0");
      setOperator(inputOperator);
    }
  };

  return (
    <button className={`btn-style ${bgColor}`} onClick={onClickOperator}>
      {inputOperator}
    </button>
  );
};

export default CalOperatorBtn;
