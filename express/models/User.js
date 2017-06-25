const mongoose = require('mongoose');
const mongo_host = 'MONGODB' in process.env ? process.env.MONGODB : 'localhost';

mongoose.connect(`mongodb://${mongo_host}/outage`);


module.exports = mongoose.model('User',
    {
        githubId: String
    }
);
