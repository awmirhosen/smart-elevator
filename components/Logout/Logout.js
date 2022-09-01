import React from 'react'
import classes from './logout.module.css'
import {useRouter} from "next/router";



const Logout = () => {

    const router = useRouter()



    return (
        <>
            <div className={classes.logout}
            onClick={logout}
            >
                Logout
            </div>
        </>
    )
}
export default Logout