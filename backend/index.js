import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/weather', async (req, res) => {

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }
        const weatherApiKey = process.env.WEATHER_API_KEY;
        const lat = 41.3851;
        const lon = 2.1734;
        const url = "https://api.openweathermap.org/data/2.5/weather";

    try {

        const response = await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`, options);

        if (!response.ok) {
            return res.status(response.status).json({ error: 'API error' });
        }

        const data = await response.json();
        res.json(data);

    } catch(error){
        console.error('Error al obtener datos del clima:', error);
        res.status(500).json({ error: 'Internal server error' });        
    }

});

app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
});