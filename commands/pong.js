module.exports = {
    name: 'ping',
    description: 'Reply with Pong when I hear Ping',
    usage: '[ping]',
    cooldown: 0,
    execute(message, args) {
        message.channel.send('Pong');
    }
};