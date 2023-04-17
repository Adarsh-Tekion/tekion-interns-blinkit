import { changeDec, changeInc } from "./selectors/changeState";

const initalState = new Map();
const changeNumber = (state = initalState, action) => {
    switch (action.type) {

        case "INCREMENT": return changeInc(state, action.Id);
        case "DECREMENT": return changeDec(state, action.Id);
        default: return state;
    }
}
export default changeNumber;