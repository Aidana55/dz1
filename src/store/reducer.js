const initialState = {
    count:0
}
export default function reducer (state = initialState, action) {
if (action.type === "PLUS"){
    return {...state,count: state.count+1}
}else if (action.type === "PLUSTEN"){
    return {...state,count: state.count+10}
}else if (action.type === "RESET"){
    return {...state,count: 0}
}else if (action.type === "MINUS"){
    return {...state,count: Math.max(state.count-1,0)}
}else if (action.type === "MINUSTEN"){
    return {...state,count: Math.max(state.count-10,0)}
}
    return state
}