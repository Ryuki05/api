// let dispArea =
// document.querySelector("#display-area");


function getChange(amount) {
    // この中にある種類のお金を使います（大きい順）
    const coins = [500, 100, 50, 10, 5, 1];
  
    // お金の種類ごとに何枚使うかを入れる箱（空っぽのノート）
    const result = {};
  
    // お金の種類を1つずつ使っていきます
    // for (let i =0; i < coins.length; i++) {

    //   // ここにコードを記述してください
    //   amount = amount % coin;
    //   result = `おつりは${i}円玉${i}枚です`;
    // }
    for (const coin of coins) {

      // ここにコードを記述してください
      result[coin] = math.floor(amount / coin);

      amount = amount % coin;
    }
  
    // お金の種類ごとに、何枚使ったかが入っているノートを返します
    return result;
  }
  
  // 843円のおつりがあるとき、どうやって分けるか見てみます
  console.log(getChange(843));
  // { '500': 1, '100': 3, '50': 0, '10': 4, '5': 0, '1': 3 }