import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";

import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {IUser} from "../model/IUser";
import {IEvent} from "../model/IEvents";

interface EventFormProps {
    quests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
   const [event,setEvent]=useState<IEvent>({
       author:'',
       date:'',
       description:'',
       quest:''
   })
    const user = useSelector((state:AppStateType) => state.auth.user);

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})

        console.log(event)
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(quest: string) => setEvent({...event, quest})}>
                    {props.quests.map(guest =>
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
