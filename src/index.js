const app = require('./app');

require('firebase-admin');

app.listen(3000, () => {
    console.log('Listening on port 3000');
});