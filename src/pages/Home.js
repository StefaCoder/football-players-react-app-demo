import axios from "axios"
import { useEffect, useState } from "react"
import PlayerDetails from "../components/PlayerDetails"
import CreatePlayerForm from "../components/CreatePlayerForm"
require('dotenv').config()

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {       
                const response = await axios.get(`${process.env.GET_ALL_PLAYERS_API_URL}`)
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
        })()
    },[])


    return(
        <div className="homeContainer">
            <div className="playersContainer">
            {data && data.map(player =>
                <PlayerDetails key={player.playerID} players={data} player={player}/>
            )}
            </div>
            <CreatePlayerForm />
        </div>
    )
}

export default Home