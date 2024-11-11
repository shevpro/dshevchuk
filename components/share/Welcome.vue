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
.profile {
    display: grid;
    grid-template-columns: 430px 1fr;
}

@media (max-width: 1280px) {
    .profile {
        grid-template-columns: 1fr;
    }
}

.profile .profile-avatar {
    overflow: hidden;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    margin-bottom: 32px;
    user-select: none;
    pointer-events: none;
    background-color: #f5f5f5;
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
    background-image: linear-gradient(to right, #FFB147, #FF7E5C, #FF6C63, #B86ADF);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
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