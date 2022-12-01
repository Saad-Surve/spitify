class Node {
    constructor() {
        this.name = "";
        this.child = [];
        this.parent = null;
    }
}
class SongNode {
    constructor() {
        this.name = "";
        this.path = "";
        this.flag = 0;
        this.coverPath = "";
        this.parent = null;
    }
}
class tree {
    constructor() {
        this.root = null;

    }

    insertGenre(name) {
        let genNode = new Node();
        genNode.name = name;
        genNode.parent = this.root;
        this.root.child.push(genNode);
    }
    insertArtist(name, key) {
        let artNode = new Node();
        artNode.name = name;
        artNode.parent = this.root.child[key];
        this.root.child[key].child.push(artNode);
    }
    insertSong(name, path, coverPath, artKey, genKey) {
        let songNode = new SongNode();
        songNode.name = name;
        songNode.path = path;
        songNode.coverPath = coverPath;
        songNode.parent = this.root.child[genKey].child[artKey];
        this.root.child[genKey].child[artKey].child.push(songNode);
    }
    search(name) {
        let q = [];
        this.root.child.forEach(genre => {
            genre.child.forEach(artist => {
                artist.child.forEach(song => {
                    if (song.name.toLowerCase().startsWith(name)) {
                        q.push(song);
                    }
                });
            });
        });
        q.forEach(element => {
            console.log(element.name);
            console.log(element.path);
        });
        return q;
    }
    searchSong(name){
        let reqSong;
        this.root.child.forEach(genre => {
            genre.child.forEach(artist => {
                artist.child.forEach(song => {
                    if (song.name.toLowerCase()===name.toLowerCase()) {
                        reqSong = song;
                    }
                });
            });
        });
        return reqSong;
    }
    print(){
        console.log(this.root);
    }
    initialize() {
        t.root = new Node();
        t.insertGenre("Pop");
        t.insertGenre("Rap");
        t.insertGenre("Classical");
        t.insertGenre("EDM");

        t.insertArtist("Ed Sheeran", 0);
        t.insertArtist("Taylor Swift", 0);
        t.insertArtist("Charlie Puth", 0);
        t.insertArtist("Arijit Singh", 0);

        t.insertArtist("Honey Singh", 1);
        t.insertArtist("Baadshah", 1);
        t.insertArtist("Pitbull", 1);
        t.insertArtist("Eminem", 1);
        
        t.insertArtist("Lata Mangeshkar", 2);
        t.insertArtist("Asha Bhosale", 2);
        t.insertArtist("Elton John", 2);
        t.insertArtist("Shafaqat Amanat Ali", 2);

        t.insertArtist("Elle Goulding", 3);
        t.insertArtist("Avicii", 3);
        t.insertArtist("Marshmello", 3);
        t.insertArtist("Alan Walker", 3);
        

        t.insertSong("Thinking out Loud", "../assets/music/Thinking out Loud.mp3", "../assets/cover/Thinking out Loud.jpg", 0, 0);
        t.insertSong("Perfect", "../assets/music/Perfect.mp3", "../assets/cover/Perfect.jpg", 0, 0);
        t.insertSong("Bad Habits", "../assets/music/Bad Habits.mp3", "../assets/cover/Bad Habits.jpg", 0, 0);
        t.insertSong("Shivers", "../assets/music/Shivers.mp3", "../assets/cover/Shivers.jpg", 0, 0);
        t.insertSong("All Too Well", "../assets/music/All Too Well.mp3", "../assets/cover/All Too Well.jpg", 1, 0);
        t.insertSong("Lover", "../assets/music/Lover.mp3", "../assets/cover/Lover.jpg", 1, 0);
        t.insertSong("I Don't Wanna Live Forever", "../assets/music/I Don't Wanna Live Forever.mp3", "../assets/cover/I Don't Wanna Live Forever.jpg", 1, 0);
        t.insertSong("ME!", "../assets/music/ME!.mp3", "../assets/cover/ME!.jpg", 1, 0);
        t.insertSong("Attention", "../assets/music/Attention.mp3", "../assets/cover/Attention.jpg", 2, 0);
        t.insertSong("Light Switch", "../assets/music/Light Switch.mp3", "../assets/cover/Light Switch.jpg", 2, 0);
        t.insertSong("We Don't Talk Anymore", "../assets/music/We Don't Talk Anymore.mp3", "../assets/cover/We Don't Talk Anymore.jpg", 2, 0);
        t.insertSong("See You Again", "../assets/music/See You Again.mp3", "../assets/cover/See You Again.jpg", 2, 0);
        t.insertSong("Milne Hai Mujhse Aayi", "../assets/music/Milne Hai Mujhse Aayi.mp3", "../assets/cover/Milne Hai Mujhse Aayi.jpg", 3, 0);
        t.insertSong("Humdard", "../assets/music/Humdard.mp3", "../assets/cover/Humdard.jpg", 3, 0);
        t.insertSong("Ae Dil Hai Mushkil", "../assets/music/Ae Dil Hai Mushkil.mp3", "../assets/cover/Ae Dil Hai Mushkil.jpg", 3, 0);
        t.insertSong("Tum Hi Ho", "../assets/music/Tum Hi Ho.mp3", "../assets/cover/Tum Hi Ho.jpg", 3, 0);
        t.insertSong("Blue Eyes", "../assets/music/Blue Eyes.mp3", "../assets/cover/Blue Eyes.jpg", 0, 1);
        t.insertSong("Brown Rang", "../assets/music/Brown Rang.mp3", "../assets/cover/Brown Rang.jpg", 0, 1);
        t.insertSong("High Heels", "../assets/music/High Heels.mp3", "../assets/cover/High Heels.jpg", 0, 1);
        t.insertSong("Dope Shope", "../assets/music/Dope Shope.mp3", "../assets/cover/Dope Shope.jpg", 0, 1);
        t.insertSong("DJ Waley Babu", "../assets/music/DJ Waley Babu.mp3", "../assets/cover/DJ Waley Babu.jpg", 1, 1);
        t.insertSong("Mercy", "../assets/music/Mercy.mp3", "../assets/cover/Mercy.jpg", 1, 1);
        t.insertSong("Bachpan Ka Pyaar", "../assets/music/Bachpan Ka Pyaar.mp3", "../assets/cover/Bachpan Ka Pyaar.jpg", 1, 1);
        t.insertSong("Kala Chasma", "../assets/music/Kala Chasma.mp3", "../assets/cover/Kala Chasma.jpg", 1, 1);
        t.insertSong("Give Me Everything", "../assets/music/Give Me Everything.mp3", "../assets/cover/Give Me Everything.jpg", 2, 1);
        t.insertSong("Timber", "../assets/music/Timber.mp3", "../assets/cover/Timber.jpg", 2, 1);
        t.insertSong("I Know You Want Me", "../assets/music/I Know You Want Me.mp3", "../assets/cover/I Know You Want Me.jpg", 2, 1);
        t.insertSong("I Like it", "../assets/music/I Like it.mp3", "../assets/cover/I Like it.jpg", 2, 1);
        t.insertSong("Rap God", "../assets/music/Rap God.mp3", "../assets/cover/Rap God.jpg", 3, 1);
        t.insertSong("The Ringer", "../assets/music/The Ringer.mp3", "../assets/cover/The Ringer.jpg", 3, 1);
        t.insertSong("Stay Wide Awake", "../assets/music/Stay Wide Awake.mp3", "../assets/cover/Stay Wide Awake.jpg", 3, 1);
        t.insertSong("Without Me", "../assets/music/Without Me.mp3", "../assets/cover/Without Me.jpg", 3, 1);
        t.insertSong("Raina Beeti Jaye", "../assets/music/Raina Beeti Jaye.mp3", "../assets/cover/Raina Beeti Jaye.jpg", 0, 2);
        t.insertSong("Naino Mei Bhadra Chhaye", "../assets/music/Naino Mei Bhadra Chhaye.mp3", "../assets/cover/Naino Mei Bhadra Chhaye.jpg", 0, 2);
        t.insertSong("Mohe Panghat Pe", "../assets/music/Mohe Panghat Pe.mp3", "../assets/cover/Mohe Panghat Pe.jpg", 0, 2);
        t.insertSong("Jaiye Humse Khafa ho Jaiye", "../assets/music/Jaiye Humse Khafa ho Jaiye.mp3", "../assets/cover/Jaiye Humse Khafa ho Jaiye.jpg", 0, 2);
        t.insertSong("In Aankhon Ki Masti", "../assets/music/In Aankhon Ki Masti.mp3", "../assets/cover/In Aankhon Ki Masti.jpg", 1, 2);
        t.insertSong("Piya Bawri Piya Bawri", "../assets/music/Piya Bawri Piya Bawri.mp3", "../assets/cover/Piya Bawri Piya Bawri.jpg", 1, 2);
        t.insertSong("Jhoothe Naina", "../assets/music/Jhoothe Naina.mp3", "../assets/cover/Jhoothe Naina.jpg", 1, 2);
        t.insertSong("Bheeni Bheeni Bhor", "../assets/music/Bheeni Bheeni Bhor.mp3", "../assets/cover/Bheeni Bheeni Bhor.jpg", 1, 2);
        t.insertSong("Your Song", "../assets/music/Your Song.mp3", "../assets/cover/Your Song.jpg", 2, 2);
        t.insertSong("Candle In The Wind", "../assets/music/Candle In The Wind.mp3", "../assets/cover/Candle In The Wind.jpg", 2, 2);
        t.insertSong("Don't Go Breaking My Heart", "../assets/music/Don't Go Breaking My Heart.mp3", "../assets/cover/Don't Go Breaking My Heart.jpg", 2, 2);
        t.insertSong("Rocket Man", "../assets/music/Rocket Man.mp3", "../assets/cover/Rocket Man.jpg", 2, 2);
        t.insertSong("Zindagi Se", "../assets/music/Zindagi Se.mp3", "../assets/cover/Zindagi Se.jpg", 3, 2);
        t.insertSong("Teri Jhuki Nazar", "../assets/music/Teri Jhuki Nazar.mp3", "../assets/cover/Teri Jhuki Nazar.jpg", 3, 2);
        t.insertSong("Mitwa", "../assets/music/Mitwa.mp3", "../assets/cover/Mitwa.jpg", 3, 2);
        t.insertSong("Bin Tere", "../assets/music/Bin Tere.mp3", "../assets/cover/Bin Tere.jpg", 3, 2);
        t.insertSong("On My Mind", "../assets/music/On My Mind.mp3", "../assets/cover/On My Mind.jpg", 0, 3);
        t.insertSong("Burn", "../assets/music/Burn.mp3", "../assets/cover/Burn.jpg", 0, 3);
        t.insertSong("Love Me Like You Do", "../assets/music/Love Me Like You Do.mp3", "../assets/cover/Love Me Like You Do.jpg", 0, 3);
        t.insertSong("Lights", "../assets/music/Lights.mp3", "../assets/cover/Lights.jpg", 0, 3);
        t.insertSong("The Nights", "../assets/music/The Nights.mp3", "../assets/cover/The Nights.jpg", 1, 3);
        t.insertSong("Wake Me Up", "../assets/music/Wake Me Up.mp3", "../assets/cover/Wake Me Up.jpg", 1, 3);
        t.insertSong("I Could Be The One", "../assets/music/I Could Be The One.mp3", "../assets/cover/I Could Be The One.jpg", 1, 3);
        t.insertSong("Levels", "../assets/music/Levels.mp3", "../assets/cover/Levels.jpg", 1, 3);
        t.insertSong("Alone", "../assets/music/Alone.mp3", "../assets/cover/Alone.jpg", 2, 3);
        t.insertSong("Alone Part2", "../assets/music/Alone Part2.mp3", "../assets/cover/Alone Part2.jpg", 2, 3);
        t.insertSong("On My Way", "../assets/music/On My Way.mp3", "../assets/cover/On My Way.jpg", 2, 3);
        t.insertSong("Faded", "../assets/music/Faded.mp3", "../assets/cover/Faded.jpg", 2, 3);
        t.insertSong("Fly", "../assets/music/Fly.mp3", "../assets/cover/Fly.jpg", 3, 3);
        t.insertSong("Happier", "../assets/music/Happier.mp3", "../assets/cover/Happier.jpg", 3, 3);
        t.insertSong("Wolves", "../assets/music/Wolves.mp3", "../assets/cover/Wolves.jpg", 3, 3);
        t.insertSong("Friends", "../assets/music/Friends.mp3", "../assets/cover/Friends.jpg", 3, 3);
    }
}

