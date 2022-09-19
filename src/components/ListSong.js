import { useContext, useState, useEffect} from "react"
import { Songs } from "./Context";

export default function ListSong() {

    const { DataSongs, song, handleSetSong } = useContext(Songs);
    const [idSong, setidSong] = useState(0)
    const handlePlaySong = (idSong) => {
        // setidSong(idSong)
        setidSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setidSong(song.id)
      }, [song])
    return (
        <div className="list__song">
            <table className="list__song list__song-table">
                <thead className="list__song-table--heading">
                    <tr>
                        <th className="list__song-table--text-center width">#</th>
                        <th className="list__song-table--text-left">Title</th>
                        <th className="list__song-table--text-center">Author</th>
                        <th className="list__song-table--text-center ">
                            <i class="fas fa-download"></i>
                        </th>
                    </tr>
                </thead>
                <tbody className="list__song-tbody">
                    {DataSongs.map((song, index) => (
                            <tr
                                key={index}
                                className={`list__song-table--body ${idSong === song.id ? 'active' : '' }`}
                                onClick={() => handlePlaySong(song.id)}
                            >
                                <td className="list__song-table--text-center width " >{index + 1}</td>
                                <td className="list__song-table--text-left">{song.name}</td>
                                <td className="list__song-table--text-center">{song.author}</td>
                                <td className="list__song-table--text-center width">
                                    <a href={song.url}><i class="fas fa-download"></i></a>
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    )
}