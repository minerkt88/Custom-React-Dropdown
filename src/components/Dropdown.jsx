import React,{ useState } from 'react';

import arrow from './img/Keyboard-arrow-left-01.svg';
import './Dropdown.css';

const Dropdown = props => {
    const [isDropped,toggleIsDropped] = useState(false);
    const toggleDrop = () => {
        toggleIsDropped(!isDropped)
        const arrowImg = document.getElementById('arrow');
        let turn = isDropped ? '0deg' : '-90deg';
        arrowImg.setAttribute('style',`transform:rotate(${turn})`)
    };

    const options = props.items.map((e,i) => {
        return (<p key={i}>{e}</p>)
        // Maybe I was missing the bind call
        // return (<button onClick={function.bind(null,argument)}>{e}</button>)
    });

    return (
        <div className={'dd-container'}>
            <button onClick={toggleDrop} className='btn'>
                {props.items[0]}
                <img src={arrow} alt='arrow' id='arrow'/>
            </button>
            {isDropped ? <div className='dd-options'>{options}</div> : null}
        </div>
    )
}

export default Dropdown
