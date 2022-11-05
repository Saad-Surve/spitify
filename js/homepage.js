var t = new tree();
t.initialize();
var currPlaylist = new dll();
// console.log(t.root.child[0].child[0].child[0].name,t.root.child[0].child[0].child[0].path)
currPlaylist.insert(t.root.child[0].child[0].child[0].name,t.root.child[0].child[0].child[0].path);
currPlaylist.insert(t.root.child[0].child[0].child[1].name,t.root.child[0].child[0].child[1].path);
var play = document.getElementById('play');
let currSong = currPlaylist.head;
let audioElement = new Audio(currSong.path);
function playpauseSong() {
    if (!(audioElement.paused)) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}
let progressBar = document.getElementById("progressBar");
function updateBar() {
    progressBar.value = audioElement.currentTime * 100 / audioElement.duration;
}
setInterval(updateBar, 1000);
function updateSong() {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
}
audioElement.addEventListener('ended', () => {
    currSong = currSong.next;
    audioElement.src = currSong.path;
    playpauseSong();
})
function nextSong() {
    currSong = currSong.next;
    audioElement.src = currSong.path;
    playpauseSong();
}
function prevSong() {
    if (audioElement.currentTime < 2) {
        currSong = currSong.prev;
        audioElement.src = currSong.path;
    }
    else {
        audioElement.src = currSong.path;
    }
    playpauseSong();
}