import React from 'react'
import Player from './Player'
import players from '../players'

const PlayerList = () => {
  return (
    <div>
        {
            players.map((indplayer) =>(
                <Player name={indplayer.name} image={indplayer.image}/>
            ))
        }


    </div>
  )
}

export default PlayerList