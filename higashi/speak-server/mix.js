const http = require('http');
const say = require('say');

const figlet = require('figlet');
const chalk = require('chalk');

const serviceName = 'URANAI';

const fortunes = [
    '大吉',
    '中吉',
    '吉',
    '凶',
    '大凶'
  ];

const colors = [
  chalk.redBright,
  chalk.yellowBright,
  chalk.greenBright,
  chalk.cyanBright,
  chalk.blueBright,
  chalk.magentaBright,
  chalk.whiteBright,
];

// const message = messages[Math.floor(Math.random() * messages.length)];

figlet(serviceName, (err, data) => {
  if (err) {
    console.error('Figlet error:', err);
    return;
  }

  const lines = data.split('\n');

  // 各行にランダムな色をつけて表示
  lines.forEach(line => {
    const colorFn = colors[Math.floor(Math.random() * colors.length)];
    console.log(colorFn(line));
  });

  console.log(); // 空行
  console.log(chalk.bold(message)); // メッセージは太字で表示
});

const server = http.createServer((req, res) => {
    const result = fortunes[Math.floor(Math.random() * fortunes.length)];
    // const message = `${result}!`;
    const message = `${result}!`;
  
    // 英語でしゃべる
    // say.speak(message);
  
     // Mac用に 'Alex' を指定
     say.speak(message, 'Alex');
  
    // 画面表示用（文字化け防止に charset=utf-8 を指定）
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(message);
  });
  
  server.listen(3000, () => {
    console.log('Access http://localhost:3000');
  });
  