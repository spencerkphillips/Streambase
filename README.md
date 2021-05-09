# Streambase
> The extensible headless content management platform for streamers and content creators.

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
![Version v0.00](https://img.shields.io/badge/version-v0.00-orange.svg?style=flat)

## Description
Streambase is a lightweight headless content management platform for streamers and content creators.

## Requirements  (Prerequisites)
Tools and packages required to successfully install this project.
For example:
* NPM (Node Package Manager) v6.14.10+ [Install](https://nodejs.org/en/)
* NodeJS (Node JS) v14.15.4+ [Install](https://www.npmjs.com/get-npm)
* React.js (Used in backend) [Use]()
* MongoDB/MongoDB Atlas [Use]()

## Options
* React.js | For use in frontend. [Install]()
* Vue.js | For use in frontend. [Install]()

## Setup & Installation
To run this package, you must run these simple Git commands in your root project directory:
```
$ git clone https://github.com/spencerkphillips/Streambase.git
$ cd Streambase
$ npm install
```

Now you have the project and its libraries, next you will copy the ``.env.example`` and rename it to ``.env``.

In the ``.env``, make sure to fill in the ``PORT``, ``CONNECTION``, ``DB_HOST``, and ``DB_NAME`` fields. For example, look below:
```
 PORT=0000
 CONNECTION=mongodb+srv://project.1x1x1.mongodb.net/Database?retryWrites=true&w=majority
 DB_HOST=project.1x1x1.mongodb.net/
 DB_NAME=Database
```

Additionally, you can fill in the fields for ``Goggle Analytics``, ``Facebook Pixel`` and any other optional secrets and keys used in the project.

When your project is ready to test, run the following command(s) in a terminal:
```
npm run start
```

## Roadmap (Features)
- MVP (Most Viable Product)
   * Head (CMS)
      1. Post
      2. Page
      3. Authentication (incl. OAuth/Account Link)
      4. Sub-users/customers
   * Twitter Dashboard
      1. Tweet/Auto-Retweet
      2. Schedule
      3. Analytics
    * Serverless Config
    * Frontend template/example (using React.Js)
- Version 1.0
    * Stream Tools
        1. Stream Chat Bot
        2. Stream Alerts
        3. AutoLurk
    * eCommerce (Using Shopify as example)
        1. Orders
        2. Products
            - Collections
            - Tags
            - Inventory
        3. Payments
            - Vendors
                * Stripe
                * Paypal
                * Other
            - Payouts
                * Bank Account (ACH)
                * PayPal
        4. Analytics
        5. Discounts
- Version 1.5
    * Stream & Content
        1. Enable RTMP streaming/API
        2. Enable VOD storage/API

