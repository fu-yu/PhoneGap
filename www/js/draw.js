var drawData = {
    drawFlag : false,   oldX : 0, // 直前のX座標を保存するためのもの
    oldY : 0, // 直前のY座標を保存するためのもの
    brushSize : 4, // ブラシサイズ
    penColor : "rgba(255,0,0,1)"
}
var can = document.getElementById("myCanvas");
can.addEventListener("touchmove", function draw(e){
                    if (!drawData.drawFlag) return;
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    document.getElementById("stat").innerHTML = drawData.oldX+","+drawData.oldY;
                    var can = document.getElementById("myCanvas");
                    var context = can.getContext("2d");
                    context.strokeStyle = drawData.penColor;
                    context.lineWidth = drawData.brushSize;
                    context.lineJoin= "round"; // 連結部分を丸にする
                    context.lineCap = "round";
                    context.beginPath();
                    context.moveTo(drawData.oldX, drawData.oldY);
                    context.lineTo(x, y);
                    context.stroke();
                    context.closePath();
                    drawData.oldX = x;
                    drawData.oldY = y;
                    }, true);
can.addEventListener("touchstart", function(e){
                     drawData.drawFlag = true;
                     drawData.oldX = e.touches[0].pageX;
                     drawData.oldY = e.touches[0].pageY;
                     document.getElementById("stat").innerHTML = drawData.oldX+","+drawData.oldY;
                     }, true);
can.addEventListener("touchend", function(){
                     drawData.drawFlag = false;
                     }, true); // デフォルトのイベントを禁止
document.ontouchmove = function(evt){
    evt.preventDefault();
}