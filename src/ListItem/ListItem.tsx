import "./ListItem.scss";

function ListItem(): JSX.Element {
  return (
    <div className="list-item">
      <span className="item">Helado de pejelagarto</span>
      <button className="delete-btn">delete</button>
    </div>
  );
}

export default ListItem;
