const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.mongo_url}/outage`);

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

