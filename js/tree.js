class Node {
    constructor() {
        this.name = "";
        this.path = "";
        this.child = [];
        this.rating = 0;
    }
}
class tree {
    constructor() {
        this.root = null;
    
    }

    insertGenre(name){
        let genNode = new Node();
        genNode.name = name;

        this.root.child.push(genNode);
    }
    insertArtist(name,key){
        let artNode = new Node();
        artNode.name = name;
        this.root.child[key].child.push(artNode);
    }
    insertSong(name,path,artKey,genKey){
        let songNode = new Node();
        songNode.name = name;
        songNode.path = path;
        this.root.child[genKey].child[artKey].child.push(songNode);
    }
    getRoot() {
        return this.root;
    }
    preorder(node) {
        if (node != null) {
            console.log(node.name);
            console.log(node.path);
           node.child.forEach(element => {
                this.preorder(element);
           });
        }
    }
    search(name){
       let q = [];
       this.root.child.forEach(genre => {
           genre.child.forEach(artist => {
                artist.child.forEach(song => {
                    if (song.name.startsWith(name)) {
                        q.push(song);
                    }
                });
           });
       });
       q.forEach(element => {
            console.log(element.name);
            console.log(element.path);
       });
    }
    initialize(){
        t.root = new Node(); 
        t.insertGenre("pop");
t.insertArtist("ed",0);
t.insertSong("shivers","../assets/music/test.wav",0,0);
t.insertSong("lehra do","../assets/music/Lehra Do.mp3",0,0);
t.insertSong("sh","../",0,0);
t.insertGenre("rap");
t.insertArtist("yoyo",1);
t.insertSong("blue eyes","./",0,1);
t.insertSong("so",".",0,1);
// t.preorder(t.root);

    }
}

