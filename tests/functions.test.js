import { getJoke, capturatePunctuation, getWeather } from '../dist/functions.js'
import Valoration from '../dist/valoration.js'

test('returns a joke as a string', async () => {
    const joke = await getJoke();
    console.log(joke)
    expect(typeof joke).toBe('string')
});

test('returns an object with properties of Valoration class', () => {
    const date = new Date().toISOString();
    const punctuation = capturatePunctuation(1, "Joke")
    const example = new Valoration("Joke", 1, date)
    expect(punctuation).toEqual(example)
});

test('returns a number', async () => {
    const weather = await getWeather()
    const temp = weather.temperature  
    expect(typeof temp).toBe('number')
});

test('returns a string', async () => {
    const weather = await getWeather()
    const icn = weather.icon   
    expect(typeof icn).toBe('string')
});