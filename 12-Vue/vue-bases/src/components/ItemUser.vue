<template>
    <li>
        {{ user.name }}
    </li>
</template>

<script>

export default {
    props: ["user"]
}
</script>