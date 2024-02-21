import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    // setItems((items)) is the current state
  }

  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }

  function toggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all the items?"
    );

    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItems}
        onToggleItems={toggleItems}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
