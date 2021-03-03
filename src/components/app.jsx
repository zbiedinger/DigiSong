import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';
import MusicTable from './MusicTable/musicTable';
import SearchBar from './SearchBar/searchBar';

class App extends Component { 
    constructor(props) {
        super(props);
        this.songs = [{}];
        this.state = {
          bookNumber: 0
        }
    }

    

    render() {
        return (
            <div className="container-fluid"> 
                <TitleBar />
                <SearchBar/>
                <MusicTable/>
                <Footer />
            </div>
        );
    } 
}

export default App;