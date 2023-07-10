const mongoose = require('./connection');
const Weather = require('./weather');

mongoose.connection.on('open', async () => {
    await weather.deleteMany();
    const weather = [
        { location: 'New York', activity: 'Sightseeing', temperature: 75, windSpeed: 10, precipitation: 'Sunny', toGo: true  }, 
        { location: 'London', activity: 'Shopping', temperature: 62, windSpeed: 5, precipitation: 'Rainy', toGo: true },
        { location: 'Chicago', activity: 'Hiking', temperature: 80, windSpeed: 15, precipitation: 'Rainy', toGo: true },
    ];
    await weather.create(weather);

    mongoose.connection.close();
});