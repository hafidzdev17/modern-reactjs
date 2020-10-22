import React from 'react'

const ListRendering = () => {
    const users = ['hafidz', 'deddy', 'azima', 'dian', 'hasyim']
    const people = [
        { id: 1, name: 'Albert', gender: 'male' },
        { id: 2, name: 'Romy', gender: 'male' },
        { id: 3, name: 'Shinta', gender: 'female' },
        { id: 4, name: 'Hendra', gender: 'male' },
        { id: 5, name: 'Fenny', gender: 'female' },
        { id: 6, name: 'Desta', gender: 'male' },

    ]

    // const displayUser = users.map((user) => <li key={user}>{user}</li>)
    // const displayPeople = people.map((people) => <li key={people.id}>
    //     {people.name}({people.gender})
    // </li>)

    // JSX Expression
    return <div>
        {/* List */}
        <ul>
            {people.length > 0 && people.map((user) => {
                const { id, name, gender } = user
                return <li key={id}> {name}({gender})  </li>
            })}
        </ul>
        <ul>
            {users.length > 0 && users.map((user) => {
                return <li> {user} </li>
            })}
        </ul>
        {/* Table */}
        <center>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {people.length > 0 && people.map((people) => {
                        const { id, name, gender } = people
                        return <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{gender}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </center>

    </div>
}

export default ListRendering
