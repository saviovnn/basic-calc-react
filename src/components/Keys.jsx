const Keys = ({ label, keyClass, onButtonClick }) => {
  const equalsClass =
    "col-[span_2] bg-[#FFA538] font-bold text-4xl hover:bg-[#ff8e05] ";
  return (
    <div
      className={`bg-[#9CA2AF] flex cursor-pointer items-center justify-center p-4 mt rounded-2xl shadow-2xl hover:bg-[#565D68] ${
        keyClass && equalsClass
      }`}
      onClick={() => onButtonClick(label)}
    >
      {label}
    </div>
  );
};

export default Keys;
