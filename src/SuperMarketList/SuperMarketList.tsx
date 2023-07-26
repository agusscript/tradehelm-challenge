import "./SuperMarketList.scss";
import FormItem from "../FormItem/FormItem";
import { useState } from "react";

function SuperMarketList(): JSX.Element {
  const [visibility, setVisibility] = useState(false);

  function handleVisibility() {
    setVisibility(!visibility);
  }

  function handleFormVisibility() {
    return visibility ? "active" : "hidden";
  }

  function handleOverlayVisibility() {
    return visibility ? "show" : "inactive";
  }

  return (
    <main>
      <div
        className={`overlay ${handleOverlayVisibility()}`}
        onClick={handleVisibility}
      ></div>
      <section className="market-list">
        <h2 className="title">Supermarket list</h2>
        <p className="number-items">0 item(s)</p>
        <button className="main-add-btn" onClick={handleVisibility}>
          Add item
        </button>
        <FormItem
          formClassName={`form-item-container ${handleFormVisibility()}`}
          btnCloseFunction={handleVisibility}
        />
      </section>
    </main>
  );
}

export default SuperMarketList;
