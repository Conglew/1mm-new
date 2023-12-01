<template>
    <div class="homeCase">
        <div class="Tittle">
            <h1>執行案例</h1>
            <!-- <p>描述描述描述描述描述描述描述描述描述描述描述</p> -->
        </div>

        <div class="imgLibrary" :style="imgLibraryStyle">
            <div class="imgLibraryGroup">
                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(1)">
                        <!-- <img v-show="showCover01" :src="require('@/assets/video/messageImage_1700644437162.jpg')" alt="Video Cover" class="videoContent"> -->
                        <!-- <video v-show="!showCover01" ref="videoRef1" class="videoContent" @ended="showCover01 = true" >
                            <source :src="require('@/assets/video/空白15s版.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/uKvj5LYPs3Y?si=LxUraNyMLfgzowfF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>

                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(2)">
                        <!-- <img v-show="showCover02" :src="require('@/assets/video/messageImage_1700643974087.jpg')" alt="Video Cover" class="videoContent"> -->
                        <!-- <video v-show="!showCover02" ref="videoRef2" class="videoContent" @ended="showCover02 = true" >
                            <source :src="require('@/assets/video/SWC手工皮件.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/YIXCpkvY04I?si=6K8gOs5ZmK1VniTZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>

                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(3)">
                        <!-- <img v-show="showCover03" :src="require('@/assets/video/messageImage_1700644413802.jpg')" alt="Video Cover" class="videoContent"> -->
                        <!-- <video v-show="!showCover03" ref="videoRef3" class="videoContent" @ended="showCover03 = true" >
                            <source :src="require('@/assets/video/空白情節版.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/zXnU06ya5cU?si=N6ZnX7yfibGAncFb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>

                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(4)">
                        <!-- <img v-show="showCover04" :src="require('@/assets/video/messageImage_1700644274634.jpg')" alt="Video Cover" class="videoContent"> -->
                        <!-- <video v-show="!showCover04" ref="videoRef4" class="videoContent" @ended="showCover04 = true" >
                            <source :src="require('@/assets/video/OMM-渣男炸物 完整版.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/PXbI5g-NjEY?si=1HKpGGIxRoabk6Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>
            </div>

            <div class="imgLibraryGroup">
                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(5)">
                        <!-- <img v-show="showCover05" :src="require('@/assets/video/messageImage_1700644217947.jpg')" alt="Video Cover" class="videoContent">
                        <video v-show="!showCover05" ref="videoRef5" class="videoContent" @ended="showCover05 = true" >
                            <source :src="require('@/assets/video/OMM-幹話美甲 完整版.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/Gt1ilni2jaw?si=h9yTEMZ2ov6y2fem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>

                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(6)">
                        <!-- <img v-show="showCover06" :src="require('@/assets/video/messageImage_1700644158858.jpg')" alt="Video Cover" class="videoContent">
                        <video v-show="!showCover06" ref="videoRef6" class="videoContent" @ended="showCover06 = true" >
                            <source :src="require('@/assets/video/OMM-Chill pizza 完整版.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/VblbvcUQVWM?si=iiCn4TCuaisKQJEC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>

                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(7)">
                        <!-- <img v-show="showCover07" :src="require('@/assets/video/messageImage_1700644349852.jpg')" alt="Video Cover" class="videoContent">
                        <video v-show="!showCover07" ref="videoRef7" class="videoContent" @ended="showCover07 = true" >
                            <source :src="require('@/assets/video/OMM-地方茶院 完整版.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/XuI7j7fRy54?si=FYwgBNxsUnA8mt-B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>

                <div class="imgItem">
                    <div class="imgThumbnail" @click="playVideo(8)">
                        <!-- <img v-show="showCover08" :src="require('@/assets/video/messageImage_1700644064767.jpg')" alt="Video Cover" class="videoContent">
                        <video v-show="!showCover08" ref="videoRef8" class="videoContent" @ended="showCover08 = true" >
                            <source :src="require('@/assets/video/OMM-KK cafe 完整版.mp4')" type="video/mp4">
                        </video> -->
                        <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/eUc5-46Nn-M?si=UM9Guj7NZZCZy7S8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <!-- <div class="imgContent">
                        <h2>短影音</h2>
                        <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                    </div> -->
                </div>
            </div>

        </div>

        <div class="nav-library">
          <div ref="firstDiv" @click="handleRightArrowClick"></div>
          <div ref="lastDiv" @click="handleRightArrowClick"></div>
        </div>

        <div class="arrowGroup">
            <div style="display: flex; justify-content: space-between;width: 80%;">
                <div class="leftArrow" :style="{ visibility: isRight ? 'visible' : 'hidden' }" @click="handleRightArrowClick"></div>
                <div class="rightArrow" :style="{ visibility: !isRight ? 'visible' : 'hidden' }" @click="handleRightArrowClick"></div>
            </div>
        </div>
    </div>

    <div class="homeCase-ph">
        <div class="Tittle">
            <h1>執行案例</h1>
            <!-- <p>描述描述描述描述描述描述描述描述描述描述描述</p> -->
        </div>

        <div class="imgLibrary" :style="imgLibraryPHStyle" ref="imgLibraryRef">
            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(1)">
                    <!-- <img v-show="showCover01" :src="require('@/assets/video/messageImage_1700644437162.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover01" ref="videoRef09" class="videoContent" @ended="showCover01 = true" >
                        <source :src="require('@/assets/video/空白15s版.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/uKvj5LYPs3Y?si=LxUraNyMLfgzowfF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>

            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(2)">
                    <!-- <img v-show="showCover02" :src="require('@/assets/video/messageImage_1700643974087.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover02" ref="videoRef10" class="videoContent" @ended="showCover02 = true" >
                        <source :src="require('@/assets/video/SWC手工皮件.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/YIXCpkvY04I?si=6K8gOs5ZmK1VniTZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>

            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(3)">
                    <!-- <img v-show="showCover03" :src="require('@/assets/video/messageImage_1700644413802.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover03" ref="videoRef11" class="videoContent" @ended="showCover03 = true" >
                        <source :src="require('@/assets/video/空白情節版.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/zXnU06ya5cU?si=N6ZnX7yfibGAncFb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>

            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(4)">
                    <!-- <img v-show="showCover04" :src="require('@/assets/video/messageImage_1700644274634.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover04" ref="videoRef12" class="videoContent" @ended="showCover04 = true" >
                        <source :src="require('@/assets/video/OMM-渣男炸物 完整版.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/PXbI5g-NjEY?si=1HKpGGIxRoabk6Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>

            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(5)">
                    <!-- <img v-show="showCover05" :src="require('@/assets/video/messageImage_1700644217947.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover05" ref="videoRef13" class="videoContent" @ended="showCover05 = true" >
                        <source :src="require('@/assets/video/OMM-幹話美甲 完整版.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/Gt1ilni2jaw?si=h9yTEMZ2ov6y2fem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>

            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(6)">
                    <!-- <img v-show="showCover06" :src="require('@/assets/video/messageImage_1700644158858.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover06" ref="videoRef14" class="videoContent" @ended="showCover06 = true" >
                        <source :src="require('@/assets/video/OMM-Chill pizza 完整版.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/VblbvcUQVWM?si=iiCn4TCuaisKQJEC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>

            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(7)">
                    <!-- <img v-show="showCover07" :src="require('@/assets/video/messageImage_1700644349852.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover07" ref="videoRef15" class="videoContent" @ended="showCover07 = true" >
                        <source :src="require('@/assets/video/OMM-地方茶院 完整版.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/XuI7j7fRy54?si=FYwgBNxsUnA8mt-B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>

            <div class="imgItem">
                <div class="imgThumbnail" @click="playVideo_ph(8)">
                    <!-- <img v-show="showCover08" :src="require('@/assets/video/messageImage_1700644064767.jpg')" alt="Video Cover" class="videoContent">
                    <video v-show="!showCover08" ref="videoRef16" class="videoContent" @ended="showCover08 = true" >
                        <source :src="require('@/assets/video/OMM-KK cafe 完整版.mp4')" type="video/mp4">
                    </video> -->
                    <iframe class="videoContent" width="560" height="315" src="https://www.youtube.com/embed/eUc5-46Nn-M?si=UM9Guj7NZZCZy7S8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <!-- <div class="imgContent">
                    <h2>短影音</h2>
                    <p>說明說明說明說明說明說明<br>說明說明說明說明說明說明</p>
                </div> -->
            </div>
        </div>

        <div class="arrowGroup">
            <div class="leftArrow" @click="handleleftArrowClick_ph"></div>
            <div class="rightArrow"  @click="handleRightArrowClick_ph"></div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default{
    name: "HomeView",
    data() {
        return{
            isRight: false,
            isMoving: false,
            currentNum: 0,
            showCover01: true,
            showCover02: true,
            showCover03: true,
            showCover04: true,
            showCover05: true,
            showCover06: true,
            showCover07: true,
            showCover08: true,
            imgLibraryStyle: {
                transform: 'translateX(0)',
            },
            imgLibraryPHStyle: {
                transform: 'translateX(0)',
            },
            imgLibraryNum: 0,
        }
    },
    methods: {
        handleRightArrowClick() {
            // const windowWidth = window.innerWidth;
            
            if(!this.isRight) {

                // if (windowWidth > 1800) {
                //     this.imgLibraryStyle.transform = 'translateX(-25%)';
                // } else {
                //     this.imgLibraryStyle.transform = 'translateX(-50.5%)';
                // }
                this.imgLibraryStyle.transform = 'translateX(-50.5%)';
                this.$nextTick(() => {
                    this.$refs.firstDiv.style.width = '15px';
                    this.$refs.firstDiv.style.borderRadius = '50%';
                    this.$refs.lastDiv.style.width = '40px';
                    this.$refs.lastDiv.style.borderRadius = '35px';
                });
            } else {
                this.imgLibraryStyle.transform = 'translateX(0%)';
                this.$nextTick(() => {
                    this.$refs.firstDiv.style.width = '40px';
                    this.$refs.firstDiv.style.borderRadius = '35px';
                    this.$refs.lastDiv.style.width = '15px';
                    this.$refs.lastDiv.style.borderRadius = '50%';
                });
            }

            this.isRight = !this.isRight;

            // this.$refs.videoRef1.pause();
            // this.$refs.videoRef2.pause();
            // this.$refs.videoRef3.pause();
            // this.$refs.videoRef4.pause();
            // this.$refs.videoRef5.pause();
            // this.$refs.videoRef6.pause();
            // this.$refs.videoRef7.pause();
            // this.$refs.videoRef8.pause();
            this.coverVideo();
        },
        handleRightArrowClick_ph() {
            if(this.isMoving == true) {
                return;
            }
            if(this.imgLibraryNum === 7) {
                return
            }

            this.isMoving = true;
            const imgLibraryElement = this.$refs.imgLibraryRef;
            const computedStyle = window.getComputedStyle(imgLibraryElement);
            const currentTransform = computedStyle.transform;

            // 解析当前的 matrix 值
            const matrix = new DOMMatrixReadOnly(currentTransform);
            
            // 获取当前的水平移动值（以像素为单位）
            const currentTranslateX = matrix.m41;

            // 定义每次移动的百分比值
            const movePercentage = 100/8; // 这里可以根据需求修改移动的百分比

            // 将百分比转换为像素值，根据当前容器的宽度进行计算
            const containerWidth = imgLibraryElement.clientWidth;
            const pixelsToMove = (containerWidth / 100) * movePercentage;

            // 计算新的水平移动值
            const newTranslateX = currentTranslateX - pixelsToMove;

            this.imgLibraryNum += 1;

            // 设置新的 transform 样式
            imgLibraryElement.style.transform = `translateX(${newTranslateX}px)`;
            // console.log(newTranslateX);
            setTimeout(() => {
                this.isMoving = false;
            }, 250);
        },
        handleleftArrowClick_ph() {
            if(this.isMoving == true) {
                return;
            }
            if(this.imgLibraryNum === 0) {
                return;
            }

            this.isMoving = true;
            const imgLibraryElement = this.$refs.imgLibraryRef;
            const computedStyle = window.getComputedStyle(imgLibraryElement);
            const currentTransform = computedStyle.transform;

            // 解析当前的 matrix 值
            const matrix = new DOMMatrixReadOnly(currentTransform);
            
            // 获取当前的水平移动值（以像素为单位）
            const currentTranslateX = matrix.m41;

            // 定义每次移动的百分比值
            const movePercentage = 100/8; // 这里可以根据需求修改移动的百分比

            // 将百分比转换为像素值，根据当前容器的宽度进行计算
            const containerWidth = imgLibraryElement.clientWidth;
            const pixelsToMove = (containerWidth / 100) * movePercentage;

            // 计算新的水平移动值
            const newTranslateX = currentTranslateX + pixelsToMove;

            this.imgLibraryNum -= 1;

            // 设置新的 transform 样式
            imgLibraryElement.style.transform = `translateX(${newTranslateX}px)`;
            // console.log(newTranslateX);
            setTimeout(() => {
                this.isMoving = false;
            }, 250);
        },
        coverVideo() {
            this.showCover01 = true;
            this.showCover02 = true;
            this.showCover03 = true;
            this.showCover04 = true;
            this.showCover05 = true;
            this.showCover06 = true;
            this.showCover07 = true;
            this.showCover08 = true;

            // this.$refs.videoRef1.pause();
            // this.$refs.videoRef2.pause();
            // this.$refs.videoRef3.pause();
            // this.$refs.videoRef4.pause();
            // this.$refs.videoRef5.pause();
            // this.$refs.videoRef6.pause();
            // this.$refs.videoRef7.pause();
            // this.$refs.videoRef8.pause();
        },
        coverVideo_ph() {
            this.showCover01 = true;
            this.showCover02 = true;
            this.showCover03 = true;
            this.showCover04 = true;
            this.showCover05 = true;
            this.showCover06 = true;
            this.showCover07 = true;
            this.showCover08 = true;

            // this.$refs.videoRef09.pause();
            // this.$refs.videoRef10.pause();
            // this.$refs.videoRef11.pause();
            // this.$refs.videoRef12.pause();
            // this.$refs.videoRef13.pause();
            // this.$refs.videoRef14.pause();
            // this.$refs.videoRef15.pause();
            // this.$refs.videoRef16.pause();
        },
        playVideo(index) {

            if(index == this.currentNum) {
                // this.$refs.videoRef1.pause();
                // this.$refs.videoRef2.pause();
                // this.$refs.videoRef3.pause();
                // this.$refs.videoRef4.pause();
                // this.$refs.videoRef5.pause();
                // this.$refs.videoRef6.pause();
                // this.$refs.videoRef7.pause();
                // this.$refs.videoRef8.pause();
                this.currentNum = 0;
                return;
            } else if(index !== this.currentNum) {
                this.currentNum = index;
            }

            this.coverVideo();

            switch(index) {
                case 1:
                    this.showCover01 = false;
                    // this.$refs.videoRef1.currentTime = 0;
                    // this.$refs.videoRef1.play();
                    break;
                case 2:
                    this.showCover02 = false;
                    // this.$refs.videoRef2.currentTime = 0;
                    // this.$refs.videoRef2.play();
                    break;
                case 3:
                    this.showCover03 = false;
                    // this.$refs.videoRef3.currentTime = 0;
                    // this.$refs.videoRef3.play();
                    break;
                case 4:
                    this.showCover04 = false;
                    // this.$refs.videoRef4.currentTime = 0;
                    // this.$refs.videoRef4.play();
                    break;
                case 5:
                    this.showCover05 = false;
                    // this.$refs.videoRef5.currentTime = 0;
                    // this.$refs.videoRef5.play();
                    break;
                case 6:
                    this.showCover06 = false;
                    // this.$refs.videoRef6.currentTime = 0;
                    // this.$refs.videoRef6.play();
                    break;
                case 7:
                    this.showCover07 = false;
                    // this.$refs.videoRef7.currentTime = 0;
                    // this.$refs.videoRef7.play();
                    break;
                case 8:
                    this.showCover08 = false;
                    // this.$refs.videoRef8.currentTime = 0;
                    // this.$refs.videoRef8.play();
                    break;
                default:
                    break;
            }
        },
        playVideo_ph(index) {

            if(index == this.currentNum) {
                // this.$refs.videoRef09.pause();
                // this.$refs.videoRef10.pause();
                // this.$refs.videoRef11.pause();
                // this.$refs.videoRef12.pause();
                // this.$refs.videoRef13.pause();
                // this.$refs.videoRef14.pause();
                // this.$refs.videoRef15.pause();
                // this.$refs.videoRef16.pause();
                this.currentNum = 0;
                return;
            } else if(index !== this.currentNum) {
                this.currentNum = index;
            }

            this.coverVideo_ph();
            this.imgLibraryNum = 0;
            switch(index) {
                case 1:
                    this.showCover01 = false;
                    // this.$refs.videoRef09.currentTime = 0;
                    // this.$refs.videoRef09.play();
                    break;
                case 2:
                    this.showCover02 = false;
                    // this.$refs.videoRef10.currentTime = 0;
                    // this.$refs.videoRef10.play();
                    break;
                case 3:
                    this.showCover03 = false;
                    // this.$refs.videoRef11.currentTime = 0;
                    // this.$refs.videoRef11.play();
                    break;
                case 4:
                    this.showCover04 = false;
                    // this.$refs.videoRef12.currentTime = 0;
                    // this.$refs.videoRef12.play();
                    break;
                case 5:
                    this.showCover05 = false;
                    // this.$refs.videoRef13.currentTime = 0;
                    // this.$refs.videoRef13.play();
                    break;
                case 6:
                    this.showCover06 = false;
                    // this.$refs.videoRef14.currentTime = 0;
                    // this.$refs.videoRef14.play();
                    break;
                case 7:
                    this.showCover07 = false;
                    // this.$refs.videoRef15.currentTime = 0;
                    // this.$refs.videoRef15.play();
                    break;
                case 8:
                    this.showCover08 = false;
                    // this.$refs.videoRef16.currentTime = 0;
                    // this.$refs.videoRef16.play();
                    break;
                default:
                    break;
            }
        }
    },
    mounted() {
        AOS.init();
    }
}
</script>

<style scoped>
.homeCase, .homeCase-ph{
    top: 0; left: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}

.homeCase-ph {
    display: none;
}
.Tittle {
    margin-top: 5%;
    margin-bottom: 30px;
}

.Tittle h1 {
    font-size: 3em;
    font-family: 'NotoSansTC-Regular';
}

.imgLibrary {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 20px 0px; 
    width: 205%;
    z-index: 888;
    transition: transform 1s ease;
}

.imgLibraryGroup {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
}

.imgItem {
    text-align: center;
}

.imgThumbnail {
    /* width: 225px;
    height: 401px; */
    background-size: cover;
    background-position: center;
}

.videoContent {
    width: 225px;
    height: 401px;
    border-radius: 25px;
    box-shadow: 0 8px 8px rgba(0,0,0,0.2);
    cursor: pointer;
}

.imgContent {
    display: block;
    position: relative;
    color: #fff;
    background-color: #00000096;
    padding: 30px 15px;
    margin-top: -180px;
    transform: translateY(50px);
    transition: transform 0.5s ease;
    border-radius: 8px;
    visibility: hidden;
    position: relative;
    z-index: 888;
}

.imgItem:hover .imgContent {
    visibility: visible;
    transform: translateY(0px);
    z-index: 888;
}

.imgContent h2 {
    margin: 0 0 15px;
    font-size: 2.5rem;
}

.imgContent p {
    margin: 0;
}

.nav-library {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.nav-library div {
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    margin: 0 5px;
    cursor: pointer;
    transition: width 0.5s ease;
}

.nav-library div:first-child {
    width: 40px;
    border-radius: 35px;
}

.nav-library div:last-child {
    border-radius: 50%;
}

.arrowGroup {
    position: absolute;
    top: 148%;
    display: flex;
    justify-content: center;
    padding: 0px;
    width: 100%;
}

.leftArrow, .rightArrow  {
    /* position: absolute; */
    /* top: 150%; left: 0.75%; */
    left: 30%;
    background-image: url(@/assets/Case/left.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px; height: 50px;
    cursor: pointer;
    z-index: 888;
}

.rightArrow {
    left: 96.5%;
    background-image: url(@/assets/Case/right.png);
}

@media screen and (min-width: 1800px) {
    .Tittle {
        margin-bottom: 75px;
    }
    .Tittle h1 {
        font-size: 3rem;
    }
    /* .imgLibrary {
        width: 130%;
    } */
    .imgLibraryGroup {
        padding: 0 400px;
    }
    .arrowGroup {
        top: 145%;
    }
    .leftArrow, .rightArrow  {
        width: 80px; height: 80px;
    }
}

@media screen and (max-width: 545px) {
    .homeCase {
        display: none;
    }
    .homeCase-ph {
        margin-top: 80px;
        margin-bottom: 180px;
        display: block;
        height: 80vh;
    }
    .arrowGroup {
        top: 150%;
        justify-content: space-between;
    }
    .leftArrow {
        top: 150%;
        left: 7%;
    }
    .rightArrow {
        top: 150%;
        left: 84%;
    }
    .imgLibrary {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0; 
        width: 800%;
        left: 0%;
        z-index: 888;
        transition: transform 0.25s ease;
    }
    .Tittle h1 {
        font-size: 1.85em;
    }
}

@media screen and (max-width: 375px) {
    .homeCase-ph {
        height: 100vh;
    }
    .arrowGroup {
        top: 160vh;
        justify-content: space-between;
    }
}
</style>