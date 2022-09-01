import React, { Fragment, useState } from "react";
import Image from "next/image";
import style from '../layout/layout.module.scss';
import { useRouter } from "next/router";

const Layout = ({ children }) => {

    const router = useRouter();

    const [disActiveMenu, setDisActiveMenu] = useState(1);

    return (
        <div className={'d-flex'}>
            <div className={`${style.bg1} `}>
                <div className={`${style.layoutTop}`}></div>
                <div className={style.bg4}>
                </div>
                <div className={style.child}>
                    {children}
                </div>
                <div className={`${style.menuMobile} d-flex justify-content-around`}>
                    <div>
                        <span
                            className={`${style.menuIcon1}`}
                            onClick={() => router.push('/analysis/10')}
                        ></span>
                    </div>
                    <div>
                        <span
                            className={`${style.menuIcon2}`}
                            onClick={() => router.push('/view/10')}
                        ></span>
                    </div>
                    <div>
                        <span
                            className={`${style.menuIcon3}`}
                            onClick={() => router.push('/sidex/555')}
                        ></span>
                    </div>
                    <div>
                        <span
                            className={`${style.menuIcon4}`}
                            onClick={() => router.push('/info/11')}
                        ></span>
                    </div>
                    <div>
                        <span
                            className={`${style.menuIcon5}`}
                        ></span>
                    </div>
                </div>
            </div>
            {!disActiveMenu ? <div className={`${style.openMenuButton}`}
                onClick={() => setDisActiveMenu(1)}
            >
                open menu
            </div>
                : null
            }
            <div className={`${style.menuDesk}
             ${disActiveMenu ? style.active : style.disactive}
            `}>
                <div>
                    <span
                        className={`${style.menuIcon1}`}
                        onClick={() => setDisActiveMenu(0)}
                    ></span>
                </div>
                <div>
                    <span
                        className={`${style.menuIcon1}`}
                        onClick={() => router.push('/analysis/10')}
                    ></span>
                </div>
                <div>
                    <span
                        className={`${style.menuIcon2}`}
                        onClick={() => router.push('/view/10')}
                    ></span>
                </div>
                <div>
                    <span
                        className={`${style.menuIcon3}`}
                        onClick={() => router.push('/sidex/555')}
                    ></span>
                </div>
                <div>
                    <span
                        className={`${style.menuIcon4}`}
                        onClick={() => router.push('/info/11')}
                    ></span>
                </div>
                <div>
                    <span
                        className={`${style.menuIcon5}`}
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default Layout;