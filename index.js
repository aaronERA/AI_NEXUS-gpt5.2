import express from 'express';
import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import OpenAI from 'openai';

dotenv.config(); // ✅ Make sure this is correct

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Bot is running!'));
app.listen(PORT, () => console.log(`Web service listening on ${PORT}`));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: msg.content }]
  });

  msg.reply(response.choices[0].message.content);
});

client.login(process.env.DISCORD_BOT_TOKEN);
