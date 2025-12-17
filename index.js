import { Client, GatewayIntentBits } from "discord.js";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: msg.content }],
  });

  msg.reply(response.choices[0].message.content);
});

client.login(process.env.DISCORD_BOT_TOKEN);
