import axios from 'axios';

function isLoggedIn(cb) {
    console.log('Checking if logged in');
    axios.get('http://127.0.0.1:4000/auth/user/logged/in',
        {withCredentials: true})
        .then( (res) => {
            console.log(res);
            cb(res.data === 'yes');
        })
        .catch ( (err) => {
            console.log(err);
        })
}

module.exports = {
    isLoggedIn: isLoggedIn
};
