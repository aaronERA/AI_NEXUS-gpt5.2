###🧠 GPT Discord Bot
A simple Discord bot that uses the OpenAI API to respond to messages in real time.
Built with Node.js, discord.js, and OpenAI’s API.

##🚀 Features
- Responds to any message in channels it can read
- Uses your OpenAI API key (GPT‑4o or any model you choose)
- Lightweight, fast, and easy to deploy
- Works on Render, Replit, or locally

##📦 Installation
Clone the repo:
git clone https://github.com/yourusername/gpt-discord-bot.git
cd gpt-discord-bot


#Install dependencies:
npm install



##🔑 Environment Variables
Create a .env file in the project root:
OPENAI_API_KEY=your-openai-key-here
DISCORD_BOT_TOKEN=your-discord-bot-token-here


These values are required for the bot to run.

##▶️ Running Locally
npm start


If everything is set up correctly, the bot will come online and respond in your server.

##☁️ Deploying on Render
- Push this repo to GitHub
- Create a New Web Service on Render
- Connect your GitHub repo
- Set:
- Build Command: npm install
- Start Command: node index.js
- Add environment variables:
- OPENAI_API_KEY
- DISCORD_BOT_TOKEN
- Deploy
Your bot will go live automatically.

##🛠️ Customization
You can modify:
- The model used
- How the bot triggers
- Slash commands
- Personalities
- Multi‑AI routing (Claude, Gemini, etc.)

##✅ Requirements
- Node.js 18+
- Discord bot token
- OpenAI API key
