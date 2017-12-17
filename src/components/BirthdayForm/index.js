import { connect } from 'react-redux';
import BirthdayForm from './BirthdayForm';
import { setDay, setMonth, revealHoroscope } from '../../actions';

const mapStateToProps = state => {
    return {
        months: state.months,
        days: state.days,
        selectedMonth: state.selectedMonth,
        selectedDay: state.selectedDay,
        horoscope: state.horoscope,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setDay: day => {
            dispatch(setDay(day));
        },
        setMonth: month => {
            dispatch(setMonth(month));
        },
        revealHoroscope: () => {
            dispatch(revealHoroscope());
        }
    }
}

const BirthdayFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BirthdayForm)

export default BirthdayFormContainer;