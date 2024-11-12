<script setup>
import StackSection from './Stack.vue';
</script>

<template>
    <section class="welcome">
        <div class="container">
            <div class="profile">
                <picture class="profile-avatar">
                    <img src="../../assets/photo.jpg" alt="Дмитрий Шевчук">
                </picture>
                <div class="profile-info">
                    <div class="profile-info__name">Дмитрий Шевчук</div>
                    <div class="profile-info__profession">фронтенд-разработчик</div>
                    <div class="profile-info__bio">
                        <p>В рабзработке с 2012 года. За это время успел поработать в заказной разработке и в продуктовых компаниях.</p>
                    </div>
                    <div class="profile-info__stack">
                        <StackSection />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
 
<style>
.welcome {
    position: relative;
    z-index: 1;
    padding: 80px 0 40px;
    background-color: #fff;
}

@media (max-width: 1280px) {
    .welcome {
        padding-top: 40px;
    }
}

.profile {
    display: grid;
    grid-template-columns: 430px 1fr;
}

@media (max-width: 1280px) {
    .profile {
        grid-template-columns: 1fr;
        padding-top: 40px;
    }
}

.profile .profile-avatar {
    position: relative;
    overflow: hidden;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    margin-bottom: 32px;
    user-select: none;
    pointer-events: none;
    border: 3px solid #2c39f2;
    background-color: #f5f5f5;
}

.profile-avatar::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 50%;
    border: 4px solid #fff;
}

@media (max-width: 960px) {
    .profile .profile-avatar {
        width: 240px;
        height: 240px;
    }
}

.profile .profile-avatar img {
    width: 100%;
}

.profile-info .profile-info__name {
    font-size: 48px;
    line-height: 48px;
    font-weight: 600;
    margin-bottom: 16px;
}

@media (max-width: 640px) {
    .profile-info .profile-info__name {
        font-size: 32px;
        line-height: 32px;
    }
}

.profile-info .profile-info__profession {
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    margin-bottom: 32px;
}

@media (max-width: 640px) {
    .profile-info .profile-info__profession {
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 24px;
    }
}

.profile-info .profile-info__bio {
    margin-bottom: 64px;
}
</style>