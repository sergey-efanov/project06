import InfoCard from "../card/InfoCard";

export default function InfoList({
  data,
  children,
  gridStyle,
  backgroundColor,
}) {
  const standartList = (
    <div style={gridStyle}>
      {data.map((dataElem) => (
        <InfoCard info={dataElem} bg={backgroundColor} />
      ))}
    </div>
  );
  console.log(data);
  const sortData = data.sort((a, b) => {
    if (a.description < b.description) {
      return -1;
    }
    if (a.description > b.description) {
      return 1;
    }
    return 0;
  });
  console.log(sortData);
  const sortList = (
    <div style={gridStyle}>
      {sortData.map((dataElem) => (
        <InfoCard info={dataElem} bg={backgroundColor} />
      ))}
    </div>
  );

  const handleChangeList = () => {};

  return (
    <div>
      {children && children}
      {standartList}
      {/* {sortList} */}
    </div>
  );
}
