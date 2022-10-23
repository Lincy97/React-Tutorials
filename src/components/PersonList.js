import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map( person => (
        // <h2>I am {person.name}, {person.age} years old, I know {person.skill}  </h2>
        <Person person={person} /> // Passing the person as a prop to the Person Component
    ))

    return <div>{personList}</div>

}

export default NameList