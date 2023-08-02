import "./SuperMarketList.scss";
import React, { useRef, useState } from "react";
import { Item } from "../Item/Item";
import ItemList from "../Item/ItemList";
import Footer from "../Footer/Footer";

function SuperMarketList(): JSX.Element {
  const [visibility, setVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(String);
  const [items, setItems] = useState<Item[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleVisibility() {
    setVisibility(!visibility);
  }

  function changeVisibility() {
    return visibility ? "active" : "hidden";
  }

  function addItems() {
    const item = new Item(inputValue, false);
    const inputRefValue = inputRef.current?.value;

    if (inputRefValue == "") {
      return;
    }

    setItems((prevItem) => [...prevItem, item]);
    clearInput(inputRef.current!);
  }

  function clearInput(input: HTMLInputElement) {
    input.value = "";
  }

  function removeItem(indexToRemove: number) {
    const newArray = [...items];
    newArray.splice(indexToRemove, 1);
    setItems(newArray);
  }

  function completeItem(index: number) {
    const newArray = [...items];
    newArray[index].isCompleted = !newArray[index].isCompleted;
    setItems(newArray);
  }

  return (
    <>
      <main>
        <div className={`overlay ${changeVisibility()}`} onClick={handleVisibility}></div>

        <section className="market-list">
          <h2 className="title">Supermarket list</h2>
          <p className="number-items">{items.length} item(s)</p>

          <div className="item-container">
            {items.map((item, i) => (
              <ItemList
                key={i}
                itemList={item.text}
                itemClassName={`list-item ${item.isCompleted ? "completed" : ""}`}
                itemOnClick={() => completeItem(i)}
                btnFunction={() => removeItem(i)}
              />
            ))}
          </div>

          <button className="main-add-btn" onClick={handleVisibility}>
            Add item
          </button>

          <div className={`input-container ${changeVisibility()}`}>
            <h2>Add item</h2>
            <input
              ref={inputRef}
              type="text"
              placeholder="add your item to the list..."
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="btn-container">
              <button className="close-btn" onClick={handleVisibility}>
                Close
              </button>
              <button
                className="add-btn"
                onClick={() => {
                  addItems();
                  handleVisibility();
                }}
              >
                Add
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SuperMarketList;
