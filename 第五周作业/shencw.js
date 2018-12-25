    //Tab切换JavaScript
    var hd = document.getElementsByClassName("hd")[0].getElementsByTagName("li");
    var bd = document.getElementsByClassName("bd")[0].getElementsByTagName("li");
    for (var i = 0; i < hd.length; i++) {
      hd[i].onclick = function(){
        doTabs(this);
      }
    }
    function doTabs(obj){
      for (var i = 0; i < hd.length; i++) {
        if(hd[i]==obj){
          hd[i].className = "current";
          bd[i].className = "current";
        }else{
          hd[i].className = "";
          bd[i].className = "";
        }
      }
    }
  
    //模拟框JavaScript
    var oBtn = document.querySelector('.btn')
      var oShade = document.querySelector('.shade-box')
      var oClose = document.querySelectorAll('.close')
      oBtn.addEventListener('click', function(){
          oShade.classList.add('show')
      })
      oShade.addEventListener('click', function(e){
          if(e.target.className === 'shade-box show'){
              oShade.classList.remove('show')
          }
      })
      for (var i = 0; i < oClose.length; i++) {
          oClose[i].addEventListener('click',function(){
              oShade.classList.remove('show')
          })
      };