
const mongoose = require('mongoose');
const mongo_host = 'MONGODB' in process.env ? process.env.MONGODB : 'localhost';

mongoose.connect(`mongodb://${mongo_host}/test`);

module.exports = mongoose.model('Outage',
    {
        title: {type: String, required: [true, 'Title required']},
        description: {type: String, required: [true, 'Description required']},
        state: {
            type: String,
            default: 'open',
            lowercase: true,
            validate: {
                validator: (v) => {
                    const choices = ['open', 'progress', 'closed'];
                    return choices.includes(v);
                },
                message: ['{VALUE} is not open|progress|closed']
            }
        }
    }
);

