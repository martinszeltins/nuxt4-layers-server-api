<template>
    <div>
        <h1>Events Page</h1>

        <div>API response</div>
        <div>{{ data }}</div>
    </div>
</template>

<script setup lang="ts">
    const { data } = await useFetch('/api/events')
</script>
