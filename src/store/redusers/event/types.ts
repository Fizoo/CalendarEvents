import {IUser} from "../../../model/IUser";
import {IEvent} from "../../../model/IEvents";

export interface EventState {
    quests:IUser[]
    events:IEvent[]
}

export enum EventActionsEnum {
    SET_QUESTS = 'SET_QUESTS',
    SET_EVENTS = 'SET_EVENTS'
}

export interface SetQuestsAction {
    type: EventActionsEnum.SET_QUESTS
    payload:IUser[]
}
export interface SetEventsAction {
    type: EventActionsEnum.SET_EVENTS
    payload:IEvent[]
}

export type EventAction=SetEventsAction|SetQuestsAction