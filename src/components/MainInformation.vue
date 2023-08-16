<template>
    <div v-if="focus" class="main-information">
        <div class="img__block">
            <div class="img-contain">
                <img src="https://avotar.ru/avatar/krutye/70/38.jpg" alt="">
            </div>
        </div>
        <div class="information__block">
            <h1 style="font-weight: 600; margin-bottom: 10px; font-size: 16px;">{{ $store.state.activeUser.name }}</h1>
            <div class="text">
                <h1><strong>email: </strong> {{ $store.state.activeUser.email }}</h1>
            </div>
            <div class="text">
                <h1><strong>phone: </strong> {{ $store.state.activeUser.phone }}</h1>
            </div>
            <h1 style="font-weight: 600; margin: 10px 0 25px 0;">О себе: </h1>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, perferendis?</h1>
        </div>
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
                default: false
            }
        }
    }
</script>

<style scoped>
.main-information{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px;
    flex: 1;
    height: calc(100% - 60px);
    gap: 60px;
}
.img__block{
    display: flex;
    flex: 1;
    height: 100%;
}
.img-contain{
    width: 100%;
    height: 286px;
    display: flex;
    background-size: cover;
}
img{
    width: auto;
    height: 286px;
}
.information__block{
    display: flex;
    flex: 1;
    height: 100%;
    min-height: 50%;
    flex-direction: column;
}
.text{
    display: flex;
    margin-bottom: 10px;
}
strong{
    font-weight: 600;
}
</style>