const Discord = require('discord.js');

const bottom = require('bottomify');

const client = new Discord.Client();

const reasons = [
  'unfunny',
  ':pleading_face: stop deleting my messages',
  'banned',
  'sus',
  'spamming not allowed',
  'nice try',
];

const btmRegex = /\W(bottom) (encode|decode)/;

client.once('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Ready! 😎');
});

client.on('message', (message) => {
  if (btmRegex.test(message.content)) {
    message.delete()
      .then((a) => a.channel.send(reasons[Math.floor(Math.random() * reasons.length)]));
  }
  try {
    bottom.decode(message.content);
  } catch (e) {
    return 'ok';
  }
  message.delete()
    .then((r) => r.channel.send(reasons[Math.floor(Math.random() * reasons.length)]));
  return 'deleted';
});

client.login('YOUR_TOKEN_HERE');
