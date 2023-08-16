<template>
    <div v-if="users.length > 0" class="user-list">
        <n-scrollbar style="padding-right: 15px;" trigger="none">
            <user-item @focus="$emit('focus', bool)" :user="user" v-for="user in users"/>
        </n-scrollbar>
    </div>
    <h1 v-else-if="!value">Начните поиск</h1>
    <div v-else-if="isLoading" class="load">
        <div class="loading"></div>
    </div>
    <h1 v-else-if="!users.length" style="color: rgba(227, 31, 36, 1);">Не найдено</h1>
</template>

<script>
import UserItem from '@/components/UserItem'
    export default {
        components:{
            UserItem
        },
        props:{
            users:{
                type: Array,
                required: true
            },
            value:{
                type: String
            },
            isLoading:{
                type: Boolean
            }
        }
    }
</script>

<style scoped>
.user-list{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
}
.load{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(51, 51, 51, 0.1);
}
.loading{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation: i 0.8s linear infinite;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid #333;
}
@keyframes i{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

</style>