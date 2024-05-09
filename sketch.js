const tile_width = 80;
let rows, cols;

let map = [];

function setup() {

    createCanvas(window.innerWidth, window.innerHeight);
    background(0);

    cols = Math.floor(width / tile_width);
    rows = Math.floor(height / tile_width);

    map = resetTiles(map, rows, cols);

}

function draw() {
    // get the list of tiles with lowest entropy
    const tiles_available = getLowestEntropyTiles(map, rows, cols);
    if(tiles_available.length == 0) { 
        // background(0);  
        // map = [];
        // map = resetTiles(map, rows, cols);
        noLoop();
        return;
    }

    // pick and update a random tile of least entropy
    const {curr_tile_coords, curr_tile, tile_option} = updateRandomTile(map, tiles_available);
    map[curr_tile_coords.y][curr_tile_coords.x] = curr_tile;
    
    // reassign entropies;
    reAssignEntropies(map, tile_option, curr_tile_coords);

    // update All Tiles
    for(let j=0; j<=rows; j++) {
        for(let i=0; i<=cols; i++) {
            map[j][i].reAssignEntropies();
            map[j][i].show();
        }
    }
}