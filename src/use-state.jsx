import React, {useState} from 'react'
import ReactDOM from 'react-dom';

const App = () => {
    const [color, setColor] = useState('gray');
    const [fontSize, setFontSize] = useState(14);
    const [person, setPerson] = useState({name: 'den', age: 20});

    const style = {
        backgroundColor: color,
        padding: '20px',
        fontSize: `${fontSize}px`
    };

    const increaseFontSize = () => {
        setFontSize((s) => s + 2)
    };

    return (
        <div style={style}>
            <div className="buttons">
                <button onClick={() => setColor('gray')}>Dark theme</button>
                <button onClick={() => setColor('white')}>Light theme</button>
                <button onClick={() => setPerson((person) => ({...person, name: 'bob'}))}>update Person</button>
                <button onClick={increaseFontSize}>+</button>
            </div>
            <div style={{paddingTop: '10px'}} className="content">
                Hello world {person.name} {person.age}
            </div>
        </div>
    )
};

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
