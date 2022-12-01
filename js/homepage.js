// INITIALIZIING REQUIREMENTS
var t = new tree();
t.initialize();
t.print();
var currPlaylist = new dll();
var play = document.getElementById('play-music-player');
let currSong = currPlaylist.head;
let audioElement = new Audio();
let startTime = document.getElementById("startMusic");
let endTime = document.getElementById("endMusic");
let genPlaylist = [];
let userPlaylists =[];
let liked = {
    name:"Liked Songs",
    playlist: new dll(),
};
let progressBar = document.getElementById("progressBar");
createGenrePlaylists();
function initializeAudio(){
    currSong = currPlaylist.head;
    audioElement = new Audio(currSong.path);
    playpauseSong();
}
// NAVIGATION PART

function home(){
    document.getElementById("home").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("playlists-display").style.display = "none";
    document.getElementById("liked").style.display = "none";
    document.getElementById("showUserPlaylist").style.display = "none";
    createYou();
    
}
function searchMenu(){
    document.getElementById("search-result-container").innerHTML = "";
    document.getElementById('search-text-box').value = "";
    document.getElementById("home").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("create").style.display = "none";
    document.getElementById("playlists-display").style.display = "none";
    document.getElementById("liked").style.display = "none";
    document.getElementById("showUserPlaylist").style.display = "none";
}
function createJustForYou() {
    let choices = JSON.parse(localStorage.getItem('values'));
    let genKey;
    console.log(choices);
    let justForYou = {
        name : "Just For You",
        playlist : new dll(),
    };
    choices.forEach(ele => {
        if (ele === "1") {
            genKey = 0;
        }
        else if(ele === "2"){
            genKey = 1;
        }
        else if(ele === "3"){
            genKey = 2;
        }
        else{
            genKey = 3;
        }
        for (let i = 0; i < 4; i++) {
            let artKey = Math.floor(Math.random()*t.root.child[genKey].child.length);
            let songKey = Math.floor(Math.random()*t.root.child[genKey].child[artKey].child.length);
            justForYou.playlist.insert(t.root.child[genKey].child[artKey].child[songKey].name,t.root.child[genKey].child[artKey].child[songKey].path,t.root.child[genKey].child[artKey].child[songKey].coverPath,t.root.child[genKey].child[artKey].child[songKey].coverPath.flag);
        }
    })
    userPlaylists.push(justForYou);
    createYou();
}   
// CREATE PLAYLIST PART
function createYou() {
    let youPlayContainer = document.getElementById('you-play-container');
    youPlayContainer.innerHTML = "";
    userPlaylists.forEach(play => {
        let personalPlay = document.createElement('div');
        let personalPlaylistName = document.createTextNode(play.name);
        personalPlay.append(personalPlaylistName);
        personalPlay.setAttribute("onclick","showUserPlaylist(this)");
        personalPlay.className = "personal-play";
        youPlayContainer.append(personalPlay);
    })
}
function showUserPlaylist(element){
    let clickedPlaylist = element.innerText;
    let requiredPlaylist = null;
    userPlaylists.forEach(ele =>{
        if (clickedPlaylist.toLowerCase() === ele.name.toLowerCase()) {
            requiredPlaylist = ele;
        }
    })
    document.getElementById("home").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("playlists-display").style.display = "none";
    document.getElementById("liked").style.display = "none";
    document.getElementById('showUserPlaylist').style.display = "block";
    showAnyPlaylist(requiredPlaylist,1);
    
}
function create(){
    document.getElementById("home").style.display = "none";
    document.getElementById('showUserPlaylist').style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("create").style.display = "block";
    document.getElementById("playlists-display").style.display = "none";
    document.getElementById("createPlaylistName").style.display = "flex";
    document.getElementById("liked").style.display = "none";
    let createSearchResultContainer = document.getElementById("create-search-result-container");
    createSearchResultContainer.innerHTML = "";
    document.getElementById("create-search-text-box").value = "";
    document.getElementById("userPlaylistName").value = "";
    document.getElementById("playlistName").innerText = "";
}

function createWriteSongSearch() {
    let inputText = document.getElementById("create-search-text-box").value;
    let songList = t.search(inputText);
    let createSearchResultContainer = document.getElementById("create-search-result-container");
    createSearchResultContainer.innerHTML = "";
    songList.forEach(song => {
        let add = document.createElement('i');
        add.classList = "bi bi-plus-circle";
        add.id ="add"
        add.setAttribute("onclick","addSearchedSong(this)");
        let createSearchResult = document.createElement('div');
        let createSearchSongDetails = document.createElement('div');
        let createSearchSongImg = document.createElement('div');
        let createSearchSongName = document.createElement('div');
        let createSearchSongNameText = document.createTextNode(song.name);
        createSearchSongName.append(createSearchSongNameText)
        let createSearchSongOptions = document.createElement('div');
        let coverImg = document.createElement('img');
        coverImg.src = song.coverPath;
        createSearchResult.className = "create-search-result"; 
        createSearchSongDetails.id = "create-search-song-details";
        createSearchSongImg.id = "create-search-song-img";
        createSearchSongName.id = "create-search-song-name";
        createSearchSongOptions.id = "create-search-song-options";
        createSearchResult.append(createSearchSongDetails);
        createSearchSongDetails.append(createSearchSongImg);
        createSearchSongImg.append(coverImg);
        createSearchSongDetails.append(createSearchSongName);
        createSearchResult.append(createSearchSongOptions);
        createSearchSongOptions.append(add);
        createSearchResultContainer.append(createSearchResult);
        
    });
}
function addSearchedSong(element) {
    let searchedSongName = element.parentElement.previousElementSibling.children[1].innerText;
    let playlistName = element.parentElement.previousElementSibling.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
    let requiredPlaylist = null;
    userPlaylists.forEach(playlist => {
        if (playlistName.trim().toLowerCase() ===  playlist.name.toLowerCase()) {
            requiredPlaylist = playlist;
        }
    })
        if(requiredPlaylist == null) {
            let playlist = new dll();
            
            let clickedSong = t.searchSong(searchedSongName)
            playlist.insert(clickedSong.name,clickedSong.path,clickedSong.coverPath,clickedSong.flag);
            let name = playlistName;
            userPlaylists.push({'name':name,'playlist':playlist});
        }
        else{
            let clickedSong = t.searchSong(searchedSongName)
            requiredPlaylist.playlist.insert(clickedSong.name,clickedSong.path,clickedSong.coverPath,clickedSong.flag);
        }
    console.log(userPlaylists)
}

function searchPlaylist(name) {
    let flag = 0;
    userPlaylists.forEach(playlist => {
        if (name.trim().toLowerCase() ===  playlist.name.toLowerCase()) {
            flag = 1;
            return playlist;
            return;
        }
    })
    if (flag == 0) {
        return null;
    }
}

// SHOW ANY PLAYLIST

function playAnyPlaylist(element){
    let name = element.parentElement.previousElementSibling.children[0].innerText;
    if (name == liked.name) {
        currPlaylist = liked.playlist;
        currPlaylist.reset();
        audioElement.src = "";
        initializeAudio();
    }    
    else{
        userPlaylists.forEach(ele=>{
            if (ele.name.toLowerCase() === name.toLowerCase()) {
                currPlaylist = ele.playlist;
                return;
            }
        })
        currPlaylist.reset();
        audioElement.src = "";
        initializeAudio();
    }
}
function playAnyPlaylistSong(element,name) {
    if (name === liked.name) {
        currPlaylist = liked.playlist;
    }
    let clickedSong = t.searchSong(element.parentElement.previousElementSibling.children[1].innerText);
    currPlaylist.traverse(clickedSong.name);
    audioElement.src = "";
    initializeAudio();
    currPlaylist.reset();
}


function showAnyPlaylist(obj,key) {
    let anyPlaylistItemContainer = Array.from(document.getElementsByClassName("any-playlist-container"))[key];
    let anyPlaylistName = Array.from(document.getElementsByClassName("any-playlist-name"))[key];
    anyPlaylistName.innerText = obj.name;
    console.log(anyPlaylistItemContainer);
        anyPlaylistItemContainer.innerHTML = "";
        let song = obj.playlist.head;
        do {
            
            let playButton = document.createElement('i');
            playButton.classList = "bi bi-play-fill icons";
            playButton.id = "play";
            let heartButton = document.createElement('i');
            if (t.searchSong(song.name).flag == 1) {
                heartButton.classList = "bi bi-heart-fill";
            }
            else{
                heartButton.classList = "bi bi-heart";
            }
            heartButton.id = "likedplay"
            heartButton.setAttribute("onclick","likeSongResults(this)");

            playButton.setAttribute("onclick","playAnyPlaylistSong(this,"+"'"+obj.name+"'"+")");
            let anyPlaylistItem = document.createElement('div');
            let anyPlaylistItemDetails = document.createElement('div');
            let anyPlaylistItemName = document.createElement('div');
            let anyPlaylistItemImg = document.createElement('div');
            let anyPlaylistItemNameText = document.createTextNode(song.name);
            anyPlaylistItemName.append(anyPlaylistItemNameText);
            let anyPlaylistItemOptions = document.createElement('div');
            let coverImg = document.createElement('img');
            coverImg.src = song.coverPath;
            anyPlaylistItem.className = "any-playlist-item"; 
            anyPlaylistItemDetails.className = "any-playlist-item-details";
            anyPlaylistItemName.className = "any-playlist-item-name";
            anyPlaylistItemImg.className = "any-playlist-item-img";
            anyPlaylistItemOptions.className = "any-playlist-item-options";
            anyPlaylistItem.append(anyPlaylistItemDetails);
            anyPlaylistItemDetails.append(anyPlaylistItemImg);
            anyPlaylistItemImg.append(coverImg);
            anyPlaylistItemDetails.append(anyPlaylistItemName);
            anyPlaylistItem.append(anyPlaylistItemOptions);
            anyPlaylistItemOptions.append(playButton);
            anyPlaylistItemOptions.append(heartButton);
            anyPlaylistItemContainer.append(anyPlaylistItem);
            song = song.next;

        } while (song!=obj.playlist.head);
        
}

// Liked Songs
function likeSongResults(element) {
    let clickedSong = t.searchSong(element.parentElement.previousElementSibling.children[1].innerText);
    if (clickedSong.flag == 0) {
        clickedSong.flag = 1;
        element.classList = "bi bi-heart-fill";
        liked.playlist.insert(clickedSong.name,clickedSong.path,clickedSong.coverPath,clickedSong.flag);
    }
    else{
        clickedSong.flag = 0;
        element.classList = "bi bi-heart";
        liked.playlist.deleteAtPos(clickedSong.name);
    }
}
function showLiked(){
    document.getElementById("home").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("playlists-display").style.display = "none";
    document.getElementById("liked").style.display = "block";
    document.getElementById("showUserPlaylist").style.display = "none";

    showAnyPlaylist(liked,0);
}
function showCreate(){
    document.getElementById("createPlaylistName").style.display = "none";
    let playlistName = document.getElementById('userPlaylistName').value;
    document.getElementById("playlistName").innerText = playlistName;
}
// MUSIC PLAYER PART
setInterval(endSong,900);
function endSong() {
    if (audioElement.currentTime == audioElement.duration && audioElement.loop == false) {
        nextSong();
    }
}
function loop() {
    if (audioElement.loop) {
        document.getElementById('repeat').style.color = "#ffffff"
        audioElement.loop = false;

    }
    else{
        document.getElementById('repeat').style.color = "#fdab02"
        audioElement.loop = true;
    }
}
function playpauseSong() {
    console.log(currSong.coverPath);
    if (!audioElement.loop) {
        document.getElementById('repeat').style.color = '#ffffff';
    }
    setInterval(updateBar, 1000);
    setInterval(writeStartTime, 900);
    setInterval(writeEndTime, 900);
    writeSongNameMusicPlayer();
    if (!(audioElement.paused)) {
        audioElement.pause();
        play.classList.replace("bi-pause-fill", "bi-play-fill",);
    }
    else {
        play.classList.replace("bi-play-fill", "bi-pause-fill");
        audioElement.play();

    }
}
function updateBar() {
    progressBar.value = audioElement.currentTime * 10000 / audioElement.duration;
}
function updateSong() {
    audioElement.currentTime = progressBar.value * audioElement.duration / 10000;
}

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
function writeStartTime() {
    let time = parseInt(audioElement.currentTime);
    let minutes = parseInt(time / 60);
    let seconds = time - minutes * 60;
    document.getElementById("startMusic").innerText = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ":" + seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}
function writeEndTime() {
    let time = parseInt(audioElement.duration);
    let minutes = parseInt(time / 60);
    let seconds = time - minutes * 60;
    document.getElementById("endMusic").innerText = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ":" + seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}
function writeSongNameMusicPlayer() {
    document.getElementById("songNameContainer").innerText = currSong.name;
    document.getElementById("songCoverImage").setAttribute("src", currSong.coverPath);
}

// SEARCHBAR PART

function writeSongSearch() {
    let inputText = document.getElementById("search-text-box").value;
    let songList = t.search(inputText);
    let searchResultContainer = document.getElementById("search-result-container");
    searchResultContainer.innerHTML = "";
    songList.forEach(song => {
        let playButton = document.createElement('i');
        playButton.classList = "bi bi-play-fill icons";
        playButton.id = "play";

        let heartButton = document.createElement('i');
        if (song.flag == 1) {
            heartButton.classList = "bi bi-heart-fill";
        }
        else{
            heartButton.classList = "bi bi-heart";
        }
        heartButton.id = "likedSearch";
        heartButton.setAttribute("onclick","likeSongResults(this)");
        playButton.setAttribute("onclick","playSearchedSong(this)");
        let searchResult = document.createElement('div');
        let searchSongDetails = document.createElement('div');
        let searchSongImg = document.createElement('div');
        let searchSongName = document.createElement('div');
        let searchSongNameText = document.createTextNode(song.name);
        searchSongName.append(searchSongNameText)
        let searchSongOptions = document.createElement('div');
        let coverImg = document.createElement('img');
        coverImg.src = song.coverPath;
        searchResult.className = "search-result"; 
        searchSongDetails.id = "search-song-details";
        searchSongImg.id = "search-song-img";
        searchSongName.id = "search-song-name";
        searchSongOptions.id = "search-song-options";
        searchResult.append(searchSongDetails);
        searchSongDetails.append(searchSongImg);
        searchSongImg.append(coverImg);
        searchSongDetails.append(searchSongName);
        searchResult.append(searchSongOptions);
        searchSongOptions.append(playButton);
        searchSongOptions.append(heartButton);
        searchResultContainer.append(searchResult);
        
    });
}
function playSearchedSong(searchResult) {
    let clickedSong = t.searchSong(searchResult.parentElement.previousElementSibling.children[1].innerText);
    currPlaylist = null;
    currPlaylist = new dll();
    currPlaylist.insert(clickedSong.name,clickedSong.path,clickedSong.coverPath,clickedSong.flag,clickedSong.flag);
    audioElement.src = "";
    audioElement.pause();
       initializeAudio();
}

// PLAYLIST PART
function createGenrePlaylists(){
    let pop = new dll();
    t.root.child[0].child.forEach(artists =>{
        artists.child.forEach(song =>{
            pop.insert(song.name,song.path,song.coverPath,song.flag);
        })
    })
    
    let rap = new dll();
    t.root.child[1].child.forEach(artists =>{
        artists.child.forEach(song =>{
            rap.insert(song.name,song.path,song.coverPath,song.flag);
        })
    })
    
    let classical = new dll();
    t.root.child[2].child.forEach(artists =>{
        artists.child.forEach(song =>{
            classical.insert(song.name,song.path,song.coverPath,song.flag);
        })
    })
    
    let edm = new dll();
    t.root.child[3].child.forEach(artists =>{
        artists.child.forEach(song =>{
            edm.insert(song.name,song.path,song.coverPath,song.flag);
        })
    })
    genPlaylist.push(pop);
    genPlaylist.push(rap);
    genPlaylist.push(classical);
    genPlaylist.push(edm);
    
}
function writeSongPlaylist(genKey) {
    createGenrePlaylists();
    let playlistItemContainer = document.getElementById("playlist-container");
        playlistItemContainer.innerHTML = "";
        genPlaylist[genKey].reset();
        let song = genPlaylist[genKey].head;
        do {
            
            let playButton = document.createElement('i');
            playButton.classList = "bi bi-play-fill icons";
            playButton.id = "play";
            let heartButton = document.createElement('i');
            if (t.searchSong(song.name).flag == 1) {
                heartButton.classList = "bi bi-heart-fill";
            }
            else{
                heartButton.classList = "bi bi-heart";
            }
            heartButton.id = "likedplay"
            heartButton.setAttribute("onclick","likeSongResults(this)");

            playButton.setAttribute("onclick","playPlaylistSong(this)");
            let playlistItem = document.createElement('div');
            let playlistItemDetails = document.createElement('div');
            let playlistItemImg = document.createElement('div');
            let playlistItemName = document.createElement('div');
            let playlistItemNameText = document.createTextNode(song.name);
            playlistItemName.append(playlistItemNameText);
            let playlistItemOptions = document.createElement('div');
            let coverImg = document.createElement('img');
            coverImg.src = song.coverPath;
            playlistItem.className = "playlist-item"; 
            playlistItemDetails.id = "playlist-item-details";
            playlistItemImg.id = "playlist-item-img";
            playlistItemName.id = "playlist-item-name";
            playlistItemOptions.id = "playlist-item-options";
            playlistItem.append(playlistItemDetails);
            playlistItemDetails.append(playlistItemImg);
            playlistItemImg.append(coverImg);
            playlistItemDetails.append(playlistItemName);
            playlistItem.append(playlistItemOptions);
            playlistItemOptions.append(playButton);
            playlistItemOptions.append(heartButton);
            playlistItemContainer.append(playlistItem);
            song = song.next;
        } while (song!=genPlaylist[genKey].head);
        
    
}
function selectGenPlaylist(genElement){
    let genreName = genElement.parentElement.id;
    let genKey;
    if (genreName === "Pop") {
        genKey = 0;
    }else if(genreName === "Rap"){
        genKey = 1;
    }
    else if(genreName === "Classical"){
        genKey = 2;
    }
    else if(genreName === "EDM"){
        genKey = 3;
    }
    document.getElementById("playlist-cover").src = "../assets/"+genreName.toLowerCase()+".jpg";
    document.getElementById("playlist-name").innerText = genreName;
    document.getElementById("home").style.display = "none";
    document.getElementById("search").style.display = "none";
    // document.getElementById("liked").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("playlists-display").style.display = "block";
    writeSongPlaylist(genKey);
}
function playPlaylist(element) {
    let genre = element.parentElement.previousElementSibling.children[1].innerHTML;
    let genKey;
    if (genre === "Pop") {
        genKey = 0;
    }else if(genre === "Rap"){
        genKey = 1;
    }
    else if(genre === "Classical"){
        genKey = 2;
    }
    else if(genre === "EDM"){
        genKey = 3;
    }
    currPlaylist = genPlaylist[genKey];
    currPlaylist.reset();
    audioElement.src = "";
    initializeAudio();

}
function playPlaylistSong(element){
    let clickedSong = t.searchSong(element.parentElement.previousElementSibling.children[1].innerText);
    let genre = clickedSong.parent.parent.name;
    let genKey;
    if (genre === "Pop") {
        genKey = 0;
    }else if(genre === "Rap"){
        genKey = 1;
    }
    else if(genre === "Classical"){
        genKey = 2;
    }
    else if(genre === "EDM"){
        genKey = 3;
    }
    currPlaylist = genPlaylist[genKey];
    currPlaylist.traverse(clickedSong.name);
    audioElement.src = "";
    initializeAudio();
    currPlaylist.reset();
}
