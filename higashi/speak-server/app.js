const http = require('http');
const say = require('say');

// 英語でのfortune list

// const fortunes = [
//   'Great fortune',
//   'Good fortune',
//   'Slight fortune',
//   'Bad fortune'
// ];

const fortunes = [
  '大吉',
  '中吉',
  '吉',
  '凶',
  '大凶'
];

const server = http.createServer((req, res) => {
  const result = fortunes[Math.floor(Math.random() * fortunes.length)];
  // const message = `${result}!`;
  const message = `Your fortune today is: ${result}!`;

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

// # プロジェクト作成（まだの場合）
// mkdir speak-server
// cd speak-server
// npm init -y
// npm install say

// # ファイル作成
// touch app.js   # または VSCode で新規ファイル作成

// # 上のコードをコピペ

// # 実行
// node app.js