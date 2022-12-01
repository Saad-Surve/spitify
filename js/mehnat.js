let song = ["Bad Habits","Shivers","All Too Well","Lover","I Don't Wanna Live Forever","ME!","Attention","Light Switch","We Don't Talk Anymore","See You Again","Milne Hai Mujhse Aayi","Humdard","Ae Dil Hai Mushkil","Tum Hi Ho","Blue Eyes","Brown Rang","High Heels","Dope Shope","DJ Waley Babu","Mercy","Bachpan Ka Pyaar","Kala Chasma","PitBull","Give Me Everything","Timber","I Know You Want Me","I Like it","Rap God","The Ringer","Stay Wide Awake","Without Me","Raina Beeti Jaye","Naino Mei Bhadra Chhaye","Mohe Panghat Pe","Jaiye Humse Khafa ho Jaiye","In Aankhon Ki Masti","Piya Bawri Piya Bawri","Jhoothe Naina","Bheeni Bheeni Bhor","Your Song","Candle In The Wind","Don't Go Breaking My Heart","Rocket Man","Zindagi Se","Teri Jhuki Nazar", "Mitwa","Bin Tere","On My Mind","Burn","Love Me Like You Do","Lights","The Nights","Wake Me Up","I Could Be The One","Levels","Alone","Alone Part2","On My Way","Faded","Alone","Happier","Wolves","Friends"];
let artNumber = 0;
let genNumber = 0;
let count = 0;
song.forEach(element => {
   
    if (count==4) {
        artNumber++;
        if (artNumber == 4) {
            genNumber++;
            artNumber = 0;
        }
        count = 0;
    }
    console.log('t.insertSong("'+element+'",'+'"../assets/music/'+element+'.mp3","../assets/cover/'+element+'.jpg",'+artNumber+','+genNumber+");");
    count++;
});