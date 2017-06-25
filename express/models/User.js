const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.mongo_url}/outage`);


module.exports = mongoose.model('User',
    {
        githubId: String
    }
);
