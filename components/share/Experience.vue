<script setup>
import Jobs from '../../data/jobs';
</script>

<template>
    <section class="experience">
        <div class="container">
            <h3>Более 10 лет опыта</h3>
            <div class="experience-table">
                <div v-for="(job, jobIndex) in Jobs" :key="jobIndex" class="experience-table__row">
                    <div class="experience-date">{{ job.startAt }} — {{ job.endAt }} / {{ job.companyLocation }}</div>
                    <div class="experience-company">{{ job.companyName }}</div>
                    <div class="experience-position">{{ job.position }}</div>
                    <a v-if="job.companyLink" :href="job.companyLink" target="_blank" class="experience-link"></a>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.experience {
    position: relative;
    padding: 40px 0;
    z-index: 1;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: #fff;
}

.experience-table .experience-table__row {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px 0;
    border-bottom: 1px solid #dedede;
}

.experience-table .experience-table__row:last-child {
    border-bottom: 0;
}

.experience-table .experience-date {
    color: var(--gray-color);
}

.experience-table .experience-company {
    font-weight: 600;
}

.experience-table__row:hover .experience-company {
    color: #2c39f2;
}

.experience-table .experience-link {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: var(--gray-color);
}

.experience-table .experience-link:hover {
    color: #2c39f2;
}

.experience-table .experience-link:after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 16px;
    right: 0;
    width: 48px;
    height: 48px;
    mask: url('../../assets/arrow.svg');
    background-color: currentColor;
}
</style>