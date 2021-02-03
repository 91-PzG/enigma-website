const options = { cors: { origin: true } };
const io = require('socket.io')(options);

let counter = 100;

io.on('connection', (socket) => {
	const eventId = socket.handshake.query.eventId;
	socket.join(eventId);
	socket.on('connected', () => {
		console.log('User connected');
	});
	socket.on('create-squad', ({ name, division, position }) => {
		io.to(eventId).emit('create-squad', { id: counter++, name, division, position });
	});
	socket.on('delete-squad', ({ position, division }) => {
		io.to(eventId).emit('delete-squad', { position, division });
	});
	socket.on('move-soldier', ({ oldSoldier, newSoldier }) => {
		io.to(eventId).emit('move-soldier', { oldSoldier, newSoldier });
	});
	socket.on('rename-squad', ({ name, position, division }) => {
		io.to(eventId).emit('rename-squad', { name, position, division });
	});
});

io.listen(3000);
