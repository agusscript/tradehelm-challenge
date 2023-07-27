import "./Item.scss";

function Item({itemList}): JSX.Element {
  return (
    <div className="list-item">
      <span className="item">{itemList}</span>
      <button className="delete-btn">delete</button>
    </div>
  );
}

export default Item;
