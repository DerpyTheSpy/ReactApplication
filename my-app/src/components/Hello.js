import React from 'react';

console.log("Hello, World!");
function Hello() {
    //return (
    //    <div>
    //        <h1>Hello, Kim</h1>
    //    </div>
    //);
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello, Kim'));
}

export default Hello;