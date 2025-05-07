// 必要な機能を読み込む（こうすることで使えるようになる）
const express = require("express");          // サーバーの動きを作るための道具
const bodyParser = require("body-parser");  // データをわかりやすい形に変える
const path = require("path");               // フォルダやファイルの場所を扱う
const cors = require("cors");               // 他のサイトからもアクセスできるようにする
const { parseArgs } = require("util");
const { count } = require("console");

// サーバー本体を作る
const app = express();

// 使うポート番号（この番号でアクセスできる）
const port = 8787;

// -----------------------------
// ここからサーバーの準備
// -----------------------------

// JSON形式（中身が名前と値のセット）のデータを扱えるようにする
app.use(bodyParser.json());

// 他のサイトやアプリからもこのサーバーにアクセスできるようにする
app.use(cors());

// -----------------------------
// 例として用意したレシピのデータ
// -----------------------------
let recipes = [
    {
        id: 1,
        name: "パスタ",  // パスタという料理
        ingredients: ["ヌードル", "トマトソース", "チーズ"] // 材料の一覧
      },
      {
        id: 2,
        name: "サラダ",
        ingredients: ["レタス", "トマト", "きゅうり", "ドレッシング"]
      },
      {
        id: 3,
        name: "トマトスープ",
        ingredients: ["トマト", "水", "塩", "にんにく", "オリーブオイル"]
      },
];

// -----------------------------
// フロント（見た目の部分）に必要なファイル（HTMLやCSS）を送る準備
// -----------------------------
app.use(express.static(path.join(__dirname, "public"))); // 今いるフォルダから探す

// -----------------------------
// API（レシピを見せたり探したりする機能）
// -----------------------------

// 全部のレシピを表示する
app.get("/recipes", (req, res) => {
  res.json(recipes); // レシピ全部をそのまま返す
});

// 特定の番号のレシピだけを表示する
app.get("/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  // 入力された番号と一致するものを探す
  if (recipe) {
    res.json(recipe); // 見つかったら返す
  } else {
    res.status(404).send("Recipe not found"); // なかったら「見つからなかった」と返す
  }
});

app.get("/recipes/menu/:name", (req, res) => {
    const recipe = recipes.find((r) => r.name === (req.params.name));
    // 入力された番号と一致するものを探す
    if (recipe) {
      res.json(recipe); // 見つかったら返す
    } else {
      res.status(404).send("Recipe not found"); // なかったら「見つからなかった」と返す
    }
  });

//具材の数
app.get("/recipes/ingredientcount/:count", (req, res) => {
    const recipe = recipes.filter((r) => r.ingredients.length === parseInt(req.params.count));
    // 入力された番号と一致するものを探す
    if (recipe) {
      res.json(recipe); // 見つかったら返す
    } else {
      res.status(404).send("Recipe not found"); // なかったら「見つからなかった」と返す
    }
  });

// 指定された材料を使っているレシピを表示する
app.get("/recipes/ingredient/:ingredient", (req, res) => {
  const ingredient = req.params.ingredient.toLowerCase();
  // 入力された材料の名前を小文字に変換
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.some((ing) => ing.toLowerCase() === ingredient)
    // 材料の中にその名前があれば選ぶ
  );

  if (filteredRecipes.length > 0) {
    res.json(filteredRecipes);
    // 見つかったらそのレシピ一覧を返す
  } else {
    res.status(404).send("No recipes found with the given ingredient");
    // なかったら「見つからなかった」と返す
  }
});

// -----------------------------
// サーバーをスタートする
// -----------------------------
app.listen(port, () => {
  console.log(`Recipe API running at http://localhost:${port}`);
});