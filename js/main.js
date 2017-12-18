/**
 * Created by lenovo on 17/12/11 011.
 */
<!-- Initialize Swiper -->
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
/*音乐处理开始*/
var music=document.getElementById("music");
var musicbg=document.querySelectorAll(".musicbg")[0];
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio=document.querySelector("audio");
var flag=1;
music.onclick=function(){
    if(flag==1){
        musicbg.style.display="none";
        musicImg.style.animation="none";
        audio.pause();
        flag=0;
    }else{
        musicbg.style.display="block";
        musicImg.style.animation="music 2s linear infinite";
        audio.pause();
        flag=1;
    }
}
/*音乐处理结束*/
