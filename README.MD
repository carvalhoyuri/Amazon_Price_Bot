# Amazon Price Bot

This is a simple bot developed by me whose objective is to observe the price of a product on amazon and send me an email when it reaches a certain value.
This result was achieved by using Playwright, Nodemailer and Cronjob.

# Required files
You'll need to set up a .env file containing the following data:

```
HOST="smtp.gmail.com"
PORT="587"
USER="YOUR_EMAIL"
PASS="YOUR_APP_PASSWORD"
BASE_URL="PRODUCT_URL"
EXPECTED_PRICE="PRODUCT_MAXIMUM_PRICE"
RECIPIENT="RECIPIENT_EMAIL_ADDRESS"
``` 


## Running

In order to run the bot, install the required packages through npm:

```
npm install
```
Then run the bot:
```
node AmazonBot.js
```


## Cronjob 

To keep the bot running at defined time intervals, you can use cronjob on your personal computer or on a server. Learn more about cronjob through [this link.](https://www.hostinger.com/tutorials/cron-job).

The [Crontab Guru](https://crontab.guru/) can also help to set up your expression schedule!

