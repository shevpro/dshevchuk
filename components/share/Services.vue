<script setup></script>

<template>
    <section class="services">
        <div class="container">
            <h3>Услуги и цены</h3>
            <div class="services-list">
                <div class="services-list__item">
                    <h4>Вёрстка</h4>
                    <p>Создание компонентов, интерфейсов и страниц на html/css/js</p>
                    <div>1 800 р/час</div>
                </div>
                <div class="services-list__item">
                    <h4>Фронтенд на Vue</h4>
                    <p>Сбор сложных интерфейсов на Nuxt.js — самого популярного фреймворка на Vue.js</p>
                    <div>2 400 р/час</div>
                </div>
            </div>
            <div class="services__action">
                <a href="https://t.me/dshevchuk_dev" target="_blank">Обсудить проект</a>
            </div>
        </div>
    </section>
</template>

<style>
.services .services-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

@media (max-width: 640px) {
    .services .services-list {
        grid-template-columns: 1fr;
    }
}

.services-list .services-list__item {
    padding: 16px;
    border-radius: 10px;
    background-color: #f5f5f5;
}

.services-list__item h4 {
    margin: 0;
}

.services .services__action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
}

.services__action a {
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    text-decoration: none;
    background-image: linear-gradient(to right, #FFB147, #FF6C63, #B86ADF);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    padding: 16px 30px;
    border-radius: 10px;
    border: 1px solid #B86ADF;
}
</style>