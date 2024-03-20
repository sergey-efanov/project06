import InfoCard from "../card/InfoCard";

export default function InfoList({
  data,
  children,
  gridStyle,
  backgroundColor,
  displayCards
}) {
  const standartList = (
    <div style={gridStyle}>
      {data.map((dataElem) => (
        <InfoCard info={dataElem} bg={backgroundColor} />
      ))}
    </div>
  );
  const copyData = JSON.parse(JSON.stringify(data))
  const sortData = copyData.sort((a, b) => {
    if (a.description < b.description) {
      return -1;
    }
    if (a.description > b.description) {
      return 1;
    }
    return 0;
  });
  const sortList = (
    <div style={gridStyle}>
      {sortData.map((dataElem) => (
        <InfoCard info={dataElem} bg={backgroundColor} />
      ))}
    </div>
  );

  console.log(displayCards);
  return (
    <div>
      {children && children}
      {displayCards ? sortList : standartList}
      {/* {sortList} */}
    </div>
  );
}
