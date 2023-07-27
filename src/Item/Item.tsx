import "./Item.scss";

function Item({itemList, btnFunction}: {itemList: string, btnFunction: any}): JSX.Element {
  return (
    <div className="list-item">
      <span className="item">{itemList}</span>
      <button className="delete-btn" onClick={btnFunction}>delete</button>
    </div>
  );
}

export default Item;
