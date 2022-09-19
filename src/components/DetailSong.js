
import { Songs } from './Context'
import { useContext } from 'react'
export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className="detail__song">
            <div className="detail__song detail__title">
                <h2 className="detail__song-title">{song.name}</h2>
                <h2 className="detail__song-name">Sing me to sleep</h2>
            </div>

            <div className="detail__song-description">
                <div className="detail__song-description--abc">
                    <div className="detail__song-logo">
                        <img src={song.links.images[0].url} className="detail__song-logo1" />
                    </div>

                    <div className="detail__song-infomation">
                        <div className="detail__song-avatar">
                            <img src={song.links.images[1].url} className="detail__song-avatar2" />
                        </div>

                        <div className="detail__song-artist">
                            Alan Walker
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}