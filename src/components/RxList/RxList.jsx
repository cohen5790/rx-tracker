import './RxList.css';
import RxListItem from '../RxListItem/RxListItem';

export default function RxList({ listItems }) {
  const items = listItems.map(item =>
    <RxListItem
      key={item._id}
      listItem={item}
    />
  );
  return (
    <main className="RxList">
      {items}
    </main>
  );
}