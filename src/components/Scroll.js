import React from 'react';


const Scroll = (props) => {

    return (
    <div style={{overflowY: 'scroll', border: '4px solid #6aec6a', height: '700px'}}>
        { props.children }
    </div>
    )
}

export default Scroll;