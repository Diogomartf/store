# Fun Store

In this store you can add reviews (rating and comment) to products.

---
## Setup

Make sure you have ruby and rails, postgres and node installed.

**Install the dependencies:**

Install ruby dependencies (gems)
```
bundle install
```

Install javascript dependencies
```
yarn install
```

## Database

Run migrations
```
rails db:migrate
```
Run seeds:
```
rails db:seed
```

## Start the application

To start the server run
```
rails server
```
Also run webpack to compile javascript
```
./bin/webpack-dev-server
```