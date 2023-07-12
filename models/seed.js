const mongoose = require('./connection');
const Weather = require('./weather');

mongoose.connection.on('open', async () => {
    await Weather.deleteMany();
    const startWeathers = [
        { location: 'New York', activity: 'Sightseeing', temperature: 75, windSpeed: 10, precipitation: 'Sunny', toGo: true, img: "https://unsplash.com/photos/UExx0KnnkjY" }, 
        { location: 'London', activity: 'Shopping', temperature: 62, windSpeed: 5, precipitation: 'Rainy', toGo: true, img: "https://unsplash.com/photos/Oja2ty_9ZLM" },
        { location: 'Chicago', activity: 'Hiking', temperature: 80, windSpeed: 15, precipitation: 'Rainy', toGo: true, img: "https://unsplash.com/photos/Nyvq2juw4_o" },
    ];
    await Weather.create(startWeathers);

    mongoose.connection.close();
});