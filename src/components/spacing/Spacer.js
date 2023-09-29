import React from 'react';

function Spacer({ height }) {
    return <div style={{ height: `${height}px` }}></div>;
}

export default Spacer;

// use this in your app.js <Spacer height={20} />   
