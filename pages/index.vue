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
    min-height: 100vh;
    background-color: #f9f9f9;
}
</style>