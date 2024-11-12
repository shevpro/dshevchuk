<script setup></script>

<template>
    <section class="contacts">
        <div class="container">
            <div class="contacts-list">
                <a href="mailto:shevchuk.pro@yandex.ru" target="_blank" class="contacts-list__link">Email</a>
                <a href="https://t.me/dshevchuk_dev" target="_blank" class="contacts-list__link">Telegram</a>
                <a href="https://github.com/shevpro" target="_blank" class="contacts-list__link">GitHub</a>
            </div>
        </div>
    </section>
</template>

<style>
.contacts {
    position: sticky;
    bottom: 0;
    padding: 40px 0;
}

.contacts-list .contacts-list__link {
    display: block;
    color: #8e8e8e;
    text-decoration: none;
    font-weight: 600;
    font-size: 56px;
}

.contacts-list .contacts-list__link:hover {
    color: #2c39f2;
}
</style>