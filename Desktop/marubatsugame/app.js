//先攻のマーク
const FIRST_MARK ='○';

//後攻のマーク
const NEXT_MARK = '×';

//ターン数
let count = 1;

//マス目のIDリスト
const blocks = [
    ['btn1','btn2','btn3'],
    ['btn4','btn5','btn6'],
    ['btn7','btn8','btn9']
];

//ゲーム実行中のフラグ
let isRun = true;

//IDからオブジェクトを取得
function $(id){
    return document.getElementById(id);
}

//先攻のターンかどうかの判定
function isFirstMove(){
    let isFirst = count % 2;

    return isFirst == 1;
}

//ターン表示を切り替える
function changeDisplay() {
    if(isFirstMove()){
        $('message').innerHTML = FIRST_MARK + ' Turn';
    } else{
        $('message').innerHTML = NEXT_MARK + ' Turn';
    }
}

//試合終了の判定
function judgeEnd(){

    let isEnd = false;
    //横3マスを判定
    for (let row = 0; row < 3; row++){
        //勝敗を判定
           isEnd = isWin(blocks[row][0], blocks[row][1], blocks[row][2])
           if(isEnd){
            displayResult($(blocks[row][0]).value + ' Win!!');
            return true;
           }
    }

    //縦3マスを判定
    for (let col = 0; col < 3; col++){
        //勝敗を判定
        isEnd = isWin(blocks[0][col], blocks[1][col], blocks[2][col])
        if(isEnd){
            displayResult($(blocks[0][col]).value + ' Win!!');
            return true;
           }
    }

    //斜め3マスを判定(右さがり)
    isEnd = isWin(blocks[0][0],blocks[1][1],blocks[2][2]);
    if(isEnd){
        displayResult($(blocks[0][0]).value + ' Win!!');
        return true;
    }

    //斜め3マスを判定(左下り)
    isEnd = isWin(blocks[0][2],blocks[1][1],blocks[2][0]);
    if(isEnd){
        displayResult($(blocks[0][2]).value + ' Win!!');
        return true;
    }

    //引き分け
    if(9 <= count){
        displayResult('Draw...');
        return true;
    }

    //ゲームが続行の場合はfalse
    return false;
}

//勝敗を判定
function isWin(firstId, secondId, thirdId) {
    //1つ目のマスが空の場合は終了
    if($(firstId).value == ''){
        return false;
    }

    //2つ目のマスが空の場合は終了
    if($(secondId).value == ''){
        return false;
    }

    //3つ目のマスが空の場合は終了
    if($(thirdId).value == ''){
        return false;
    }

    //3つのマス目が同じマークである場合は勝利
    if(
        ($(firstId).value == $(secondId).value)
    && ($(secondId).value == $(thirdId).value)
    ) {
        return true;
    }

    //3つのマス目が同じマークじゃない場合は勝利ではない
    return false;
}

//勝敗の結果を表示
function displayResult(message){
    $('result-message').innerHTML = message;
    isRun = false;

    //Againボタンを表示
    $('reset').style.display = "";

}

//クリックされた時の処理
function clickAction(event) {
    //ゲーム実行中でなければ何のせず終了
    if(!isRun){
        return;
    }

    //イベントからクリックされたマス目のIDを取得
    let id = event.target.id;

    //IDからオブジェクトを取得
    let object = $(id);

    //すでにマークが設定されている場合はスキップ
    if(object.value != ''){
        return;
    }

    //オブジェクト(マス目)にマークを設定する
    if(isFirstMove()){
        object.value = FIRST_MARK;
    } else{
        object.value = NEXT_MARK;
    }

    //試合終了の判定
    if(judgeEnd()){
        return;
    }

    //ターンを+1する
    count = count + 1;

    //ターン表示を切り替え
    changeDisplay();
}

//Againボタンが押された時の処理
function resetAction(){
    //ターンを一に戻す
    count = 1;
    changeDisplay();

    //マス目を空にする
    for(let row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
            $(blocks[row][col]).value = '';
        }
    }

    //結果の表示をリセット
    displayResult('');

    //ゲームを実行中に戻す
    isRun = true;

    //Againボタンを非表示
    $('reset').style.display = "none";

}

//画面を読み込んだ時の処理
function onloadAction(){
    // $('btn1').onclick = clickAction;
    // $('btn2').onclick = clickAction;
    // $('btn3').onclick = clickAction;
    // $('btn4').onclick = clickAction;
    // $('btn5').onclick = clickAction;
    // $('btn6').onclick = clickAction;
    // $('btn7').onclick = clickAction;
    // $('btn8').onclick = clickAction;
    // $('btn9').onclick = clickAction;

    for(let row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
        $(blocks[row][col]).onclick = clickAction;
        }
    }

    //Againボタンにイベントを設定する
    $('reset').onclick = resetAction;

    resetAction();
}

//画面を読み込み時のイベントを設定
window.onload = onloadAction;


