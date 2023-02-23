import moment from 'moment';
import 'moment/locale/ru'
import capitalize from './capitalize';
import getDaysBetweenDates from './getDaysBetweenDates';
import uniqid from 'uniqid';

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
    console.log(allDays);

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
                    {allDays.map((day, index) => {
                        if (index % 7 === 0 && index > 0) {
                                return(
                                <tr key={uniqid()}>
                                    <td key={uniqid()}>{day}</td>
                                </tr>
                            )
                        }
                        return(
                            <td key={uniqid()}>{day}</td>
                        )
                    })}
                    {/* <tr>
                        <td className="ui-datepicker-other-month">27</td>
                        <td className="ui-datepicker-other-month">28</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>7</td>
                        <td className="ui-datepicker-today">8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}