const CalNumberBtn = ({ result, setResult, number }) => {
  const onClickNumber = () => {
    result == "0" ? setResult(number) : setResult(result + number);
  };

  return (
    <button className="btn-style" onClick={onClickNumber}>
      {number}
    </button>
  );
};

export default CalNumberBtn;
