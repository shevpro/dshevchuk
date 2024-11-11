<script setup>
import WelcomeSection from '../components/share/Welcome.vue';
import ServicesSection from '../components/share/Services.vue';
import ExperienceSection from '../components/share/Experience.vue';
import ContactsSection from '../components/share/Contacts.vue';
</script>

<template>
    <div class="home-page">
        <WelcomeSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactsSection />
    </div>
</template>

<style>
.home-page {
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 80px 0;
    min-height: 100vh;
}

@media (max-width: 640px) {
    .home-page {
        gap: 40px;
        padding: 40px 0;
    }
}
</style>