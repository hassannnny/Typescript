class Songs {

    
    private song: string; 
    private artist: string; 

    constructor(song: string, artist: string) {
        this.song = song; 
        this.artist = artist; 
    }

}

class List {

    private playlist: Songs[] = []

    public addSong(song: Songs): void {

        this.playlist.push(song); 
    }

}
const songOne = new Songs("Gangum Style", "PSY"); 
const songTwo = new Songs("Shape of You", "Ed Sheeran");


console.log(songOne); 


