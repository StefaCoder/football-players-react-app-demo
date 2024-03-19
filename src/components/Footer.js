import axios from "axios"
import { useContext, useState } from "react"
import PlayerDataContext from "../context/PlayerContext"
require('dotenv').config()

const Footer = () => {
    const [error, setError] = useState('')
    const [isPlayerAdded, setIsPlayerAdded] = useState(true)

    const fetchAllPlayers = useContext(PlayerDataContext)


    const handleDeleteAll = async (e) => {
        e.preventDefault()
        
        try{
            const response = await axios.delete(`${process.env.DELETE_ALL_PLAYER_API_URL}`)
            console.log("Players deleted", response.status)
            setIsPlayerAdded(false)
            fetchAllPlayers()

        }catch (error) {
            console.error('The following error has occurred: ', error.message)
            setError("Delete All failed: " + error.message)
        }
    }

    const handleDelAllIcon = (e) => {
        e.preventDefault()
        setError('')
        setIsPlayerAdded(true)
    }

    return(
        <div>
            <div className="deleteAllMsgs">
            {!isPlayerAdded && <div className="noPlayersMsgDiv">No players to display <span className="material-symbols-outlined" onClick={handleDelAllIcon}>close</span></div>}
            {error && <div className="delAllMsgDiv">{error} <span className="material-symbols-outlined" onClick={handleDelAllIcon}>close</span></div>}
            </div>
            <button className="btnDelAll" onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}

export default Footer