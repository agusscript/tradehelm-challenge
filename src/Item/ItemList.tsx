import "./Item.scss";

function ItemList({
  itemList,
  btnFunction,
  itemOnClick,
  itemClassName,
}: {
  itemList: string;
  btnFunction: React.MouseEventHandler<HTMLButtonElement>;
  itemOnClick: React.MouseEventHandler<HTMLSpanElement>;
  itemClassName: string;
}): JSX.Element {
  return (
    <div className={itemClassName}>
      <span className="item" onClick={itemOnClick}>
        {itemList}
      </span>
      <button className="delete-btn" onClick={btnFunction}>
        delete
      </button>
    </div>
  );
}

export default ItemList;
