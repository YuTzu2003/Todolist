<template>
    <div class="input-group mb-3">  
        <input type="text" class="form-control mx-2" placeholder="輸入標題" aria-label="Recipient's username" v-bind:value="input_text" @change="TodoTextChange">
        <input type="datetime-local" class="form-control mx-2" placeholder="輸入時間" v-bind:value="input_time" @change="TodoTimeChange">
        <button type="button" class="btn btn-dark" @click="Addtodo_text">新增</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import {v1} from "uuid";
    export default {
    
        methods:{
            ...mapActions(["Addtodos"]),
            TodoTextChange(e){
                this.input_text = e.target.value;
            },

            TodoTimeChange(e){
                this.input_time = e.target.value;
            },

            Addtodo_text(){
                this.Addtodos({
                    id:v1(),
                    title:this.input_text,
                    time:this.input_time
                });
            this.input_text="";
            this.input_time="";
            }
        },   
        data(){
            return{
                input_text:"",
                input_time:""
            };
        }
    };
</script>

<style>

</style>