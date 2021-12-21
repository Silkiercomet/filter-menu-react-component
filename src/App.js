import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./styles.css";
const AllCategories = new Set(items.map((item) => item.category));
export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([...AllCategories, "all"]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="title">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
