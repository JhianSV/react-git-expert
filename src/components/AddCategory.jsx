import { useState } from "react";

export const AddCategory = ({ addNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault()

    if (inputValue.trim().length <= 1) return;
    
    addNewCategory(inputValue)

    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
      type="text"
      placeholder="Buscar Gif"
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
  );
};
