#### .env
A .env file is required in this directory.
```
express_port=3000
mongo_url="localhost"
GITHUB_CLIENT_ID=XXXXXXXXXXXXXXX
GITHUB_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXX
CALLBACK_URL=http://127.0.0.1:3000 # for github
session_secret_key='awesome frog'
reactjs_url="http://127.0.0.1:3000" 

```

Also is required to make a github oAuth app with callback to ``http://127.0.0.1:3090/auth/github/callback``
