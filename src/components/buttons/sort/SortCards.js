import { useState } from "react";
import styleSortCard from "./sortcard.module.css";


export default function SortCards({ onSortCards }) {

  const [isActiveButton, setIsActiveButton] = useState(false);

  const handleSortCards = () => {
    if (isActiveButton) {
      setIsActiveButton(false)
    } else {
      setIsActiveButton(true)
    }
    onSortCards(isActiveButton)
  };

  return (
    <button onClick={handleSortCards} className={styleSortCard.button}>
      {!isActiveButton ? "Сортировать по алфавиту" : "Изначальная сортировка"}
    </button>
  );
}
