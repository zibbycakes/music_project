import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './spotify_api_results.json';

class MusicFormatter {
    constructor(){
        //super();
        this.i = 0;
        this.first = db.items[0];
        this.clean_db = [];
    }

    formatDB()
    {
        var index =0;
        var clean_entry = {index:0, track_title:'',album_title:'',album_thumbnail:'',artist_names:'',year:'',total_track:'',track_no:''};
        for(let entry of db.items) {
            //console.log(track);
            clean_entry = {index, track_title:'',album_title:'',album_thumbnail:'',artist_names:'',year:'',total_track:'',track_no:''};
            clean_entry.track_title = entry.track.name;
            clean_entry.track_no = entry.track.track_number;
            clean_entry.album_title = entry.track.album.name;
            clean_entry.total_track = entry.track.album.total_tracks;

            clean_entry.album_thumbnail = entry.track.album.images[1].url;

            clean_entry.year = entry.track.album.release_date.substring(0,4);

            var temp_artists = "";
            for(let artist of entry.track.artists)
            {
                temp_artists += artist.name + ", ";
            }
            clean_entry.artist_names = temp_artists.substring(0, temp_artists.length-2);

            this.clean_db.push(clean_entry);
            index++;
        }
    }
}
export default MusicFormatter;