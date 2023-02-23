import './App.css';
import moment from 'moment';
import Calendar from './components/Calendar';

function App() {
  const now = new moment('10-25-2010');
  return (
    <>
      <Calendar date={now} />
    </>
  );
}

export default App;
