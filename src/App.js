import React, { useState } from "react";
import Logo from "./Component/Logo";
import Form from "./Component/Form";
import PackingList from "./Component/PackingList";
import Stats from "./Component/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelClearItems(){
    const confirmed=window.confirm("Are you sure you want to delete all items?")
   if(confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItem={handleAddItem} />
      <PackingList
        items={items}
        OnDeleteItem={handleDeleteItem}
        onToggleItem={handelToggleItem}
        onClearItems={handelClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
