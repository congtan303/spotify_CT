
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './components/Context';
import DataSongs from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  //tạo biến bài hát với giá trị ban đầu bằng 0
  const [song, setSong] = useState(DataSongs[0])

  // hàm khởi tạo bài hát theo id
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)

    // nếu bài hát previous hết thì setSong(DataSongs[0])
    if(!song) {
      setSong(DataSongs[0] )
     }
           
           
    else {
      setSong(song)
    }
           
    
  }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className="Song__Screen">
          <DetailSong />  
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
