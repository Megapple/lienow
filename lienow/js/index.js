var $time=$("#time");
setInterval(()=>{
  var d1=new Date();
  var d2=new Date("2019/02/08");
  var d3=Math.floor(d1-d2)/1000;
  // console.log(d4);
  var day=Math.floor(d3/86400);
  //获取相差不满一天的秒数,转成小时
  var hours=Math.floor(d3%86400/3600);
  //相差不满一小时的分钟
  var minutes=Math.floor(d3%3600/60);
  //相差不满一分钟的秒数
  var seconds=Math.floor(d3%60);
  $time.html(`还不来闹?已经等了你${day}天${hours}小时${minutes}分钟${seconds}秒`)
},1000)