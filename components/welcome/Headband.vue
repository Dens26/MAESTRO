<!-- TEMPLATE -->
<template>
    <div class=" headband d-flex justify-content-end px-3 align-items-center gap-3">
        <Button :button-class="'primary'" :button-name="$t('welcome.button_name').toUpperCase()"></Button>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
</script>


<!-- STYLE -->
<style scoped>
.headband {
    border-top: solid 2px rgb(190, 190, 190);
    border-bottom: solid 2px rgb(190, 190, 190);
    height: 75px;
}
</style>