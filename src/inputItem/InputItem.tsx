import "./InputItem.scss";

function InputItem(): JSX.Element {
  return (
    <div className="input-item-container">
      <h2>Add item</h2>
      <input type="text" />
      <div className="btn-container">
        <button className="close-btn">Close</button>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default InputItem;
