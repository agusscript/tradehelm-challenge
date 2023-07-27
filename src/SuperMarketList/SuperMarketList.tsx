import "./SuperMarketList.scss";
import Item from "../Item/Item";
import { useState } from "react";

function SuperMarketList(): JSX.Element {
  const [visibility, setVisibility] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  function handleVisibility() {
    setVisibility(!visibility);
  }

  function changeVisibility() {
    return visibility ? "active" : "hidden";
  }

  function handleSubmit() {
    const input = document.querySelector("input") as HTMLInputElement;
    const item: string = input.value;

    setItems((prevItem) => [...prevItem, item]);
  }

  return (
    <main>
      <div
        className={`overlay ${changeVisibility()}`}
        onClick={handleVisibility}
      ></div>

      <section className="market-list">
        <h2 className="title">Supermarket list</h2>
        <p className="number-items">0 item(s)</p>

        <div className="item-container">
          {items.map((item) => (
            <Item key={Math.random()} itemList={item}/>
          ))}
        </div>

        <button className="main-add-btn" onClick={handleVisibility}>
          Add item
        </button>

        <div className={`input-container ${changeVisibility()}`}>
          <h2>Add item</h2>
          <input name="item" type="text" />
          <div className="btn-container">
            <button className="close-btn" onClick={handleVisibility}>
              Close
            </button>
            <button className="add-btn" onClick={handleSubmit}>Add</button>
          </div>
        </div>

      </section>
    </main>
  );
}

export default SuperMarketList;
