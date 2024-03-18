import axios from "axios"
import { useContext, useState } from "react"
import PlayerDataContext from "../context/PlayerContext"
require('dotenv').config()

const PlayerDetails = ({ players, player }) => {
    const [error, setError] = useState('')
    const [isErrDivVisible, setIsErrDivVisible] = useState(false)

    const fetchAllPlayers = useContext(PlayerDataContext)


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${process.env.DELETE_PLAYER_API_URL}`+ player.playerID)
            players.filter((p) => p.playerID !== player.playerID)
            console.log("Player deleted", response.status)
            fetchAllPlayers()

        } catch (error) {
            console.error('The following error has occurred: ', error.message)
            setError("Delete failed: " + error.message)
            setIsErrDivVisible(true)
        }

    }

    const handleDelIcon = (e) => {
        e.preventDefault()
        setError('')
        setIsErrDivVisible(false)
    }

    return (
        <div className="playerCardContainer">
            <div style={(isErrDivVisible) ? { filter: 'blur(5px)'} : { filter: 'blur(0px)' }}>
                <p className="playerID">{player.playerID}</p>
                <p><strong>Name:</strong> {player.name}</p>
                <p><strong>Last Name:</strong> {player.lastName}</p>
                <p><strong>Age:</strong> {player.age}</p>
                <p><strong>Role:</strong> {player.role}</p>
                <p><strong>Value:</strong> ${player.value}</p>
                <button className="btnDelete" onClick={handleDelete}>Delete</button>
            </div>
            {error && <div className="delErrMsgDiv">{error} <span className="material-symbols-outlined" onClick={handleDelIcon}>close</span></div>}
        </div>
    )
}

export default PlayerDetails