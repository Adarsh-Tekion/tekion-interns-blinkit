import items from '../Components/assets/DataStub.js';

const initalState=[];
for(let i=0;i<items.length;i++)
{
    initalState[i]=0;
}
function changeInc(state,id)
{
    state[id]+=1;
    return state;
}
function changeDec(state,id)
{
    if(state[id]<=0)
    return state;

    state[id]-=1;
    return state;
}
const changeNumber = (state=initalState, action) =>{
    switch(action.type){
        
        case "INCREMENT" : return (items.find((item)=>item.id===action.Id)?(changeInc(state,action.Id-1)):state);
        case "DECREMENT" : return (items.find((item)=>item.id===action.Id)?(changeDec(state,action.Id-1)):state);
        default          : return state;
        
    }
}
export default changeNumber;