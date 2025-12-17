🧠 GPT Discord Bot
A lightweight Discord bot powered by the OpenAI API.
It listens to messages in your server and replies using GPT‑4o (or any model you choose).
Built with Node.js, discord.js, and OpenAI’s official SDK.

🚀 Features
- Responds to any message in channels it can read
- Uses your own OpenAI API key
- Easy to deploy on Render, Replit, or locally
- Minimal, clean codebase
- Fully customizable

📁 Project Structure
gpt-discord-bot/
├── index.js
├── package.json
├── .env.example
└── README.md



📦 Installation
Clone the repo:
git clone https://github.com/yourusername/gpt-discord-bot.git
cd gpt-discord-bot


Install dependencies:
npm install



🔑 Environment Variables
Create a .env file in the project root:
OPENAI_API_KEY=your-openai-key-here
DISCORD_BOT_TOKEN=your-discord-bot-token-here


These values are required for the bot to run.
Note: Never commit your real .env file to GitHub.


▶️ Running Locally
npm start


If everything is configured correctly, your bot will come online and respond in your Discord server.

☁️ Deploying on Render
- Push this repo to GitHub
- Go to Render → New Web Service
- Connect your GitHub repo
- Set:
- Build Command: npm install
- Start Command: node index.js
- Add environment variables:
- OPENAI_API_KEY
- DISCORD_BOT_TOKEN
- Deploy
Render will build and run your bot automatically.

🛠️ Customization
You can modify:
- The OpenAI model
- Trigger behavior (e.g., only reply to commands)
- Personalities
- Slash commands
- Multi‑AI routing (Claude, Gemini, etc.)

✅ Requirements
- Node.js 18+
- Discord bot token
- OpenAI API key
