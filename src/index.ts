import Discord from 'discord.js';
import bottomify from 'bottomify';
import token from './config';

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
  console.log('Ready! 😎');
});

client.on('message', (message) => {
  if (btmRegex.test(message.content)) {
    message.delete()
      .then((a) => a.channel.send(reasons[Math.floor(Math.random() * reasons.length)]));
  }
  try {
    bottomify.decode(message.content);
  } catch (e) {
    return 'ok';
  }
  message.delete()
    .then((r) => r.channel.send(reasons[Math.floor(Math.random() * reasons.length)]));
  return 'deleted';
});

client.login(token);
