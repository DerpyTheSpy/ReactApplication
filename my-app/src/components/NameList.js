import React from 'react'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'John',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kim',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Peter',
            age: 30,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
    return <div>{personList}</div>
}

export default NameList