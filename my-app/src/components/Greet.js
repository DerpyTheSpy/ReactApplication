import React from 'react';

//function Greet() {
//    return (
//        <div>
//            <h1>Hello, World!</h1>
//        </div>
//    );
//}

//const Greet = () => <h1>Hello, World!</h1>

const Greet = props => {
    console.log(props);
    //props.name = "Kim";
    return (
        <div>
            <h1>Hello, {props.name} a.k.a. {props.heroName}</h1>
            {props.children}
        </div>
    );
}

export default Greet;