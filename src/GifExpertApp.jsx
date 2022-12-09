import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const addNewCategory = (value) => {
    setCategories([value, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory addNewCategory={(value) => addNewCategory(value)} />

      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif item */}
    </>
  );
};
