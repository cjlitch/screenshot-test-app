export const types = {
    SET_MONTH: 'SET_MONTH',
    SET_DAY: 'SET_DAY',
    REVEAL_HOROSCOPE: 'REVEAL_HOROSCOPE'
}

export function setMonth(month) {
    return {
        type: types.SET_MONTH,
        month
    }
}

export function setDay(day) {
    return {
        type: types.SET_DAY,
        day
    }
}

export function revealHoroscope() {
    return {
        type: types.REVEAL_HOROSCOPE,
    }
}