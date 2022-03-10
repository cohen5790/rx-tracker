import RxListItem from '../RxListItem/RxListItem';

export default function AddRxForm() {
  
  return (
    <main className="RxList">
      Medication Name: 
      <input type="text"></input><br></br>
      Dosage: 
      <input type="number"></input>mg<br></br>
      Times Per Day: 
      <input type="number" max="8" min="1"></input><br></br>
    </main>
  );
}