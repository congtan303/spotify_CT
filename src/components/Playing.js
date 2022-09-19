import React, { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from "./Context";

export default function Playing() {
    const{song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
    const handle = () => {
        handleSetSong(song.id + 1)
    }
    return (
        <div>
            <AudioPlayer
                src={song.url} className="playing__music"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext} 
                onClickPrevious={handleClickPre}
                onEnded={handle}
                
            />
        </div>

    )
}