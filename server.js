'use strict';

const TuyaAPI = require('tuya-api');

const client = new TuyaAPI({
    key: 'YOUR_TUYA_KEY',
    secret: 'YOUR_TUYA_SECRET',
    schema: 'https', // Can be http or https
    baseUrl: 'https://openapi.tuyacn.com',
});

client.load({
    id: 'YOUR_DEVICE_ID'
}).then(device => {
    console.log('Device info:', device);
}).catch(err => {
    console.error('Error loading device:', err);
});
