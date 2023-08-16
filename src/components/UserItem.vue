<template>
    <div tabindex="0" @click="$emit('mainInformation', user)" class="user">
        <div class="img__container">
            <img src="" alt="">
        </div>
        <div class="user__information">
            <h1 class="user-name" style="font-size: 14px; font-weight: 600; margin-bottom: 5px;">{{ user.name }}</h1>
            <h1 style="font-size: 14px;">{{ user.email }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            user:{
                type: Object
            }
        },
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
.user{
    display: flex;
    width: 100%;
    height: 70px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    margin: 0 0 18px 0;
}:hover{
    cursor: pointer;
    .user__information{
        background-color: rgba(224, 224, 224, .5);
    }
}
.user:focus{
    .user__information{
        background-color: rgb(224, 224, 224);
    }
    .user-name{
        margin-left: 12px;
    }
}


.img__container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: url(https://avotar.ru/avatar/krutye/70/38.jpg), lightgray 50% / cover no-repeat;
}
.user__information{
    display: flex;
    padding: 15px;
    width: auto;
    flex: 1;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    flex-direction: column;
    overflow: hidden; /* Скрываем контент, который не помещается внутри элемента */
    white-space: nowrap; /* Запрещаем перенос текста на новую строку */
    text-overflow: ellipsis;
}
</style> 