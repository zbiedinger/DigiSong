import React from 'react'; 
import './song.css';

function Song(props){
    return (
        <tr>
            <th scope="row">{props.song.title}</th>
            <td>{props.song.album}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.releaseDate}</td>
      </tr>
    );
}