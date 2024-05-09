class Tile {

    constructor({options, tile_coords, tile_width, isCollapsed}) {

        this.options = options;
        this.isCollapsed = isCollapsed || false;
        this.entropy = options.length;

        this.tile_coords = tile_coords;
        this.tile_width = tile_width || 20;

    }

    reAssignEntropies() {
        this.entropy = options.length;
    }

    highLight() {
        stroke(255);
        strokeWeight(4);
        noFill();
        rect(this.tile_coords.x*this.tile_width, this.tile_coords.y*this.tile_width, this.tile_width, this.tile_width)
    }
 
    show() {
        if(!this.isCollapsed) return;
        if(this.options[0] == undefined) {
            console.log(this.isCollapsed)
            this.highLight()
            noLoop()
            return
        }
        image(this.options[0].img, this.tile_coords.x*this.tile_width, this.tile_coords.y*this.tile_width, this.tile_width, this.tile_width);
    }

}