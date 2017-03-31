export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function setInitial(value) {
    return {
        type: SET_INITIAL,
        initial: value
    };
}
