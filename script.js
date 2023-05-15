// ki bauen:
// 1. streichhölzer der mitte zählen = let n
// 2. wenn auf n noch min. 1 zettel liegt zufällig einen davon auswählen. und diese streichhölzer entfernen
// 3. liegt auf n nix = aufgeben
// 4. falls du mit dem letzten zug verloren hast oder aufgibst: entferne den letzten zettel mit dem ein holz genommen wurde
// 5. gewinnt die ki bleiben alle zettel liegen


let n = matches.length; // zählt alle streichhölzer zusammen


function moveKiOnClick() {

    for (i = 0; i < kiMoves.length; i++) {
        let chosenMatch = kiMoves[3]['moves'][Math.floor(Math.random() * n)]; //gesucht: javascript take random items from array
        // math.random() erzeugt eine zufällige gleitkommazahl zwischen 0 und 1 
        // hier wird aus dem array matches mit Math.random() mal * matches.länge eine zufällige zahl aus der länge des arrays errechnet
        // math.floor rundet auf eine ganze zahl


        console.log(`${chosenMatch}`)
    }
}