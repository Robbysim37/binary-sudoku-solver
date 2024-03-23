import { BLANK } from "./globalStrings";

export class CellData {

    #color = BLANK
    #north
    #south
    #east
    #west

    get color() {
        return this.color
    }

    set color(newColor){
        this.color = newColor
    }

    get north(){
        return this.north
    }

    get south(){
        return this.south
    }

    get east(){
        return this.east
    }

    get west(){
        return this.west
    }

    setNeighbors(neighborsObj){
        this.#north = neighborsObj.north
        this.#south = neighborsObj.south
        this.#east = neighborsObj.east
        this.#west = neighborsObj.west
    }

}