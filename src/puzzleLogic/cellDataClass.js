import { BLANK, YELLOW, BLUE } from "./globalStrings";

export class CellData {

    #color = BLANK
    #north
    #south
    #east
    #west

    get color() {
        return this.#color
    }

    set color(currColor){
        if(currColor === BLANK){
            this.#color = YELLOW
        }
        if(currColor === YELLOW){
            this.#color = BLUE
        }
        if(currColor === BLUE){
            this.#color = BLANK
        }
    }

    get north(){
        return this.#north
    }

    get south(){
        return this.#south
    }

    get east(){
        return this.#east
    }

    get west(){
        return this.#west
    }

    setNeighbors(neighborsObj){
        this.#north = neighborsObj.north
        this.#south = neighborsObj.south
        this.#east = neighborsObj.east
        this.#west = neighborsObj.west
    }

}