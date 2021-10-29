//第3章：UIの動作

//ラジオボタンによりカテゴリを有効無効切り替える関数
const disableSelectBox = (disabled) => {
  document.getElementById("category").disabled = disabled;
}
// disabledをtrueにすることによってセレクトボックスを無効にする
// 収入を選択時、カテゴリのセレクトボックスを無効にする
// 支出を選択時、カテゴリのセレクトボックスを有効にする
// =の左側の.disabledはセレクトボックスの有効無効を切り替えるための設定項目、右は引数


//収支入力フォームの内容チェックする関数
const inputCheck = () => {
   //チェック結果 true:入力チェックOK　false:未記入アリ
  let result = true

  let radio = document.getElementsByName("balance");
  // name属性を取得
  let balance;

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
        balance = radio[i].value;
        break;
    }
  }

  //日付、カテゴリ、金額、メモの取得
  let date = document.getElementById('date').value;
  let category = document.getElementById('category').value;
  let amount = document.getElementById('amount').value;
  let memo = document.getElementById('memo').value;

  if (date == "") {
    result = false;
    alert("日付を入力してください") 
  } else if (category == '-選択してください-' && '支出') {
    result = false;
    alert("カテゴリを選択してください") 
  } else if (amount == "" || amount == 0 ) {
    result = false;
    alert("金額が見入力です")
  } else if (memo == "") {
    result = false;
    alert("メモが未記入です");
  }
}





// 2個のラジオボタンのnameの属性は両方ともbalanceにします。

// name属性を同じにすることでで1セットのラジオボタンとして認識されて同じname属性のラジオボタンは1個だけ選択ができるようになります。