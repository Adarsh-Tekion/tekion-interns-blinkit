import {incNumber, decNumber} from '../../../../../../../../../../../redux/actions/action'
function handleOnClick(changeCountFnc, dispatch, id) {
    if (changeCountFnc === "add")
        dispatch(incNumber(id));
    else if (changeCountFnc === "sub")
        dispatch(decNumber(id));
}

export { handleOnClick }