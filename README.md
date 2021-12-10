## Testing Github Webhook
This project is used for testing and learning purpose only.

### How to start

#### Install hookdeck cli: https://hookdeck.com/docs/using-the-cli.
#### Create a Mongodb database and change the mongodb uri in `connect-db.js`.
#### Start the project
```
    $ npm i && npm run start:hapi # Server will start at localhost:3000
```
#### Start the hookdeck server which is forwarded to our localhost 3000
```
Commands:
    $ hookdeck login # Login to your hookdeck account, skip this if you have already logged in.
    $ hookdeck listen 3000

Output:
    Dashboard
    👉 Inspect and replay webhooks: https://dashboard.hookdeck.com/cli/events

    github-webhook Source
    🔌 Webhook URL: https://events.hookdeck.com/e/src_xxxxxxxxxxxx
```

#### Configure github webhook with the Webhook URL: https://www.youtube.com/watch?v=C_b773aUjpc

@ngcvm


