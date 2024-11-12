<script setup></script>

<template>
    <section class="services">
        <div class="container">
            <h3>Услуги и цены</h3>
            <div class="services-list">
                <div class="services-list__item">
                    <h4>Вёрстка</h4>
                    <p>Создание компонентов, интерфейсов и страниц на html/css/js</p>
                    <div><b>1 800</b> р/час</div>
                </div>
                <div class="services-list__item">
                    <h4>Фронтенд на Vue</h4>
                    <p>Сбор сложных интерфейсов на Nuxt.js — самого популярного фреймворка на Vue.js</p>
                    <div><b>2 400</b> р/час</div>
                </div>
            </div>
            <div class="services__action">
                <a href="https://t.me/dshevchuk_dev" target="_blank">Обсудить проект</a>
            </div>
        </div>
    </section>
</template>

<style>
.services {
    position: relative;
    z-index: 1;
    padding: 40px 0;
    background-color: #fff;
}

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
    border: 1px solid #dedede;
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
    color: #fff;
    background-color: #2c39f2;
    padding: 16px 30px;
    border: 2px solid transparent;
}

.services__action a:hover {
    color: #2c39f2;
    border: 2px solid #2c39f2;
    background-color: #fff;
}
</style>