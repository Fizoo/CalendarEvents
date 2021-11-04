import {EventAction, EventActionsEnum, EventState} from "./types";

const initialState:EventState = {
    quests:[],
    events:[]
};

export const eventReducer=(state=initialState,action:EventAction):EventState=>{
    switch (action.type) {
        case EventActionsEnum.SET_EVENTS:
            return {...state,events:action.payload}
        case EventActionsEnum.SET_QUESTS:
            return {...state,quests:action.payload}
        default: return state;
    }
}