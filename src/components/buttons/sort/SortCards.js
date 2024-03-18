import styleSortCard from "./sortcard.module.css";

export default function SortCards() {
  const handleSortCards = () => {
    
  };

  return (
    <button onClick={handleSortCards} className={styleSortCard.button}>
      Сортировать по алфавиту
    </button>
  );
}
