require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // use Socket Mode so you don't need a public URL
  appToken: process.env.SLACK_APP_TOKEN,
});

// Log every message the bot can see
app.message(async ({ message, logger }) => {
  if (message.subtype) return; // skip edits, deletions, bot messages
  logger.info(`[${message.channel}] ${message.user}: ${message.text}`);
});

// Respond to the /hello slash command
app.command("/hello", async ({ command, ack, say }) => {
  await ack(); // always acknowledge within 3 seconds
  await say(`Hey <@${command.user_id}>! 👋 I'm alive and listening.`);
});

// Also respond when someone types "hello" in a message
app.message("hello", async ({ message, say }) => {
  await say(`Hi there, <@${message.user}>!`);
});

// Start the app
(async () => {
  await app.start();
  console.log("⚡ Slack bot is running in Socket Mode");
})();
