import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../model/IEvents";
import {Moment} from "moment";
import {formatDate} from "../utils/date";


interface EventProps {
    events:IEvent[]
}

export const EventCalendar:FC<EventProps> = (props) => {
    const dateCellRender = (value:Moment) => {
        const formatedDate=formatDate(value.toDate())
        const currentDayEvents=props.events.filter(ev=>ev.date===formatedDate)
        return (
           <div>
               {currentDayEvents.map((ev,i)=>
               <div key={i}>
                   {ev.description}
               </div>)}
           </div>
        );
    };

    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};


