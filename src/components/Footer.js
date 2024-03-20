import axios from "axios"
import { useContext, useState } from "react"
import PlayerDataContext from "../context/PlayerContext"
require('dotenv').config()

const Footer = () => {
    const [error, setError] = useState('')
    const [isPlayerAdded, setIsPlayerAdded] = useState(true)
    const [isConfirmDelAllMsg, setIsConfirmDelAllMsg] = useState(false)

    const fetchAllPlayers = useContext(PlayerDataContext)


    const handleDeleteAll = (e) => {
        e.preventDefault()
        setIsConfirmDelAllMsg(true)
    }

    const handleYesAction = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.delete(`${process.env.DELETE_ALL_PLAYER_API_URL}`)
            console.log("Players deleted", response.status)
            setIsPlayerAdded(false)
            setIsConfirmDelAllMsg(false)
            fetchAllPlayers()

        }catch (error) {
            console.error('The following error has occurred: ', error.message)
            setError("Delete All failed: " + error.message)
            setIsConfirmDelAllMsg(false)
        }
    }

    const handleNoAction = (e) => {
        setIsConfirmDelAllMsg(false)
    }

    const handleDelAllIcon = (e) => {
        e.preventDefault()
        setError('')
        setIsPlayerAdded(true)
    }

    return(
        <div>
            {isConfirmDelAllMsg && 
            <div className="confirmDelAllActionDiv">
                <h4>Are you sure? <span className="material-symbols-outlined">warning</span></h4>
                <p>This action will delete all players permanently!</p>
                <button className="btnYes" onClick={handleYesAction}>YES</button>
                <button className="btnNo" onClick={handleNoAction}>NO</button>
            </div>}
            <div className="deleteAllMsgs">
            {!isPlayerAdded && <div className="noPlayersMsgDiv">No players to display <span className="material-symbols-outlined" onClick={handleDelAllIcon}>close</span></div>}
            {error && <div className="delAllMsgDiv">{error} <span className="material-symbols-outlined" onClick={handleDelAllIcon}>close</span></div>}
            </div>
            <button className="btnDelAll" onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}

export default Footer