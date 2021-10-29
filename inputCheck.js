//第3章：UIの動作

//ラジオボタンによりカテゴリを有効無効切り替える関数
const disableSelectBox = (disabled) => {
  document.getElementById("category").disabled = disabled;
}
// disabledをtrueにすることによってセレクトボックスを無効にする
// 収入を選択時、カテゴリのセレクトボックスを無効にする
// 支出を選択時、カテゴリのセレクトボックスを有効にする
// =の左側の.disabledはセレクトボックスの有効無効を切り替えるための設定項目、右は引数


//収支入力フォームの内容チェック
const inputCheck = () => {

}




// 2個のラジオボタンのnameの属性は両方ともbalanceにします。

// name属性を同じにすることでで1セットのラジオボタンとして認識されて同じname属性のラジオボタンは1個だけ選択ができるようになります。