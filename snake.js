
<!DOCTYPE html>
<html>
<head>
  <title> Snake Game </title>
</head>
<body>
  <h1 style = "color:blue;"><center><font size = "15"><i>Snake!</i></font></center></h1>
   <center style = "color:red;"><font size = "20"><i>Welcome to the world of Snakes :P</i></font></center>
   <!-- Menu goes here -->
    <center><font size ="6">
      <a href= "https://zencree.github.io"> Youtube</a> | <a href = "https://zencree.github.io/calculus.html">Calculus</a> | <a href ="https://zencree.github.io/dfq.html">
      Differential Equations</a> | <b>Snake Game </b> </font></center>
   <!-- Menu ends here -->
      <canvas id ="gc" width ="400" height ="400"></canvas>
      <script>
        window.onload=function() {
          canv = document.getElementByID("gc");
          ctx= canv.getContext("2d");
          document.addEventListener("keydown",keyPush);
          setInterval(game,1000/15);
        }
        px=py=10;
        gs=tc=20;
        ax=yv=0;
        xv=yv=0;
        trail=[];
        trail =5;
        function game(){
          px+=xv;
          py+=yv;
          if(px<0) {
            px =tc-1;
          }
           if(px>tc-1) {
            px =0;
          }
           if(py<0) {
            py =tc-1;
          }
           if(py>tc-1) {
            py = 0;
          }
          ctx.fillStyle="black";
          ctx.fillRect(0,0,canv.width,canv.height);
          
          ctx.fillStyle="lime";
          for(vat i= 0; i<trail.length;i++){
          ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
            if(trail[i].x==px && trail[i].y==py){
              tail = 5;
          }
         }
          trail.push({x:px,y:py});
          while(trail.length>tail){
            trail.shift();
          }
          
          
          if(ax==px && ay==py) {
            tail++;
            ax=Math.floor(Math.random()*tc);
            ay=Math.floor(Math.random()*tc);
          }
          ctx.fillStyle="red";
          ctx.filRect(ax*gs,ay*gs,gs-2,gs-2);
        }
        function keyPush(evt) {
          switch(evt.keyCode) {
            case 37:
              xv=1;yv=0;
              break;
            case 38:
              xv=0;yv=1;
            case 39:
              xv=1;yv=0;
              break;
                  case 34:
              xv=0;yv=1;
              break;
          }
        }
      </script>
  <script>
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
</script>

</body>
</html>
