import {EventActionsEnum, SetEventsAction, SetQuestsAction} from "./types";
import {IEvent} from "../../../model/IEvents";
import {IUser} from "../../../model/IUser";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreator={
    setQuests:(payload:IUser[]):SetQuestsAction=>({type:EventActionsEnum.SET_QUESTS,payload}),
    setEvents:(payload:IEvent[]):SetEventsAction=>({type:EventActionsEnum.SET_EVENTS,payload}),
    fetchQuests:()=>async (dispatch:AppDispatch)=>{
        try {
            const response=await  UserService.getUsers()
            dispatch(EventActionCreator.setQuests(response.data))


        }
        catch (e) {
            console.log(e)
        }
    },
    createEvent:(event:IEvent)=>async (dispatch:AppDispatch)=>{
        try {
            const events=localStorage.getItem('events')||'[]'
            const json=JSON.parse(events)as IEvent[]
            json.push(event)
            dispatch(EventActionCreator.setEvents(json))
            localStorage.setItem('events',JSON.stringify(json))
        }
        catch (e) {

        }
    },
    fetchEvents:(userName:string)=>async (dispatch:AppDispatch)=>{
        try {
            const events=localStorage.getItem('events')||'[]'
            const json=JSON.parse(events) as IEvent[]
            const currentUserEvents=json.filter(ev=>ev.author===userName||ev.quest===userName)
            dispatch(EventActionCreator.setEvents(currentUserEvents))
        }
        catch (e) {

        }
    }

}