import React, {useContext} from 'react'
import ReactDOM from 'react-dom';

const Context = React.createContext();

const App = () => {
    return (
        <Context.Provider value="Hello from Provider">
            <Child/>
        </Context.Provider>
    )
};

const Child = () => {
    const value = useContext(Context);
    return <span>{value}</span>
};

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
