import React, {useEffect} from 'react';
import './App.scss';
import AppRouter from "./routing/AppRouter";

const App = () => {

    useEffect(() => {
        document.title = "Posts"
    }, [])
    return (
       <AppRouter/>
    );
};

export default App;
