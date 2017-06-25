const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.mongo_url}/outage`);


module.exports = mongoose.model('User',
    {
        githubId: String,
        avatar_url: String,
        name: String,
        email: String,
        organization_url: String
    }
);
