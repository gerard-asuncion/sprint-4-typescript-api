class Valoration {
    #joke;
    #score;
    #date;
    constructor(joke: string, score: number, date: string){
        this.#joke = joke;
        this.#score = score;
        this.#date = date;
    }

    get joke() { return this.#joke }
    get score() { return this.#score }
    get date() { return this.#date }

    set joke(newValue) { this.#joke = newValue }
    set score(newValue) { this.#score = newValue }
    set date(newValue) { this.#date = newValue }

}

export default Valoration;