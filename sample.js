// 
// HTMLは上から順番に解釈されていく
// javascriptが解釈されて実行開始されたときには、bodyは解釈されておらず、したがって#hoge-btnも存在せず、
// document.getElementById('hoge-btn')にはnullが戻り、nullにはaddEventListenerメソッドが存在しないため、エラーになる
// DOMContentLoadedで囲って解決
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('hoge-btn').addEventListener('click', function(event) {
    console.log(event.target); // ログ→ <button id="hoge-btn">テスト</button>
  });
})
