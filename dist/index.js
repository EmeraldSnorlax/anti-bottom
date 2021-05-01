"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const bottomify_1 = __importDefault(require("bottomify"));
const client = new discord_js_1.default.Client();
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
        bottomify_1.default.decode(message.content);
    }
    catch (e) {
        return 'ok';
    }
    message.delete()
        .then((r) => r.channel.send(reasons[Math.floor(Math.random() * reasons.length)]));
    return 'deleted';
});
client.login('YOUR_TOKEN_HERE');
