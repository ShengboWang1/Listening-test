// var email   = require("emailjs");
// var server  = email.server.connect({
//     user:    "shengbo_wang2@163.com",      // 你的QQ用户
//     password:"DHXLGYGEWXZNIIGB",           // 注意，不是QQ密码，而是刚才生成的授权码
//     host:    "smtp.163.com",         // 主机，不改
//     ssl:     true                   // 使用ssl
// });


// server.send({
//     text:    e,       //邮件内容
//     from:    "shengbo_wang2@163.com",        //谁发送的
//     to:      "shengbo_wang1@163.com",       //发送给谁的
//     subject: "speech enhancement"          //邮件主题
// }, function(err, message) {
//     //回调函数
//     console.log(err || message);
// });
// function printValue()
//         {
            
//             alert(e);
//         }
// printValue();

/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
