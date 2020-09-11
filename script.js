window.onload = function () {







  
  //ищем элемент по селектору
  var a = document.querySelector('.widget-item1');
  //вешаем на него события
  a.onmouseout = function (e) {
    document.getElementById('hidden').style.display = 'none';
  };

  a.onmouseover = function (e) {
    document.getElementById('hidden').style.display = 'block';
  };


};