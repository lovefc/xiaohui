/*
 * @Author       : lovefc
 * @Date         : 2021-05-31 14:36:35
 * @LastEditTime : 2021-05-31 17:30:43
 */
require('./css/style.css');
require('./css/fcicon.css');
require('./css/top.css');
require('./js/microlight.js');
require('./js/top.js');
require('./js/DJMask.js');
let img = require('./images/wx.png');
$("#mask").click(function () {
	DJMask.open({
		width: "340px",
		height: "450px",
		title: "生活不易,真诚感谢您的援助",
		content: "<p style=\"text-align:center;font-size:20px;\">给项目点个star,也是一种帮助哦</p><img src=\"" + img + "\" style=\"max-width:340px\">"
	});
});
let holmes = require('./js/holmes.js');
holmes({
	input: '.search input',
	find: '.results blockquote',
	placeholder: '<h3>— 搜索不到该校徽,<a target="_blank" href="https://gitee.com/lovefc/china_school_badge">向我留言</a> —</h3>',
	class: {
		visible: 'visible', hidden: 'hidden'
	}
});

const count = document.getElementsByTagName('blockquote');
document.getElementById("count").innerHTML = '(<span style="color:red;">' + count.length + '</span>个)';