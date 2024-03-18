import styleInfoCard from "./infocard.module.css";

export default function InfoCard({ info, bg }) {
  return (
    <div
      className={styleInfoCard.container}
      style={{
        backgroundColor: bg,
      }}
    >
      <p>{info.type}</p>
      <p>{info.description}</p>
    </div>
  );
}
