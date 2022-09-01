import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import {
    requestUpdateDestination,
    requestUpdateSmart
} from "../../src/redux/updateButton/updateActions";
import style from '../modal/modalComponent.module.scss';
import login from "../../pages/login";

const ModalComponent = (props) => {

    const state = useSelector(state => state.updateReducer);

    const dispatch = useDispatch();

    const {
        openModal,
        ClickSettingFllorHandler,
        floor_index,
        line_index,
        localProject_id
    } = props;


    const updateButton = (floor_id, call_btn, status) => {

        console.log(line_index, floor_id, call_btn, status)

        dispatch(requestUpdateSmart(line_index, floor_id, line_index, status));
    }

    const buttons = useSelector(state => state.sidexReducer.buttons)

    // console.log(buttons);

    const [button, setButton] = useState([])

    useEffect(() => {


        if (floor_index != null && line_index != null) {
            console.log(buttons[line_index].buttons_floors)
            setButton(buttons[line_index].buttons_floors);
        }

    }, [floor_index, line_index, buttons])

    const [fromFloor, setFromFloor] = useState();

    if (localProject_id == 2) {
        useEffect(() => {
                  const result = buttons.filter(item => item.floor_index_from == floor_index);
                  setFromFloor(result)
        }, [floor_index]);

    }

    const destinationHandler = (floor_id_from, floor_id_to, status) => {
        console.log(floor_id_from, floor_id_to, status)
        if (floor_id_from !== undefined) {
            console.log('fff')
        }else {
            console.log('bbb')
        }
        // console.log(floor_id_from, floor_id_to, status)
        // dispatch(requestUpdateSmart(floor_id_from, floor_id_to, status));
    }


    return (
        <div
            onClick={() => ClickSettingFllorHandler(false)}>
            <Modal
                show={openModal}
            >
                <Modal.Dialog
                >
                    <div className={'d-flex justify-content-around p-4'}>
                        {
                        localProject_id === '1' ? (
                        <span
                        className={style.buttonFloor}
                        >
                        ON
                        </span>
                            ) : (
                                <>
                                    {
                                        fromFloor !== undefined ? (
                                            <>
                                                {
                                                    fromFloor.map((item, index) =>(
                                                            <div
                                                                key={index}
                                                            >
                                                                <span
                                                                    // onClick={requestUpdateDestination(item.floor_id_from, item.floor_id_to, item.status)}
                                                                    onClick={() => dispatch(requestUpdateDestination(item.floor_id_from, item.floor_id_to, item.status))}
                                                                    className={style.buttonFloor}
                                                                    style={{ backgroundColor: item.status === 1 ? 'green' : 'red'  }}
                                                                >
                                                                    {item.floor_name_to}
                                                                </span>
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <>
                                                null
                                            </>
                                        )
                                    }
                                </>
                            )
                        }
                    </div>

                </Modal.Dialog>

            </Modal>
        </div>
    )

}

export default ModalComponent;