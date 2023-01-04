const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_API_TOKEN with your actual API token
const bot = new TelegramBot('5917782214:AAEz-Vf2D63I8BMANusRP39GSZG01ABOy0U', { polling: true });

// Listen for any message
bot.on('message', (msg) => {
  // Send the message back to the sender
  bot.sendMessage(msg.chat.id, '' + msg.text);
});
