export const incNumber = (id) => {
    return {
        type: "INCREMENT",
        Id: id
    }
}
export const decNumber = (id) => {
    return {
        type: "DECREMENT",
        Id: id
    }
}

