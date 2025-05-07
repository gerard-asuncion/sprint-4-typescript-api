import { getJoke, printJoke, pushPunctuation, printWeather } from './functions.js'

let showButton = document.getElementById("showButton")!
let goodButton = document.getElementById("good")!
let neutralButton = document.getElementById("neutral")!
let badButton = document.getElementById("bad")!

let joke: string

async function showJoke(): Promise<string> {
    try {
        const result: string = await getJoke();

        if(!result) throw new Error("Unable to get any joke")

        joke = result

        printJoke(result);

        return result

    } catch(error) {

        console.log(error)
        
        return ""

    }
    
}

showJoke();

printWeather();

showButton.addEventListener("click", showJoke)

goodButton.addEventListener("click", () => {
    const score = 3
    pushPunctuation(score, joke)
})

neutralButton.addEventListener("click", () => {
    const score = 2
    pushPunctuation(score, joke)
})

badButton.addEventListener("click", () => {
    const score = 1
    pushPunctuation(score, joke)
})