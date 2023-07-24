import "./App.scss";

function App(): JSX.Element {
  return (
    <main>
      <section className="market-list">
        <h2 className="title">Supermarket list</h2>
        <p className="number-items">0 item(s)</p>
        <button className="add-btn">Add item</button>
      </section>
    </main>
  );
}

export default App;
