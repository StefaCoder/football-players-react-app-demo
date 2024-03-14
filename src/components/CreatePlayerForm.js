import axios from "axios"
import { useState } from "react"
require('dotenv').config()

const CreatePlayerForm = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [role, setRole] = useState('')
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const player = { name, lastName, age, role, value }

        const response = await axios.post(`${process.env.ADD_PLAYER_API_URL}`, player)

        if (!response.ok) {
            setError('An error has occurred:', response.data.error)
        }

        if (response.ok) {
            console.log('Player added successfully')
        }
    }

    const handleReset =(e) => {
        e.preventDefault()
        setName('')
        setLastName('')
        setAge('')
        setRole('')
        setValue('')
        setError(null)
    }


    return (
        <div className="playerFormContainer">
            <form className="playerForm" onSubmit={handleSubmit}>
                <h2>Add Player</h2>
                <label>Name</label>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Last Name</label>
                <input type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label>Age</label>
                <input type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <label>Role</label>
                <input type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <label>Value</label>
                <input type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="buttonBar">
                    <button className="btnAdd">Add</button>
                    <button className="btnReset" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePlayerForm