
const PlayerDetails = ( {players, player} ) => {

    return(
        <div className="playerCardContainer">
            <p><strong>Name:</strong> {player.name}</p>
            <p><strong>Last Name:</strong> {player.lastName}</p>
            <p><strong>Age:</strong> {player.age}</p>
            <p><strong>Role:</strong> {player.role}</p>
            <p><strong>Value:</strong> ${player.value}</p>
            <button className="btnDelete">Delete</button>
        </div>
    )
}

export default PlayerDetails