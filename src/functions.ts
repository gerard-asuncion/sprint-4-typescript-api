
import Valoration from "./valoration.js"
import { reportAcudits } from "./bbdd.js"
import { WEATHER_API_KEY } from "./config.js"

interface Punctuation {
    joke: string,
    score: number,
    date: string
}

interface WeatherTempIcon {
    temperature: number,
    icon: string
}

export async function getJoke(): Promise<string> {
    interface DataDad {
        joke: string;
    }

    interface DataNorris {
        value: string
    }
   
    const options: object = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }

    try {

        const randomNumber = Math.floor(Math.random() * 2) + 1;

        if(randomNumber === 1){

            const response = await fetch('https://icanhazdadjoke.com/', options)
           
            if(!response.ok) throw new Error(`Dad Joke Error HTTP: ${response.status}`)
            
            const data: DataDad = await response.json();
            const joke: string = data.joke

            return joke

        } else {

            const response = await fetch('https://api.chucknorris.io/jokes/random', options)
            if(!response.ok) throw new Error(`Chuck Norris Error HTTP: ${response.status}`)
            
            const data: DataNorris = await response.json();
            const joke: string = data.value

            return joke
        }

    } catch (error) {

        console.log(error)

        return "Sorry, there are no jokes by now."

    }

}

export function printJoke(joke: string): void {

    let result: HTMLElement = document.getElementById('joke-div')!
    result.innerHTML = joke

}

export function capturatePunctuation(score: number, joke: string): Punctuation {
    const date: string = new Date().toISOString();
    const punctuation: Punctuation = new Valoration(joke, score, date);

    return punctuation

}

export function pushPunctuation(score: number, joke: string): void {
    
    const punctuation = capturatePunctuation(score, joke)

    if(punctuation !== undefined){
    const duplicated: Punctuation | undefined = reportAcudits.find(item => item.joke === punctuation.joke)
    
        if(!duplicated){
            reportAcudits.push(punctuation);
            console.log("Valoracions: ", reportAcudits)
        } else {
            console.log("No es pot valorar dos cops el mateix acudit.")
        }
    }
}

export async function getWeather(): Promise<WeatherTempIcon | null> {

    interface Data {
        main: Main,
        weather: Weather[]
    }

    interface Main {
        temp: number
    }

    interface Weather {
        icon: string
    }

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }

    const weatherApiKey = WEATHER_API_KEY;
    const lat = 41.3851;
    const lon = 2.1734;
    const url = "https://api.openweathermap.org/data/2.5/weather";


    try {

        const response = await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`, options);

        if(!response.ok) throw new Error(`Error HTTP: ${response.status}`)

        const data: Data = await response.json()

        const temperature: number = data.main.temp
        const icon: string = data.weather[0].icon

        const iconUrl: string = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const weather: WeatherTempIcon = {
            temperature: temperature,
            icon: iconUrl
        }

        return weather

    } catch(error) {

        console.log('Error fetching weather...', error)

        return null

    }
}

export async function printWeather(): Promise<void>{
    
    let container = document.getElementById("weather-container")!

    try {

        const weather: WeatherTempIcon | null = await getWeather()

        if(weather){

            let icon = document.createElement("img")
            icon.classList.add("inline-block")
            icon.src = weather.icon

            let temp = document.createElement("div")
            temp.classList.add("inline-block")
            temp.textContent = `${weather.temperature}ºC`

            container.appendChild(icon)
            container.append(temp)

        } else {

            throw new Error("Cannot find weather data")

        }

    } catch(error){

        let message = document.createElement("div")
        message.classList.add("temperature-div")
        message.textContent = "Cannot find weather data"

        console.log(error)

    }

}