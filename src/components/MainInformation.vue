<template>
    <div v-if="focus" class="main-information">
        {{ $store.state.activeUser.name }}
    </div>
    <div v-else class="main-information">
        <h1>Выберите сотрудника, чтобы посмотреть его профиль</h1>
    </div>
</template>

<script>
    export default {
        props:{
            focus:{
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>
.main-information{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    border: 1px solid rgba(0, 0, 0, .4);
    flex-direction: column;
    flex: 1;
    height: calc(100% - 60px);
}
</style>