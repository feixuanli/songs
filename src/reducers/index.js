import { combineReducers } from 'redux';

// songlist reducer
const songsReducer = () => {
    return [
        {title: 'no scrubs', duration: '4:05'},
        {title: 'no macarena', duration: '2:20'},
        {title: 'All star', duration: '3:15'},
        {title: 'I want it that way', duration: '1:45'},
    ];
}

// selected song reducer 
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});

