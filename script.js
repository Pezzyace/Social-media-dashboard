const header = document.getElementById("header");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const header3 = document.getElementById("header3");
const dark = document.getElementById("dark");
const body = document.getElementById("body");
const facebook = document.getElementById("facebook");
const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");
const youtube = document.getElementById("youtube");
const mySwitch = document.getElementById("mySwitch");
const bridge1 = document.getElementById("bridge1");
const bridge2 = document.getElementById("bridge2");
const bridge3 = document.getElementById("bridge3");
const bridge4 = document.getElementById("bridge4");
const number = document.getElementById("number");
const bridge5 = document.getElementById("bridge5");
const bridge6 = document.getElementById("bridge6");
const bridge7 = document.getElementById("bridge7");
const bridge8 = document.getElementById("bridge8");

mySwitch.addEventListener("change", function() {
  if (this.checked) {
    header.style.backgroundColor = "#1f212e";
    body.style.backgroundColor = "#1e202a";
    header1.style.color = "#ffffff";
    header3.style.color = "#ffffff";
    header2.style.color = "##8b97c6";
    dark.style.color = "#8b97c6";
    facebook.style.color = "#fff";
    facebook.style.backgroundColor = "#252a41";
    twitter.style.color = "#fff";
    twitter.style.backgroundColor = "#252a41";
    instagram.style.color = "#fff";
    instagram.style.backgroundColor = "#252a41";
    youtube.style.color = "#fff";
    youtube.style.backgroundColor = "#252a41";
    bridge1.style.backgroundColor = "#252a41";
    bridge2.style.backgroundColor = "#252a41";
    bridge3.style.backgroundColor = "#252a41";
    bridge4.style.backgroundColor = "#252a41";
    bridge5.style.backgroundColor = "#252a41";
    bridge6.style.backgroundColor = "#252a41";
    bridge7.style.backgroundColor = "#252a41";
    bridge8.style.backgroundColor = "#252a41";
    number.style.backgroundColor = "#fff";
  } else {
    header.style.backgroundColor = "#f5f7ff";
    body.style.backgroundColor = "#ffffff";
    header1.style.color = "#252a41";
    header3.style.color = "#252a41";
    header2.style.color = "#63687e";
    dark.style.color = "#63687e";
    facebook.style.color = "#1e202a";
    facebook.style.backgroundColor = "#f0f2fa";
    twitter.style.color = "#1e202a";
    twitter.style.backgroundColor = "#f0f2fa";
    instagram.style.color = "#1e202a";
    instagram.style.backgroundColor = "#f0f2fa";
    youtube.style.color = "#1e202a";
    youtube.style.backgroundColor = "#f0f2fa";
    bridge1.style.backgroundColor = "#f0f2fa";
    bridge2.style.backgroundColor = "##f0f2fa";
    bridge3.style.backgroundColor = "#f0f2fa";
    bridge4.style.backgroundColor = "#f0f2fa";
    bridge5.style.backgroundColor = "#f0f2fa";
    bridge6.style.backgroundColor = "#f0f2fa";
    bridge7.style.backgroundColor = "#f0f2fa";
    bridge8.style.backgroundColor = "#f0f2fa";
  }
})

