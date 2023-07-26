import "./FormItem.scss";

function FormItem({ formClassName, btnCloseFunction }): JSX.Element {
  return (
    <div className={formClassName}>
      <h2>Add item</h2>
      <input type="text" />
      <div className="btn-container">
        <button className="close-btn" onClick={btnCloseFunction}>
          Close
        </button>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default FormItem;
