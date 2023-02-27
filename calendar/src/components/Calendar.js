import moment from 'moment';
import 'moment/locale/ru'
import capitalize from './capitalize';
import getDaysBetweenDates from './getDaysBetweenDates';
import getArraysOfDays from './getArraysOfDays';

export default function Calendar(props) {
    moment.updateLocale('ru', {week: {dow: 1}})
    const date = props.date;
    const day = date.format('DD');
    const year = date.format('YYYY');
    const weekday = date.day(props).format('dddd');
    const month = date.format('MMMM');
    const declineMonth = date.format('D MMMM').replace(/[0-9]/g, '');
    const start = moment(date).startOf('month').startOf('week');
    const end = moment(date).endOf('month').endOf('week');
    const allDays = getDaysBetweenDates(start, end);
    const weeksArr = getArraysOfDays(allDays);

    const addClassToday = (day) => moment().format('DD-MM-YYYY') === day ? 'ui-datepicker-today' : '';
    const addClassOtherMonth = (date, day) => moment(date).format('MM-YYYY') !== day.slice(3) ? 'ui-datepicker-other-month' : '';

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{capitalize(weekday)}</div>
                <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{day}</div>
                <div className="ui-datepicker-material-month">{declineMonth}</div>
                <div className="ui-datepicker-material-year">{year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{capitalize(month)}</span>&nbsp;<span className="ui-datepicker-year">{props.date.format('YYYY')}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col className="ui-datepicker-week-end"></col>
                    <col className="ui-datepicker-week-end"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    {weeksArr.map((week, index) => {
                        return <tr key={index}>
                            {week.map((day, index) => <td key={index} className={`${addClassToday(day)} ${addClassOtherMonth(date, day)}`}>{day.slice(0, 2)}</td>)}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}