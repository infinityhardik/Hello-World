import React, {useContext} from 'react';
import {AppContext} from "./useContextApp";

function Login() {
    const {setUserName} = useContext(AppContext);

    const onChangeHandler = (Event) => {
        setUserName(Event.target.value);
    }

    return (
        <div>
            <input onChange={onChangeHandler} />
        </div>
    )
}

export default Login;