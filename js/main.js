// 获取往期回顾列表
let reviewList = document.querySelectorAll(".review_item");
// 播放器
let videoPlayer = document.querySelector("video");
// 往期回顾视频列表src
let videoList = ["./video/Macbook.mp4","./video/iPhone.mp4","./video/iPad.mp4"];
// 播放按钮
let playBtn = document.querySelector(".play_btn");

// 切换视频
for(let i = 0 ; i < reviewList.length; i++){
    reviewList[i].addEventListener("click",() => {
        // 切换视频
        videoPlayer.src = videoList[i];
        // 如果按钮隐藏了就显示出来
        if(playBtn.style.display == "none"){
            playBtn.style.display = "block";
        }

    })
}

// 播放、暂停
playBtn.addEventListener("click",() => {
    videoPlayer.play();
    playBtn.style.display = "none";
})
videoPlayer.addEventListener("click",() => {
    videoPlayer.pause();
    if(playBtn.style.display == "none"){
        playBtn.style.display = "block";
    }
})
