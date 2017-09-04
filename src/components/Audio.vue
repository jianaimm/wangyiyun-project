<template>
    <div class="audioControl">
        <audio src=""></audio>
        <!--播放按钮-->
        <div class="playBtn">
            <a href="javascript:;">
                <icon name="step-backward"></icon>
            </a>
            <a href="javascript:;">
                <icon scale="1.1" name="play"></icon>
            </a>
            <a href="javascript:;">
                <icon name="step-forward"></icon>
            </a>
        </div>
        <!--头像-->
        <img class="singerAvator" src=""/>
        <div class="songInfo">
            <p class="singerInfo">
                <span>歌名</span>

                <span>歌手</span>
            </p>
            <!--播放进度条-->
            <div class="progress">
                <div class="progressBar">
                <span class="progressIcon">
                    <span class="circle"></span>
                </span>
                </div>
            </div>
        </div>

        <!--时长-->
        <div class="playTime">
            <span>已播放</span>/
            <span>总时长</span>
        </div>
        <!--音量-->
        <div class="volume">
            <icon name="volume-up"></icon>
            <div class="volumeWrap">
                <span class="volumeBar">
                    <span class="volumeIcon">
                    </span>
                </span>
            </div>

        </div>

        <!--播放列表-->
        <div class="playMenu">
            <div class="playListWindow">
                <h4>播放列表<span>{{}}</span></h4>
                <ul>
                    <li>
                        <span>歌名</span>
                        <span>歌手</span>
                        <span>时长</span>

                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'audio',

    }
</script>
<style>
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    img {
        vertical-align: top;
    }
    h4,
    p {
        margin: 0;
    }
    .audioControl {
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 5px;
        width: 100%;
        height: 35px;
        background: rgba(0,0,0,.8);
        color: #fff;
        overflow: hidden;
    }
    .playBtn {
        float: left;
    }
    .playBtn a {
        display: inline-block;
        vertical-align: middle;
        padding: 3px;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        border: 2px solid #c1c1c1;
        font: 12px/17px arial,'微软雅黑';
        color: #c1c1c1;
    }
    .playBtn a:nth-of-type(1){
        text-indent: 3px;
    }
    .playBtn a:nth-of-type(2){
        width: 24px;
        height: 24px;
        text-indent: 7px;
        font: 12px/32px arial,'微软雅黑';
        color: #fff;
        border-color: #fff;
    }
    .playBtn a:nth-of-type(3){
        text-indent: 4px;
    }
    .playBtn a:hover {
        color: #fff;
        border-color: #fff;
    }
    .songInfo {
        float: left;
        width: 60%;
        margin-left: 20px;
    }
    .singerInfo {
        padding: 0 2px;
        font: 12px/20px arial,'微软雅黑';
        color: #fff;
    }
    .singerInfo span:nth-of-type(2){
        padding-left: 20px;
        color: #b0b0b0;
    }
    .progress {
        margin-top: 5px;
        height: 8px;
        background: #505050;
        border-radius: 4px;
    }
    .progressBar {
        position: relative;
        width: 50px;
        height: 8px;
        background: #c60c0c;
        border-radius: 4px;
    }
    .progressIcon {
        position: absolute;
        right: 0;
        top: -4px;
        width: 16px;
        height: 16px;
        background: #ececef;
        border-radius: 50%;
    }
    .circle {
        position: absolute;
        left: 5px;
        top: 5px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #b2170d;
    }
    .playTime {
        float: left;
        padding-top: 13px;
        margin-left: 5px;
        font: 12px/32px arial,'微软雅黑';
        color: #757575;
    }
    .playTime span:nth-of-type(1){
        color: #999d9d;
    }
    .volume {
        float: left;
        position: relative;
        margin-left: 10px;
        padding-top: 14px;
    }
    .volumeWrap {
        position: absolute;
        left: -9px;
        top: -106px;
        z-index: 9;
        width: 32px;
        height: 92px;
        padding: 10px;
        background: #292929;
    }
    .volumeBar {
        width: 4px;
        height: 92px;
        background: #181818;
        border-radius: 2px;
    }

    .playListWindow {
        display: none;
    }


</style>
