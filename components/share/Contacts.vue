<script setup></script>

<template>
    <section class="contacts">
        <div class="container">
            <h3>Контакты</h3>
            <div class="contacts-list">
                <a href="mailto:shevchuk.pro@yandex.ru" target="_blank" class="contacts-list__link">Email</a>
                <a href="https://t.me/dshevchuk_dev" target="_blank" class="contacts-list__link">Telegram</a>
                <a href="https://github.com/shevpro" target="_blank" class="contacts-list__link">GitHub</a>
            </div>
        </div>
    </section>
</template>

<style>
.contacts-list .contacts-list__link {
    display: block;
    color: var(--gray-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 56px;
}

.contacts-list .contacts-list__link:hover {
    color: #000;
}
</style>