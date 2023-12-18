const musicContainer = document.querySelector('.music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const cover = document.querySelector('#cover');

// Song Titles & Authors
const songs = [
  {
    img: 'coverimages/1.jpg',
    title: 'Ride My Bike',
    author: 'Dave Nelson',
    music: 'songs/Dave Nelson - Ride My Bike.mp3'
  },
  {
    img: 'coverimages/2.jpg',
    title: 'Woods',
    author: 'Hawkin',
    music: 'songs/Hawkin - Woods.mp3'
  },
  {
    img: 'coverimages/3.jpg',
    title: 'Partisian Song',
    author: 'Il Sogno Del Marinaio',
    music: 'songs/Il Sogno Del Marinaio - Partisian Song.mp3'
  },
  {
    img: 'coverimages/4.jpg',
    title: 'Circus',
    author: 'Portron Lopez',
    music: 'songs/Portron Portron Lopez - Circus.mp3'
  },
  {
    img: 'coverimages/5.jpg',
    title: 'Slinky',
    author: 'Robert John',
    music: 'songs/Robert John - Slinky.mp3'
  },
  {
    img: 'coverimages/6.jpg',
    title: 'Shenandoah',
    author: 'SalmonLikeTheFish',
    music: 'songs/SalmonLikeTheFish - Shenandoah.mp3'
  },
]


// Keep track of songs
let songIndex = 1;

// Initally load song info into DOM

loadSong(songIndex)


function loadSong(songIndex) {
  title.innerText = songs[songIndex].title;
  author.innerText = songs[songIndex].author
  audio.src = songs[songIndex].music;
  cover.src = songs[songIndex].img;
}
