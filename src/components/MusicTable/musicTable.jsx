import React from 'react';
import Book from '../Song/song';

function MusicTable (props){
    return(
        <div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Album</th>
                <th scope="col">Artist</th>
                <th Scope="col">Genre</th>
                <th scope="col">Release</th>
                </tr>
            </thead>
            <tbody>
                <Song song={props.song}/>
            </tbody>
        </table>
    </div>
    );
}