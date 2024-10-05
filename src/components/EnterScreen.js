function EnterScreen({ onClick, isHidden }) {
  return (
    <div
      style={{ display: isHidden ? "none" : "flex" }}
      className="enter-screen"
    >
      <p className="enter-screen__btn">Kliki siia, et siseneda...</p>
    </div>
  );
}

export default EnterScreen;
