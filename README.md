# MyBot — Slack Bot with Node.js & Bolt

A simple Slack bot built with Node.js and the [Bolt framework](https://slack.dev/bolt-js/). It listens to messages in a Slack channel, responds to a `/hello` slash command, and logs all messages it receives.

---

## Features

- Responds to `/hello` slash command
- Replies when a user types `hello` in the channel
- Logs all channel messages to the console
- Uses Socket Mode (no public URL required for local development)

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- A Slack workspace where you have permission to install apps
- A Slack app created at [api.slack.com/apps](https://api.slack.com/apps)

---

## Getting Started

### 1. Clone the repository

```bash
git clone  https://github.com/AleleChi/slack-bot.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your Slack app

Go to [api.slack.com/apps](https://api.slack.com/apps) and configure the following:

**OAuth & Permissions — add these scopes:**
- `chat:write`
- `channels:history`
- `commands`

**Enable Socket Mode:**
- Go to **Socket Mode** in the sidebar and enable it
- Generate an **App-Level Token** with `connections:write` scope
- Copy the token (starts with `xapp-`)

**Slash Commands:**
- Add a `/hello` command under **Slash Commands**

**Event Subscriptions:**
- Enable events and subscribe to `message.channels`

**Install the app:**
- Go to **Install App** and click **Install to Workspace**
- Copy the **Bot User OAuth Token** (starts with `xoxb-`)

### 4. Configure environment variables

Create a `.env` file in the root of the project:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token-here
SLACK_SIGNING_SECRET=your-signing-secret-here
SLACK_APP_TOKEN=xapp-your-app-token-here
```

> **Where to find each value:**
> - `SLACK_BOT_TOKEN` → Install App page after installing to workspace
> - `SLACK_SIGNING_SECRET` → Basic Information → App Credentials → Signing Secret
> - `SLACK_APP_TOKEN` → Basic Information → App-Level Tokens (generate one with `connections:write`)

### 5. Run the bot

```bash
node bot.js
```

You should see:

```
⚡ Slack bot is running in Socket Mode
```

### 6. Invite the bot to a channel

In Slack, open the channel you want the bot to listen in and type:

```
/invite @mybot
```

Then type `hello` in the channel — the bot will reply!

---

## Project Structure

```
slack-bot/
├── bot.js          # Main bot logic
├── .env            # Environment variables (not committed)
├── .gitignore      # Ignores node_modules and .env
├── package.json    # Project dependencies
└── README.md       # This file
```

---

## Usage

| Trigger | Bot Response |
|---|---|
| Type `hello` in channel | `Hi there, @username!` |
| Run `/hello` command | `Hey @username! I'm alive and listening.` |
| Any message | Logged to console |

---

## Security

- Never commit your `.env` file — it contains secret tokens
- The `.gitignore` file excludes `.env` and `node_modules` by default
- Treat your `SLACK_BOT_TOKEN` like a password

---

## Deployment

For 24/7 uptime, deploy to a cloud platform:

- **Railway** — `railway up`
- **Render** — connect your GitHub repo and set environment variables in the dashboard
- **Heroku** — `git push heroku main` (set config vars in settings)

> Remember to set your environment variables (`SLACK_BOT_TOKEN`, `SLACK_SIGNING_SECRET`, `SLACK_APP_TOKEN`) in the platform's dashboard instead of using a `.env` file.

---

## Built With

- [Node.js](https://nodejs.org/)
- [Bolt for JavaScript](https://slack.dev/bolt-js/)
- [Slack Events API](https://api.slack.com/apis/connections/events-api)

---

## License

MIT