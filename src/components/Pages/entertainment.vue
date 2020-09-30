<template>
    <div class="ned">

        <header>
            <router-link to="/" class="logo"><img src="~@/assets/academia.png" style="width:10rem;"></router-link>
        </header>

        <div class="container-app">
        <div class="container-quiz">
            <div class="quiz-header">
                <h1>Entertainment</h1>
            </div>

            <div class="step-progress" :style="{'width': progress + '%'}"></div>

            <div class="quiz-main" v-for="(element,index) in questions.slice(a,b)" :key="index" v-show="quiz">
                <div class="box-question">
                    <h2>Question {{b}}/{{questions.length}}</h2>
                    <p>{{element.question}}</p>
                </div>
                <div class="box-suggestions">
                    <ul>
                        <li v-for="(item,index) in element.suggestions" :key="index" :class="select ? check(item) :''" @click="selectResponse(item)">{{item.suggestion}} <div class="fas fa-check" v-if="select ? item.correct: ''"></div><div class="fas fa-times" v-if="select ? !item.correct: ''"></div></li>
                    </ul>
                </div>
            </div>
            <div class="box-score" v-if="score_show">
                <h2>Your score is</h2>
                <h2>{{score}}/{{questions.length}}</h2>
                <div class="btn-restart">
                    <button @click="restartQuiz">Restart <i class="fas fa-sync-alt"></i></button>
                    <button><router-link to="/select" class="go">Go Back</router-link></button>
                </div>
            </div>
            <div class="quiz-footer">
                <div class="box-button" v-if="progress < 100">
                    <button @click="skipQuestion" :style="!next ? 'background-color:rgb(106,128,202)' : ''">Skip</button>
                    <button @click="nextQuestion" :style="next ? 'background-color:rgb(106,128,202)' : ''">Next</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: '',
    data (){
        return{
            questions:[
                {
                    question: 'What was the name of The Spice Girls debut album in 1996?',
                    suggestions:[
                        {suggestion:'Forever'},
                        {suggestion:'Spiceworld'},
                        {suggestion:'Spice',correct:true},
                        {suggestion:'Wannabe'},
                    ]
                },
                {
                    question: "How many black keys are found on a traditional piano?",
                    suggestions:[
                        {suggestion:'32',correct:true},
                        {suggestion:'34'},
                        {suggestion:'52'},
                        {suggestion:'54'},
                    ]
                },
                {
                    question: 'What does “Valar Morghulis” mean in High Valyrian?',
                    suggestions:[
                        {suggestion:'All men must die',correct:true},
                        {suggestion:'All men must bow'},
                        {suggestion:'All men must kill'},
                        {suggestion:'All men must attack'},
                    ]
                },
                {
                    question: "What does Dumbledore give to Ron in his will?",
                    suggestions:[
                        {suggestion:'Portrait',},
                        {suggestion:'Invisibility cloak'},
                        {suggestion:'Wand',},
                        {suggestion:'Deluminator',correct:true},
                    ]
                },
                {
                    question: "In what month were all six original Star Wars films released?",
                    suggestions:[
                        {suggestion:'March'},
                        {suggestion:'May',correct:true},
                        {suggestion:'April'},
                        {suggestion:'June'},
                    ]
                },
            ],

            a:0,
            b:1,
            select:false,
            score:0,
            quiz:true,
            score_show:false,
            next:false,
            progress:0
        }
    },
    methods:{
        selectResponse(e){
            this.select = true;
            this.next = true;
            if(e.correct){
                this.score++;
            }
        },
        check(status){
            if(status.correct){
            return 'correct'
            }else{
            return 'incorrect'
            }
        },
        nextQuestion(){
            if(!this.next){
                return;
            }

            this.progress = this.progress + (100/this.questions.length);

            if(this.questions.length - 1 == this.a){
                this.score_show = true;
                this.quiz = false;
            }
            else{
                this.a++;
                this.b++;
                this.select = false;
                this.next = false;
            }
        },
        skipQuestion(){
            if(this.next){
                return;
            }

            this.progress = this.progress + (100/this.questions.length);

            if(this.questions.length - 1 == this.a){
                this.score_show = true;
                this.quiz = false;
            }
            else{
                this.a++;
                this.b++;
            }
        },
        restartQuiz(){
            Object.assign(this.$data, this.$options.data()); // reset data
        }
    },
    
}
</script>

<style scoped>
    .ned{
        background:linear-gradient(#0000, #000), url("~@/assets/entertainment.png");
        height:100vh;
        width: 100%;
        background-size: cover;
    }
    .container-app{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
    }
    .container-quiz{
        display: flex;
        height: 85%;
        width: 40%;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        flex-flow: column;
        text-align: center;
        border: 1px solid #e7eae0;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
    .quiz-header{
        display: flex;
        width: 100%;
        height: 20%;
        border-bottom: 1px solid #e7eae0;
        justify-content: center;
        align-items: center;
        background-color: #D5D8DC;
        border-radius: 10px 10px 0px 0px;
    }
    .quiz-main{
        display: flex;
        width: 100%;
        height: 70%;
        flex-flow: column;
        margin: auto;
        background:#ecf0f1;
    }
    .quiz-footer{
        display: flex;
        width: 100%;
        height: 10%;
        justify-content: center;
        border-top: 1px solid #e7eae0;
        background-color: #D5D8DC;
        border-radius: 0px 0px 10px 10px;
    }
    .box-question{
        margin-top:20px ;
    }
    .box-question p{
        margin-top: 20px;
    }
    .box-suggestions{
        display: flex;
        width: 100%;
        justify-content: center;
        margin: auto;
    }
    ul{
        display: flex;
        width: 80%;
        margin: 0;
        padding: 0;
        flex-flow: column;
    }
    li{
        list-style: none;
        line-height: 2;
        border: 1px solid #cdd2d2;
        margin-bottom: 20px;
        border-radius: 15px;
        cursor: pointer;
        transition: 0.6s;
    }   
    li:hover{
        background-color: #e7eae0;
    }
    li>div{
        float: right;
        margin-top: 7px;
        margin-right: 7px;
        color: #fff;
    }
    .box-button{
        display: flex;
        width: 100%;
    }
    .box-button button{
        width: 150px;
        height: 35px;
        outline: none;
        border: 0;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        border-radius: 15px;
        margin: auto;
        background-color: #a09f9ff5;
    }
    li.correct{
        border: 1px solid rgb(74, 219, 74);
        background-color: rgb(74, 219, 74);
        color: #fff;
        font-weight: 600;
    }
    li.incorrect{
        border: 1px solid rgb(240, 117, 100);
        background-color: rgb(240, 117, 100);
        color: #fff;
        font-weight: 600;
    }
    .box-score{
        display: flex;
        width: 100%;
        height: 70%;
        flex-flow: column;
    }
    .box-score h2{
        margin-top: 40px;
    }
    .btn-restart{
        display: flex;
        width: 100%;
        height: auto;
        justify-content: center;
        margin-top: 50px;
    }
    .btn-restart button{
        width: 150px;
        height: 35px;
        outline: none;
        border: 0;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        border-radius: 15px;
        margin: auto;
        background-color: #138D75;
    }
    .btn-restart button .go{
        width: 150px;
        height: 35px;
        outline: none;
        border: 0;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        border-radius: 15px;
        margin: auto;
        background-color: #138D75;
        text-decoration: none;
    }
    .step-progress{
        display: flex;
        width: 100%;
        height: 5px;
        background-color: rgb(106, 128, 202);
        transition: 0.8s;
    }
    /* @media screen and (max-width: 900px;) {
       .container-quiz{
           width: 60%;
       } 
    }
    @media screen and (max-width: 720px;) {
       .container-quiz{
           width: 80%;
       }
       .box-button button{
           width: 100px;
       } 
    } */
</style>