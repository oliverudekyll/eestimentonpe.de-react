function EnterScreen({ onClick, isHidden }) {
  return (
    <div
      style={{ display: isHidden ? "none" : "flex" }}
      className="enter-screen"
    >
      <p className="enter-screen__btn">
        Kliki siia, et siseneda <i className="italic">meeste</i> maailma...
      </p>
    </div>
  );
}

export default EnterScreen;
