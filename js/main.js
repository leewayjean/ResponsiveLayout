// 获取往期回顾列表
let reviewList = document.querySelectorAll(".review_item");
// 播放器
let videoPlayer = document.querySelector("video");
// 播放按钮
let playBtn = document.querySelector(".play_btn");
// 视频标题
let videoTitle = document.querySelector(".video").querySelector(".title");



// 往期回顾接口数据
let videoList = [
    {
        title: "八周交易计划2 《我的信仰》",
        src: "./video/Macbook.mp4"
    },
    {
        title: "第八集：巅峰之战！谁是黑马？",
        src: "./video/iPhone.mp4"
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
            if(playBtn.style.display == "none"){
            playBtn.style.display = "block";
        }

    })
}

// 播放、暂停
playBtn.addEventListener("click", () => {
    videoPlayer.play();
    playBtn.style.display = "none";
})
videoPlayer.addEventListener("click", () => {
    videoPlayer.pause();
    if (playBtn.style.display == "none") {
        playBtn.style.display = "block";
    }
})
