<template>
    <div class="main">
        <div class="container">
            <div class="title__container">
                <h1 class="red-title">Жилфонд</h1>
                <h1 class="user-title">Пользователь</h1>
            </div>
            <div class="main-search__container">
                <div class="search-container">
                    <h1 style="font-size: 16px; font-weight: 600; margin-bottom: 22px;">Поиск сотрудников</h1>
                    <input v-model="value" @input="sendRequest" placeholder="Введите Id или имя" type="text">
                    <h1 style="font-size: 16px; font-weight: 600; margin-bottom: 10px;">Результаты</h1>
                    <user-list @focus="func" :isLoading="isLoading" :value="value" :users="users"/>
                </div>
                <main-information :focus="focus" :user="user"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList'
import MainInformation from '@/components/MainInformation'
    export default {
        components:{
            UserList,
            MainInformation
        },
        data(){
            return{
                value: '',
                users: [],
                isLoading: false,
                focus: false,
            }
        },
        methods:{
            async sendRequest(){
                this.users = []
                this.isLoading = true
                let values = this.value.split(',').map(value => value.trim())

                let params = {
                }

                values.forEach(value => {
                    if (!isNaN(value)) {
                        if(!params.id){
                            params.id = []
                        }
                        params.id.push(Number(value))
                    }else{
                        if (!params.name) {
                            params.name = []
                        }
                        params.name.push(value)
                    }
                })
                
                const response = await axios.get('https://jsonplaceholder.typicode.com/users', {params})
                this.users = response.data
                this.isLoading = false
            },
            func(bool){
                this.focus = bool
            }
        }
    }
</script>

<style scoped>
.main{
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding: 50px;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
/*----------------------------*/
.title__container{
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 44px;
}
.red-title{
    font-size: 40px;
    font-weight: 700;
    color: rgba(227, 31, 36, 1);
}
.user-title{
    font-size: 16px;
    margin-left: auto;
}
/*----------------------------*/
.main-search__container{
    display: flex;
    align-items: center;
    width: 100%;
    height: 575px;
    border-radius: 10px;
    background: #FDFDFD;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
}
.search-container{
    display: flex;
    flex-direction: column;
    padding: 23px;
    height: 100%;
    width: 295px;
    border-right: 1px solid #E0E0E0;
}
input{
    display: flex;
    width: 100%;
    height: 46px;
    padding: 16px;
    font-size: 14px;
    border: 1px solid #E9ECEF;
    border-radius: 8px;
    margin-bottom: 22px;
}
input:focus{
    border: 1.5px solid teal;
}
</style>