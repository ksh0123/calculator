const CalDelBtn = ({ result, setResult }) => {
  const onClickDel = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  return (
    <button
      className="btn-style bg-pink-400 active:bg-pink-900"
      onClick={onClickDel}
    >
      Del
    </button>
  );
};

export default CalDelBtn;
