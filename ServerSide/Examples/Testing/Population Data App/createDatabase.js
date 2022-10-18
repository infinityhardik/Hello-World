const Population = require('./models/population');

const refreshAll = async(data) => {
    await Population.deleteMany({});

    await Population.insertMany(data);
}

module.exports = { refreshAll };
