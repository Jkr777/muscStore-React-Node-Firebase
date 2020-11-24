  ### frontEnd

* I experimented with firebase and react, creating a progressive web app. I used stripe API to handle demo payments. The authentication is provided by firebase(email/password or gmail). You can buy demo products and make a new account. You can add new products using a firebase function.

* about:
  - You need to use your own firebase configuration ('./client/src/firebase/firebase.utils.js')
  - I created this project using create-react-app tool.
  - I used react lifecycle methods to handle custom functionality that gets executed during the different phases of a component.
  - I used redux to manage the app state.
  - I used react props system and redux to pass data through components.
  - I used the serviceWorker to activate offline/cache-first behavior.
  - I used dynamic imports with react.lazy and suspense.
  - I run this project in heroku using "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build".

* dependencies:
    - "axios" // used to handle server req
    - "firebase" // a SDK used to access Firebase services
    - node-sass // used to compile .scss files to css.
    - "react-redux" // It lets your React components read data from a Redux store, and dispatch actions to the store to update data.
    - "react-router-dom" // used to navigate between different components.
    - "redux" // a predictable state container for JavaScript applications
    - "react-stripe-checkout" // a React Stripe Checkout Component
    - "redux-devtools-extension" // used to visualize actions and state changes that take place in a redux application.
    - "redux-persist" // persist and rehydrate a redux store.
    - "redux-saga" // a middleware used to handle side effects
    - "reselect" // used to create a memoized selector
    
    -------------------------
  ### backend

* This server is used to handle stripe API payments and to serve our react app.

* dependencies: 
    - "body-parser" // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    - "compression" // used to compress the server response
    - "cors" // used to handle Cross-Origin Resource Sharing
    - "express" // a framework for Node.js
    - "express-sslify" // This simple module enforces HTTPS connections on any incoming GET and HEAD requests.
    - "stripe" // the Stripe Node library provides convenient access to the Stripe API from applications written in server-side JavaScript.
