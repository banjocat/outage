import axios from 'axios';

function isLoggedIn(cb) {
    console.log('Checking if logged in');
    axios.get('http://localhost:4000/auth/user/logged/in',
        {withCredentials: true})
        .then( (res) => {
            console.log(res);
            cb(res.body === 'yes');
        })
        .catch ( (err) => {
            console.log(err);
        })
}

module.exports = {
    isLoggedIn: isLoggedIn
};
