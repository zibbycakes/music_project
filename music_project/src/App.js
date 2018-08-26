import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicFormatter from './MusicFormatter'
import {Table} from 'reactstrap'

class App extends Component {
  constructor()
  {
    super();
    this.mf = new MusicFormatter();
  }

  convertToTable() {
    this.mf.formatDB();
    console.log(this.mf.clean_db);

    this.formattedTableArray = [];
    for(let entry of this.mf.clean_db)
    {
      this.formattedTableArray.push(
        <tr key={entry.index}>
          <th scope="row">{entry.index}</th>
          <td><img src={entry.album_thumbnail}/></td>
          <td>{entry.track_title}</td>
          <td>{entry.artist_names}</td>
          <td>{entry.album_title}</td>
          <td>{entry.year}</td>
          <td>{entry.track_no}</td>
          <td>{entry.total_track}</td>
        </tr>
      )
    }
  }

  render() {
    this.convertToTable();
    return (
      <div>
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Art</th>
            <th>Track Name</th>
            <th>Artist Names</th>
            <th>Album Name</th>
            <th>Year released</th>
            <th>Track #</th>
            <th>Total tracks on album</th>
          </tr>
        </thead>
        <tbody>
          {this.formattedTableArray}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default App;
