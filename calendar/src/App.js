import './App.css';
import moment from 'moment';
import Calendar from './components/Calendar';

function App() {
  const now = new moment('02-25-2022');
  return (
    <>
      <Calendar date={now} />
    </>
  );
}

export default App;
