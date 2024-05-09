function getLowestEntropyTiles(map, rows, cols) {

    let entropy = Infinity;
    let elements = [];

    for(let j=0; j<=rows; j++) {
        for(let i=0; i<=cols; i++) {
            if(!map[j][i].isCollapsed) {  

                if(map[j][i].entropy <= entropy) {
                    if(map[j][i].entropy < entropy) {
                        elements = [];
                        entropy = map[j][i].entropy;
                    }
                    elements.push({x: i, y: j});
                }
        }
        }
    }
    return elements;
}

function resetTiles(map, rows, cols) {
    for(let j=0; j<=rows; j++) {
        map[j] = []
        for(let i=0; i<=cols; i++) {
            map[j][i] = new Tile({ options, tile_width, tile_coords: { x: i, y: j } });
        }
    }
    return map;
}


function updateRandomTile(map, tiles_available) {

    const curr_tile_coords = random(tiles_available);
    const {x, y} = curr_tile_coords;
    const curr_tile = map[y][x];
    const tile_option = random(curr_tile.options);

    curr_tile.options = [tile_option];
    curr_tile.isCollapsed = true;
    curr_tile.entropy = 0;

    return {
        curr_tile_coords, 
        curr_tile, 
        tile_option
    }
}


function reAssignEntropies(map, tile_option, curr_tile_coords) {

    const {x, y} = curr_tile_coords

    if(map[y-1]) {
        if(!map[y-1][x].isCollapsed) {
            let temp = [];
            
            for(let op of tile_option.options_id.top) {
                for(let op2 of map[y-1][x].options) {
                    if(op == op2.id) {
                        temp.push(op2);
                    }
                }
            }
    
            map[y-1][x].options = temp;
        } 
    }

    if(map[y][x+1]) {

        if(!map[y][x+1].isCollapsed) {
            let temp = [];
    
            for(let op of tile_option.options_id.right) {
                for(let op2 of map[y][x+1].options) {
                    if(op == op2.id) {
                        temp.push(op2);
                    }
                }
            }
    
            map[y][x+1].options = temp;
        }
    }

    if(map[y+1]) {
        if(!map[y+1][x].isCollapsed) {
            let temp = [];
    
            for(let op of tile_option.options_id.bottom) {
                for(let op2 of map[y+1][x].options) {
                    if(op == op2.id) {
                        temp.push(op2);
                    }
                }
            }
            map[y+1][x].options = temp;
        }
    }

    if(map[y][x-1]) {
        if(!map[y][x-1].isCollapsed) {
            let temp = [];
    
            for(let op of tile_option.options_id.left) {
                for(let op2 of map[y][x-1].options) {
                    if(op == op2.id) {
                        temp.push(op2);
                    }
                }
            }
    
            map[y][x-1].options = temp;
        }
    }


}