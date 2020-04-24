import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Planet from "./Planet";

const App = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setValue((c) => c + 1)}>+</button>
            <button onClick={() => setVisible(true)}>show</button>
            <button  onClick={() => setVisible(false)}>hide</button>
            { visible ?
                <div>
                    <Counter value={value} />
                    <Planet id={value} />
                    <Notification />
                    <Hooks />
                </div>
            : null }
        </div>
    )
};

const Counter = ({value}) => {
    useEffect(() => console.log('use Effect'), []);
    return (
        <div>{value}</div>
    )
};

const Notification = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timeout)
    }, []);

    return (
        <div>
            {visible && <div>hello</div>}
        </div>
    )
};

class Hooks extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('class update')
    }

    componentDidMount() {
        console.log('class mount')
    }

    componentWillUnmount() {
        console.log('class unmout');
    }

    render() {
        return null;
    }
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
