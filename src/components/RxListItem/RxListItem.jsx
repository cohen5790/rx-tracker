import './RxListItem.css';

export default function RxListItem({ listItem }) {
  return (
    <div className="RxListItem">
      <div className="name">{listItem.name}</div>
      <div className="dose">{listItem.dose}</div>
      <div className="perDiem">{listItem.perDiem}</div>
      <div className="perWeek">{listItem.perWeek}</div>
    </div>
  );
}