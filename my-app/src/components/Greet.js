import React from 'react';

//function Greet() {
//    return (
//        <div>
//            <h1>Hello, World!</h1>
//        </div>
//    );
//}

//const Greet = () => <h1>Hello, World!</h1>

//const Greet = props => {
//    console.log(props);
//    props.name = "Kim";
//    return (
//        <div>
//            <h1>Hello, {props.name} a.k.a. {props.heroName}</h1>
//            //{props.children}
//        </div>
//    );
//}

const Greet = props => {
    const { name, heroName } = props;
    return (
        <div>
            <h1>
                Hello, {name} a.k.a. {heroName}
            </h1>
        </div>
    );
}


export default Greet;