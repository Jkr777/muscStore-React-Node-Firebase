if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      path = require('path'),
      stripe = require('stripe')(process.env.STRIPE_SECRET_KEY),
      compression = require('compression'),
      enforce = require('express-sslify'),
      app = express();

const PORT = process.env.PORT || 5000;
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get("*", (req, res) => {
    res.sendFile(pat.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if(stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  })
});

app.listen(PORT, () => console.log('Server running'));