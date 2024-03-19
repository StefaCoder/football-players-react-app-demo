import axios from "axios"
import { useEffect, useState } from "react"
import PlayerDetails from "../components/PlayerDetails"
import CreatePlayerForm from "../components/CreatePlayerForm"
import Footer from '../components/Footer';
import PlayerDataContext from "../context/PlayerContext"
require('dotenv').config()

const Home = () => {
    const [data, setData] = useState([])
    const [errMsgDiv, setErrMsgDiv] = useState('')

    const fetchPlayers = () => {
        (async () => {
            try {
                const response = await axios.get(`${process.env.GET_ALL_PLAYERS_API_URL}`)
                console.log('Data successfully retrieved')
                setData(response.data)

            } catch (error) {
                console.error('The following error has occurred: ', error.message)
                setErrMsgDiv("The following error has occurred: " + error.message)
            }
        })()
    }

    useEffect(() => {
        fetchPlayers()
    }, [])


    return (
        <div className="homeContainerWrapper">
            <PlayerDataContext.Provider value={fetchPlayers}>
                <div className="homeContainer">
                    <div className="playersContainer">
                        {data && data.map(player =>
                            <PlayerDetails key={player.playerID} players={data} player={player} />
                        )}
                        {errMsgDiv && <div className="errMsgDiv">{errMsgDiv}</div>}
                    </div>
                    <CreatePlayerForm />
                </div>
                <Footer />
            </PlayerDataContext.Provider>
        </div>
    )
}

export default Home