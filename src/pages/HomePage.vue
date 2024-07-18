<script setup>
import TextButton from "@/components/form/TextButton.vue";
import IconQuote from "@/components/icons/IconQuote.vue";
import HeaderDefault from "@/components/HeaderDefault.vue";
</script>

<template>
    <header-default/>
    <main class="home">
        <div class="home__intro">
            <div class="home__intro-back"></div>
            <div class="home__intro-container">
                <div class="home__intro-subtitle">Пройдите точный и быстрый</div>
                <h1 class="home__intro-title">Тест на<br>определение<br>IQ</h1>
            </div>
            <div class="home__intro-container">
                <div class="home__intro-btn-test">
                    <text-button color="yellow" href="/step/1">ПРОЙТИ ТЕСТ</text-button>
                </div>

                <div class="home__intro-desc">
                    <div class="home__intro-desc-text home__intro-desc-text--yellow">И получите рекомендации по развитию своего интеллекта</div>
                    <div class="home__intro-desc-text home__intro-desc-text--white">И улучшению финансового благосостояния и личной жизни</div>
                </div>
                <a href="#" class="home__intro-btn-detail">
                    <div class="home__intro-btn-detail-icon">
                        <img src="@/assets/img/detail01.png" alt="detail"/>
                    </div>
                    <div class="home__intro-btn-detail-text">Подробнее</div>
                </a>
            </div>
        </div>
        <div class="home__quote">
            <div class="home__quote-text">
                Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
                но и выработать список рекомендаций для повышения этого показателя.
                <div class="home__quote-mark-open"><icon-quote/></div>
                <div class="home__quote-mark-close"><icon-quote/></div>
            </div>
        </div>
        <div class="home__info">
            <div class="home__info-text">
                Также по результатам теста
                <strong class="home__info-text--strong">вы получите</strong>
                подробные <strong class="home__info-text--strong">советы</strong> по определению наиболее перспективной
                <strong class="home__info-text--strong">для вашего типа</strong> <b class="home__info-text--b"> интеллекта </b>
                <strong class="home__info-text--strong">сферы деятельности</strong>,
                которая принесет вам скорейший финансовый результат.
            </div>
            <div class="home__info-image">
                <img src="@/assets/img/325-01.jpg" alt="image info"/>
            </div>
            <div class="home__info-button">
                <text-button color="yellow" href="/step/1">ПРОЙТИ ТЕСТ</text-button>
            </div>
        </div>
        <div class="home__outro">
            <div class="home__outro-subtitle">
                Прохождение теста займет у вас не более
                <strong class="home__outro-subtitle--strong home__outro-subtitle--yellow">12 минут</strong>, а его
                <strong class="home__outro-subtitle--strong">результаты</strong> вы
                сможете <strong class="home__outro-subtitle--strong home__outro-subtitle--yellow">использовать всю
                жизнь.</strong>
            </div>
            <div class="home__outro-desc">
                Профессиональная интерпретация и детально проработанные рекомендации позволят вам качественно
                изменить все аспекты своей жизни: от финансового до любовного.
            </div>
            <div class="home__outro-bottom">
                <text-button color="transparent" href="/step/1">ПРОЙТИ ТЕСТ</text-button>
            </div>
        </div>
        <footer class="home__footer">
            <footer class="home__footer-copyright">
                © 2019
            </footer>
        </footer>
    </main>
</template>

<style>
.home {}

.home__intro {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    align-content: space-between;
    min-height: var(--vh);
    padding: calc(20px + var(--header-height)) 20px 20px 20px;
}

.home__intro-back {
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 500px;
    height: 100%;

    //background:
    //    url("@/assets/img/rain_bk3.png") no-repeat center,
    //    radial-gradient(circle closest-side at 50% 50%, rgba(108, 140, 238, 0.25) 0%, rgba(0, 0, 0, 0) 100%) no-repeat center;
    //background-size: 50% auto, 100%;
    /*у градиента слишком выражен переход;*/
}

.home__intro-back:before,
.home__intro-back:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.home__intro-back:before {
    width: 0;
    height: 0;
    box-shadow: 0 0 160px 60px rgba(108, 140, 238, 1);
}

.home__intro-back:after {
    width: 100%;
    height: 100%;
    background: url("@/assets/img/rain_bk3.png") no-repeat center;
    background-size: 50% auto;
}

.home__intro-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home__intro-subtitle {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-align: center;
    margin-top: 7px;
}

.home__intro-title {
    font-family: YesevaOne, serif;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
    color: #FFC700;
    margin-top: 18px;
}

.home__intro-btn-test {
    margin-top: 20px;
}

.home__intro-desc {
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-align: center;
    max-width: 300px;
    margin-top: 22px;
}

.home__intro-desc-text--yellow {
    color: #fcc720;
}

.home__intro-desc-text--white {
    color: #fff;
}

.home__intro-btn-detail {
    margin-top: 20px;
}

.home__intro-btn-detail-icon {
    text-align: center;
}

.home__intro-btn-detail-text {
    font-size: 8px;
    line-height: 10px;
    letter-spacing: 0.05em;
    text-align: center;
}





.home__quote {
    background-image:
        radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%),
        url("@/assets/img/image04.jpg");
    background-repeat: no-repeat;
    background-position: center 35px, center;
    background-size: auto, cover;
}

.home__quote-text {
    position: relative;
    font-family: Yeseva One, serif;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    padding: 83px 40px 50px 40px;
}

.home__quote-mark-open {
    position: absolute;
    top: 50px;
    left: 15px;
}

.home__quote-mark-close {
    position: absolute;
    right: 15px;
    bottom: 35px;
    transform: rotate(180deg);
}

.home__info {
    background-color: #fff;
    padding: 40px 11px;
}

.home__info-text {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #272727;
}

.home__info-text--strong,
.home__info-text--b {
    font-weight: 700;
}

.home__info-text--strong {
    text-transform: uppercase;
}

.home__info-image {
    text-align: center;
    object-fit: contain;
    margin-top: 30px;
}

.home__info-button {
    text-align: center;
    margin-top: -12px;
}





.home__outro {
    background-image: url("@/assets/img/lightning_PNG9_L.png"), url("@/assets/img/lightning_PNG9_R.png");
    background-repeat: no-repeat, no-repeat;
    background-position: left bottom, right 40px;
    padding: 54px 12px;
}

.home__outro-subtitle {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #fff;
}

.home__outro-subtitle--strong {
    font-weight: 700;
}

.home__outro-subtitle--yellow {
    color: #FFC700;
}

.home__outro-desc {
    background-color: rgba(243, 243, 242, 0.8);
    border-radius: 20px;
    font-family: Merriweather, serif;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #181818;
    padding: 30px 15px;
    margin-top: 25px;
}

.home__outro-bottom {
    text-align: center;
    margin-top: 33px;
}






.home__footer {
    padding: 13px;
}

.home__footer-copyright {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 auto;
}
</style>