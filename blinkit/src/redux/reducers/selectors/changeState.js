function changeInc(state, id) {
    if (state.has(id))
        state.set(id, state.get(id) + 1);
    else
        state.set(id, 1);
    const newState = new Map();
    state.forEach((value, key) => {
        newState.set(key, value);
    })
    return newState;
}
function changeDec(state, id) {
    if (state.get(id) > 0)
        state.set(id, state.get(id) - 1);
    else
        state.delete(id);

    const newState = new Map();
    state.forEach((value, key) => {
        newState.set(key, value);
    })
    return newState;
}

export { changeDec, changeInc };