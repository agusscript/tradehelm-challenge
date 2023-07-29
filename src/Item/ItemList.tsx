import "./Item.scss";
import { Item } from "./Item";

function ItemList({
  itemList,
  btnFunction,
  itemOnClick,
  itemClassName,
}: {
  itemList: string;
  btnFunction: any;
  itemOnClick: any;
  itemClassName: string;
}): JSX.Element {
  return (
    <div className={itemClassName}>
      <span className="item" onClick={itemOnClick}>{itemList}</span>
      <button className="delete-btn" onClick={btnFunction}>
        delete
      </button>
    </div>
  );
}

export default ItemList;
