import React, {createContext, useState} from 'react'
import User from './useContextUser';
import Login from './useContextLogin';

export const AppContext = createContext(null);

function App() {
    const [userName, setUserName] = useState("");

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <Login />
            <User />
        </AppContext.Provider>
    )
}

export default App;