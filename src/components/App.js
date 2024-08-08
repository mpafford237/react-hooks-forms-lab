import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState('')

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
