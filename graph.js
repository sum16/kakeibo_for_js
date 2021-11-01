// グラフを表示

// 円グラフの表示
// 入出金一覧を作成するタイミングでこの関数を呼び出す
// indexBD.jsでデータを渡している
function createPieChart(rows) {
  // ラベルの配列、金額の配列を2つ作成

  //円グラフ用データを格納するオブジェクト
  let pieChartData = {};

  //データベースから入出金一覧のデータをカテゴリ毎に取り出して集計。収入は除外する
  let category = "";
  rows.forEach(function (data) {
    category = data.category; //オブジェクトのキーであるcategoryを指定
    if (category != "収入") {
      //連想配列のキーにカテゴリが存在していれば金額を加算する
      if (pieChartData[category] === undefined ) {
        pieChartData[category] = Number(data.amount);
      } else {
        pieChartData[category] += Number(data.amount);
      }
    }
  });

   //円グラフ用にカテゴリと合計金額を配列に入れる
  let keyArray = [];
  let valueArray = [];
  // オブジェクトからキーを取り出し、各配列に格納
  for (key in pieChartData) {
  
  // キーを格納
  keyArray.push(key);
  // バリューを格納
  valueArray.push(pieChartData[key])
  }

  //Chart.jsの機能を使用して円グラフを表示
  let pieChart = document.getElementById("pieChart")
  // 以下の記述がChart.jsのライブラリによる円グラフ作成のプログラム
  // 引数に変数pieChartを渡していますが、これでHTMLのどこに表示するか設定
  new Chart(pieChart, {
    type: "pie",
    data: {
      labels: keyArray,
      datasets: [
        {
          backgroundColor: [
            "#EB5757",
            "#6FCF97",
            "#56CCF2",
            "#F2994A",
            "#F2C94C",
            "#2F80ED",
            "#9B51E0",
            "#BB6BD9",
          ],
          data: valueArray,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "カテゴリ毎の支出割合",
      },
    },
  });
}

