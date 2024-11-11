<script setup></script>

<template>
    <div class="stack">
        <div class="stack-list">
            <div>
                <img src="/assets/stack/css.svg" alt="CSS">
            </div>
            <div>
                <img src="/assets/stack/html.svg" alt="HTML">
            </div>
            <div>
                <img src="/assets/stack/javascript.svg" alt="JavaScript">
            </div>
            <div>
                <img src="/assets/stack/jest.svg" alt="Jest">
            </div>
            <div>
                <img src="/assets/stack/nodejs.svg" alt="NodeJS">
            </div>
            <div>
                <img src="/assets/stack/nuxt.svg" alt="Nuxt">
            </div>
            <div>
                <img src="/assets/stack/storybook.svg" alt="Storybook">
            </div>
            <div>
                <img src="/assets/stack/typescript.svg" alt="TypeScript">
            </div>
            <div>
                <img src="/assets/stack/vue.svg" alt="Vue">
            </div>
            <div>
                <img src="/assets/stack/webpack.svg" alt="Webpack">
            </div>
            <div>
                <img src="/assets/stack/svelte.svg" alt="Svelte">
            </div>
            <div>
                <img src="/assets/stack/vite.svg" alt="Vite">
            </div>
        </div>
    </div>
</template>

<style>
.stack-list {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(6, 58px);
}

@media (max-width: 640px) {
    .stack-list {
        grid-template-columns: repeat(6, auto);
    }
}

.stack-list div {
    display: flex;
    align-items: center;
}

.stack-list div img {
    width: 100%;
}
</style>