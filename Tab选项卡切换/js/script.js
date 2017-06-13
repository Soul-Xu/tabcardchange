function $(id) {
	return typeof id ==='string' ?  document.getElementById(id):id;
}

window.onload = function(){
	//获取鼠标滑过或点击的标签或要切换内容的元素
	
	var titles = $('notice-tit').getElementsByTagName('li');
	var divs = $('notice-con').getElementsByTagName('div');
	if(titles.length!=divs.length) {
		return;
	}
	//遍历title下的所有li
	
		for (var i = 0;i<titles.length; i++) {
		titles[i].id = i;
		titles[i].onmouseover = function() {
			//清楚所有li上的class和所有divs上的style
			for(var j = 0;j<titles.length;j++) {
				titles[j].className = '';
				divs[j].style.display="none";
			}
			//设置当前为高亮和内容显示形式
			this.className = 'select';
			divs[this.id].style.display="block";
		};
	}

 };