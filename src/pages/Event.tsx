import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {EventActionCreator} from "../store/redusers/event/actions";
import {IEvent} from "../model/IEvents";
import {EventCalendar} from "../component/EventCalendar";
import EventForm from "../component/EventForm";


const Event: FC = () => {
    const dispatch=useDispatch()
    const [modalVisible, setModalVisible] = useState(false);

    const {quests,events} = useSelector((state:AppStateType) => state.eventReducer);
    const user = useSelector((state:AppStateType) => state.auth.user);

    useEffect(() => {
        dispatch(EventActionCreator.fetchQuests())
        dispatch(EventActionCreator.fetchEvents(user.username))
        //fetchEvents(user.username);
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        dispatch(EventActionCreator.createEvent(event))

    }

    return (
        <Layout>
          <div>{JSON.stringify(events)}</div>
            <EventCalendar events={events}/>
            <Row justify="center">
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    quests={quests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;
