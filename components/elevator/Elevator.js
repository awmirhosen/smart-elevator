import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import style from '../Sidex/sidex.module.scss';
import Floor from "./Floor";

const Elevator = ({ line, ChangeLine, lineColumn,ClickSettingFllorHandler }) => {

    let floors = useSelector(state => state.sidexReducer.floors)

    const lines = useSelector(state => state.sidexReducer.lines)


    // console.log(lines)

    const mystyle = {
        justifyContent: 'center',
        display: 'flex',
        position: 'absolute',
        top: 150,
        width: '24%',
        right: 0,
        zIndex: 50,
    };

    return (
        <>
            {/* col-xl-3 col-lg-4 col-md-6 col-sm-12 */}
            <div className={`${style.rowSidex}`}>
                <div className={style.lineSelect}>
                    <select
                        value={line.line_id}
                        onChange={(e) => ChangeLine(e.target.value, lineColumn)}
                    >
                        {
                            lines.map((value, index) => {
                                return (
                                    <option
                                        value={value.line_id}
                                        key={index}
                                    >
                                        {value.line_name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className={`${style.top} d-flex`}>
                    <div className={style.sidexTop}>
                        <div className={'mb-2'}>
                            <span className={[
                                style.settingRdy1,
                                style.settingRdy
                            ].join(' ')}></span>
                        </div>
                        <div>
                            {line && line.line_status} {line && line.line_name}
                        </div>
                    </div>
                    <div className={style.sidexTop}>
                        <div className={'mb-2'}>
                            <span className={[
                                style.settingRdy2,
                                style.settingRdy
                            ].join(' ')}></span>
                        </div>
                        <div>
                            -3
                        </div>
                    </div>
                    <div className={style.sidexTop}>
                        <div className={'mb-2'}>
                            <span className={[
                                style.settingRdy3,
                                style.settingRdy
                            ].join(' ')}></span>
                        </div>
                        <div>
                            {line && line.capacity}
                        </div>
                    </div>
                    <div className={style.sidexTop}>
                        <div className={'mb-2'}>
                            <span className={[
                                style.settingRdy4,
                                style.settingRdy
                            ].join(' ')}></span>
                        </div>
                        <div>
                            {line && line.capacity}%
                        </div>
                    </div>
                    <div className={style.sidexTop}>
                        <div className={'mb-2'}>
                            <span className={[
                                style.settingRdy5,
                                style.settingRdy
                            ].join(' ')}></span>
                        </div>
                        <div>
                            G
                        </div>
                    </div>
                </div>
                <div className={`${style.paddingButton} mt-3 p-0`}>
                    <div className={`${style.botton}`}>
                        <div style={mystyle}>
                            <span className={style.elevatorIcon}></span>
                        </div>

                        {
                            floors.map((value, key) => {
                                return (
                                    <Fragment key={key + lineColumn}>
                                        <Floor
                                        line_index={line.line_id}
                                         floor={value}
                                          ClickSettingFllorHandler={ClickSettingFllorHandler} />
                                    </Fragment>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Elevator;