
// 获取往期回顾列表
let reviewList = document.querySelectorAll(".review-list__item");
// 播放器
let videoPlayer = document.querySelector("video");
// 播放按钮
let playBtn = document.querySelector(".play-btn");
// 视频标题
let videoTitle = document.querySelector(".video-wrapper").querySelector(".video-wrapper__title");

let backTop = document.querySelector(".backTop");


// 往期回顾接口数据
let videoList = [
    {
        title: "八周交易计划2 《我的信仰》",
        src: "./video/iPad.mp4"
    },
    {
        title: "第八集：巅峰之战！谁是黑马？",
        src: "./video/AirPods.mp4"
    },
    {
        title: "巨债承压动真格，赚钱才是真本事！",
        src: "./video/iPad.mp4"
    }
];


// 切换视频
for (let i = 0; i < reviewList.length; i++) {
    reviewList[i].addEventListener("click", () => {
        // 切换视频
        videoPlayer.src = videoList[i].src;
        videoTitle.innerText = videoList[i].title;
        // 如果按钮隐藏了就显示出来
        if (playBtn.style.display == "none") {
            playBtn.style.display = "block";
        }

    })
}

// 播放、暂停功能
playBtn.addEventListener("click", () => {
    console.log(2)
    videoPlayer.play();
    playBtn.style.display = "none";
})
videoPlayer.addEventListener("click", () => {
    videoPlayer.pause();
    if (playBtn.style.display == "none") {
        playBtn.style.display = "block";
    }
})



// 回到顶部功能
// 监听屏幕滚动
let screenHeight = window.screen.availHeight
console.log(screenHeight);

window.onscroll = () => {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("滚动距离" + scrollTop);
    if(scrollTop > screenHeight){
        backTop.style.display = "block";
    }else {
        backTop.style.display = "none";
    }
  }

//   点击回到顶部
let timer = null;
backTop.onclick =  () => {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        let oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 80;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
}