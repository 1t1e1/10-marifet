<template>
    <div>
        <nav>
            <router-link
                v-for="link in links"
                :key="link.id"
                :to="link.page"
                class="spacing"
            >
                {{ link.text }}
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            links: [
                {
                    id: 0,
                    text: "Home",
                    page: "/",
                },
                {
                    id: 1,
                    text: "Deneme",
                    page: "/deneme",
                },
                {
                    id: 2,
                    text: "Race",
                    page: "/race",
                },
            ],
        };
    },
};
</script>

<style scoped>
.spacing {
    margin-right: 115px;
}

nav {
    background-color: aqua;
}
</style>
