//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//用querySelector函数获取标题的引用 并存储在myHeading变量中
//把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!”


//事件

/////////////点击弹出/////////////////////////////////////////////////////////////////
/*
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
*/
//等价于
/*
let myHTML = document.querySelector('html');
myHTML.onclick = function() {
	alert('别戳我，我怕疼。');
};
*/


////////为网页添加另一张图片，且可以切换///////////////////////////////////////////////////
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src'); //获取这张图片的src属性值
    if(mySrc === 'images/firefox.png') { //判断src的值是否等于原始图像的路径
      myImage.setAttribute('src', 'images/google.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox.png');
    }
}


///第一次访问网页时，页面将询问用户名并发出一段个性化的信息。可随时点击按钮来改变用户名 //////////////
//获取新按钮和标题的引用，并保存到变量中
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。'); //prompt函数弹出对话框
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }

  
}

myButton.onclick = function() {
     setUserName();
  }
