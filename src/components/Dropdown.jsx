import React,{ useState } from 'react';
import './Dropdown.css';

const Dropdown = ({items}) => {
    const [isDropped,toggleIsDropped] = useState(false);
    const toggleDrop = () => toggleIsDropped(!isDropped);

    const options = items.map((e,i) => {
        return (<p key={i}>{e}</p>)
    });

    return (
        <div className='dd-container'>
            <button onClick={toggleDrop} className='btn'>{items[0]}</button>
            {isDropped ? <div className='dd-options'>{options}</div> : null}
        </div>
    )
}

export default Dropdown
