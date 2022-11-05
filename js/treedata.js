class Node {
    constructor() {
        this.name = "";
        this.path = "";
        this.first = null;
        this.second = null;
        this.third = null;
        this.fourth = null;
    }
}
class tree {
    constructor() {
        this.root = null;
    }
    initialize() {
        this.root = new Node();
        this.root.name = "Genre";
        this.root.first = new Node();
        this.root.first.name = "Pop";
        this.root.first.first = new Node();
        this.root.first.first.name = "Ed Sheeran"
        this.root.first.first.first = new Node();
        this.root.first.first.first.name = "Thinking Out Loud";
        this.root.first.first.first.path = "../assets/music/Thinking Out Loud.mp3";
        this.root.first.first.second = new Node();
        this.root.first.first.second.name = "Perfect";
        this.root.first.first.second.path = "../assets/music/Perfect.mp3";
        this.root.first.first.third = new Node();
        this.root.first.first.third.name = "Bad Habits";
        this.root.first.first.third.path = "../assets/music/Bad Habits.mp3";
        this.root.first.first.fourth = new Node();
        this.root.first.first.fourth.name = "Shivers";
        this.root.first.first.fourth.path = "../assets/music/Shivers.mp3";
        this.root.first.second = new Node();
        this.root.first.second.name = "Taylor Swift";
        this.root.first.second.first = new Node();
        this.root.first.second.first.name = "All Too Well";
        this.root.first.second.first.path = "../assets/music/Thinking Out Loud.mp3";
        this.root.first.second.second = new Node();
        this.root.first.second.second.name = "Lover";
        this.root.first.second.second.path = "../assets/music/Perfect.mp3";
        this.root.first.second.third = new Node();
        this.root.first.second.third.name = "I Don't Wanna Live Forever";
        this.root.first.second.third.path = "../assets/music/Bad Habits.mp3";
        this.root.first.second.fourth = new Node();
        this.root.first.second.fourth.name = "ME!";
        this.root.first.second.fourth.path = "../assets/music/Shivers.mp3";
        this.root.first.third  = new Node();
        this.root.first.third.name  = "Charlie Puth";
        this.root.first.third.first = new Node();
        this.root.first.third.first.name = "Attention";
        this.root.first.third.first.path = "../assets/music/Thinking Out Loud.mp3";
        this.root.first.third.second = new Node();
        this.root.first.third.second.name = "Light Switch";
        this.root.first.third.second.path = "../assets/music/Perfect.mp3";
        this.root.first.third.third = new Node();
        this.root.first.third.third.name = "We Don't Talk Anymore";
        this.root.first.third.third.path = "../assets/music/Bad Habits.mp3";
        this.root.first.third.fourth = new Node();
        this.root.first.third.fourth.name = "See You Again";
        this.root.first.third.fourth.path = "../assets/music/Shivers.mp3";
        this.root.first.fourth  = new Node();
        this.root.first.fourth.name  = "Arijit Singh";
        this.root.first.fourth.first = new Node();
        this.root.first.fourth.first.name = "Milne Hai Mujhse Aayi";
        this.root.first.fourth.first.path = "../assets/music/Thinking Out Loud.mp3";
        this.root.first.fourth.second = new Node();
        this.root.first.fourth.second.name = "Humdard";
        this.root.first.fourth.second.path = "../assets/music/Perfect.mp3";
        this.root.first.fourth.third = new Node();
        this.root.first.fourth.third.name = "Phir Bhi Tumko Chahunga";
        this.root.first.fourth.third.path = "../assets/music/Bad Habits.mp3";
        this.root.first.fourth.fourth = new Node();
        this.root.first.fourth.fourth.name = "Tum Hi Ho";
        this.root.first.fourth.fourth.path = "../assets/music/Shivers.mp3";
        this.root.second = new Node();
        this.root.second.name = "rap";
        this.root.second.first = new Node();
        this.root.second.first.name = "Honey Singh";
        this.root.second.first.first = new Node();
        this.root.second.first.first.name = "Blue Eyes";
        this.root.second.first.first.path = "";
        this.root.second.first.second  = new Node();
        this.root.second.first.second.name = "Brown Rang";
        this.root.second.first.second.path = "";
        this.root.second.first.third = new Node();
        this.root.second.first.third.name = "High Heels";
        this.root.second.first.third.path = "";
        this.root.second.first.fourth = new Node();
        this.root.second.first.fourth.name = "Dope Shope";
        this.root.second.first.fourth.path = "";
        this.root.second.second = new Node();
        this.root.second.second.name = "Baadshah";
        this.root.second.second.first = new Node();
        this.root.second.second.first.name = "DJ Waley Babu";
        this.root.second.second.first.path = "";
        this.root.second.second.second  = new Node();
        this.root.second.second.second.name = "Mercy";
        this.root.second.second.second.path = "";
        this.root.second.second.third = new Node();
        this.root.second.second.third.name = "Bachpan Ka Pyaar";
        this.root.second.second.third.path = "";
        this.root.second.second.fourth = new Node();
        this.root.second.second.fourth.name = "Kala Chasma";
        this.root.second.second.fourth.path = "";
        this.root.second.third = new Node();
        this.root.second.third.name = "PitBUll";
        this.root.second.third.first = new Node();
        this.root.second.third.first.name = "Give Me Everything";
        this.root.second.third.first.path = "";
        this.root.second.third.second  = new Node();
        this.root.second.third.second.name = "Timber";
        this.root.second.third.second.path = "";
        this.root.second.third.third = new Node();
        this.root.second.third.third.name = "I Know You Want Me";
        this.root.second.third.third.path = "";
        this.root.second.third.fourth = new Node();
        this.root.second.third.fourth.name = "I Like it";
        this.root.second.third.fourth.path = "";
        this.root.second.fourth = new Node();
        this.root.second.fourth.name = "Eminem";
        this.root.second.fourth.first = new Node();
        this.root.second.fourth.first.name = "Rap God";
        this.root.second.fourth.first.path = "";
        this.root.second.fourth.second  = new Node();
        this.root.second.fourth.second.name = "The Ringer";
        this.root.second.fourth.second.path = "";
        this.root.second.fourth.third = new Node();
        this.root.second.fourth.third.name = "Stay Wide Awake";
        this.root.second.fourth.third.path = "";
        this.root.second.fourth.fourth = new Node();
        this.root.second.fourth.fourth.name = "Without Me";
        this.root.second.fourth.fourth.path = "";
        this.root.third = new Node();
        this.root.third.name = "Classical";
        this.root.third.first = new Node();
        this.root.third.first.name = "Lata Mangeshkar";
        this.root.third.first.first = new Node();
        this.root.third.first.first.name = "Raina Beeti Jaye";
        this.root.third.first.first.path = "";
        this.root.third.first.second  = new Node();
        this.root.third.first.second.name = "Naino Mei Bhadra Chhaye";
        this.root.third.first.second.path = "";
        this.root.third.first.third = new Node();
        this.root.third.first.third.name = "Mohe Panghat Pe";
        this.root.third.first.third.path = "";
        this.root.third.first.fourth = new Node();
        this.root.third.first.fourth.name = "Jaiye Humse Khafa ho Jaiye";
        this.root.third.first.fourth.path = "";
        this.root.third.second = new Node();
        this.root.third.second.name = "Asha Bhosale";
        this.root.third.second.first = new Node();
        this.root.third.second.first.name = "In Aankhon Ki Masti";
        this.root.third.second.first.path = "";
        this.root.third.second.second  = new Node();
        this.root.third.second.second.name = "Piya Bawri Piya Bawri";
        this.root.third.second.second.path = "";
        this.root.third.second.third = new Node();
        this.root.third.second.third.name = "Jhoothe Naina";
        this.root.third.second.third.path = "";
        this.root.third.second.fourth = new Node();
        this.root.third.second.fourth.name = "Bheeni Bheeni Bhor";
        this.root.third.second.fourth.path = "";
        this.root.third.third = new Node();
        this.root.third.third.name = "Elton John";
        this.root.third.third.first = new Node();
        this.root.third.third.first.name = "Your Song";
        this.root.third.third.first.path = "";
        this.root.third.third.second  = new Node();
        this.root.third.third.second.name = "Candle In The Wind";
        this.root.third.third.second.path = "";
        this.root.third.third.third = new Node();
        this.root.third.third.third.name = "Don't Go Breaking My Heart";
        this.root.third.third.third.path = "";
        this.root.third.third.fourth = new Node();
        this.root.third.third.fourth.name = "Rocket Man";
        this.root.third.third.fourth.path = "";
        this.root.third.fourth = new Node();
        this.root.third.fourth.name = "Shafaqat Amanat Ali";
        this.root.third.fourth.first = new Node();
        this.root.third.fourth.first.name = "Zindagi Se";
        this.root.third.fourth.first.path = "";
        this.root.third.fourth.second  = new Node();
        this.root.third.fourth.second.name = "Teri Jhuki Nazar";
        this.root.third.fourth.second.path = "";
        this.root.third.fourth.third = new Node();
        this.root.third.fourth.third.name = "Mitwa";
        this.root.third.fourth.third.path = "";
        this.root.third.fourth.fourth = new Node();
        this.root.third.fourth.fourth.name = "Bin Tere";
        this.root.third.fourth.fourth.path = "";
        this.root.fourth = new Node();
        this.root.fourth.name = "EDM";
        this.root.fourth.first = new Node();
        this.root.fourth.first.name = "Elle Goulding";
        this.root.fourth.first.first = new Node();
        this.root.fourth.first.first.name = "On My Mind";
        this.root.fourth.first.first.path = "";
        this.root.fourth.first.second  = new Node();
        this.root.fourth.first.second.name = "Burn";
        this.root.fourth.first.second.path = "";
        this.root.fourth.first.third = new Node();
        this.root.fourth.first.third.name = "Love Me Like You Do";
        this.root.fourth.first.third.path = "";
        this.root.fourth.first.fourth = new Node();
        this.root.fourth.first.fourth.name = "Lights";
        this.root.fourth.first.fourth.path = "";
        this.root.fourth.second = new Node();
        this.root.fourth.second.name = "Avicii";
        this.root.fourth.second.first = new Node();
        this.root.fourth.second.first.name = "The Nights";
        this.root.fourth.second.first.path = "";
        this.root.fourth.second.second  = new Node();
        this.root.fourth.second.second.name = "Wake Me Up";
        this.root.fourth.second.second.path = "";
        this.root.fourth.second.third = new Node();
        this.root.fourth.second.third.name = "I Could Be The One";
        this.root.fourth.second.third.path = "";
        this.root.fourth.second.fourth = new Node();
        this.root.fourth.second.fourth.name = "Levels";
        this.root.fourth.second.fourth.path = "";
        this.root.fourth.third = new Node();
        this.root.fourth.third.name = "Alan Walker";
        this.root.fourth.third.first = new Node();
        this.root.fourth.third.first.name = "Alone";
        this.root.fourth.third.first.path = "";
        this.root.fourth.third.second  = new Node();
        this.root.fourth.third.second.name = "Alone Part2";
        this.root.fourth.third.second.path = "";
        this.root.fourth.third.third = new Node();
        this.root.fourth.third.third.name = "On My Way";
        this.root.fourth.third.third.path = "";
        this.root.fourth.third.fourth = new Node();
        this.root.fourth.third.fourth.name = "Faded";
        this.root.fourth.third.fourth.path = "";
        this.root.fourth.fourth = new Node();
        this.root.fourth.fourth.name = "Marshmello";
        this.root.fourth.fourth.first = new Node();
        this.root.fourth.fourth.first.name = "Alone";
        this.root.fourth.fourth.first.path = "";
        this.root.fourth.fourth.second  = new Node();
        this.root.fourth.fourth.second.name = "Happier";
        this.root.fourth.fourth.second.path = "";
        this.root.fourth.fourth.third = new Node();
        this.root.fourth.fourth.third.name = "Wolves";
        this.root.fourth.fourth.third.path = "";
        this.root.fourth.fourth.fourth = new Node();
        this.root.fourth.fourth.fourth.name = "Friends";
        this.root.fourth.fourth.fourth.path = "";
        

    }
    getRoot() {
        return this.root;
    }
    preorder(node) {
        if (node != null) {
            console.log(node.name);
            console.log(node.path);
            this.preorder(node.first);
            this.preorder(node.second);
            this.preorder(node.third);
            this.preorder(node.fourth);

        }
    }
    search(ch){
        var q = [];
        q.push(this.root.first);
        q.push(this.root.second);
        q.push(this.root.third);
        q.push(this.root.fourth);
        var completeFlag = 0;
        while (completeFlag!=1) {
            var curr = q.shift();
            if (curr.first.name.charAt(0).toLowerCase() == ch.toLowerCase()) {
                q.push(curr.first);
            }
            if(curr.second.name.charAt(0).toLowerCase() == ch.toLowerCase()){
                q.push(curr.second);
            }
            if(curr.third.name.charAt(0).toLowerCase() == ch.toLowerCase()){
                q.push(curr.third);
            }
            if(curr.fourth.name.charAt(0).toLowerCase() == ch.toLowerCase()){
                q.push(curr.fourth);
            }
            if (curr == this.root.first) {
                completeFlag = 1;
            }
        }
    }
}

var t = new tree();
t.initialize();
// t.search('S')
t.preorder(t.root);