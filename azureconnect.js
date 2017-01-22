var connectionString = ‘your connection string goes here’;

var clientFromConnectionString = require(‘/usr/local/lib/node_modules/azure-iot-device-http’).clientFromConnectionString;

var client = clientFromConnectionString(connectionString);

var Message = require(‘/usr/local/lib/node_modules/azure-iot-device’).Message;

var connectCallback = function (err) {
	if (err) {
		console.error(‘Could not connect: ‘ + err);
	} else {
		console.log(‘Client connected’);
		var msg = new Message(‘some data from jukerush’);
		client.sendEvent(msg, function (err) {
		if (err) {
			console.log(err.toString());
		} else {
		console.log(‘Message sent’);
	};
	});
	};
	};
client.open(connectCallback);