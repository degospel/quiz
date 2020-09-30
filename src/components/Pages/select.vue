<template>
    <div class="gad">

        <header>
            <router-link to="/" class="logo"><img src="~@/assets/academia.png" style="width:10rem;"></router-link>

            
        </header>

        <div class="container fas">
            <div class="card">
                <div class="circle">
                    <h2>Technology</h2>
            </div>
        <div class="content">
            <p>Debugging is twice as hard as writing the code. If you write the code as cleverly as you're not smart enough to debug it.
            </p>
            <a><router-link to="/quis" class="bn">Start Now</router-link></a>
        </div>
    </div>
        <div class="card">
            <div class="circle">
                <h2>Sport</h2>
            </div>
            <div class="content">
                <p> “Cancer can take away all my physical abilities, it cannot touch my soul. And those three things are going to carry on.”
                </p>
                <a><router-link to="/sport" class="bn">Start Now</router-link></a>
            </div>
        </div>
        <div class="card">
            <div class="circle">
                <h2>Entertainment</h2>
            </div>
            <div class="content">
                <p>Movies can and do have tremendous influence in shaping young lives in the realm of entertainment.
                </p>
                <a><router-link to="/entertainment" class="bn">Start Now</router-link></a>
            </div>
        </div>
        <div class="card">
            <div class="circle">
                <h2>History</h2>
            </div>
            <div class="content">
                <p>History is a relentless master. It has no present, only the past rushing into the future. To try to hold fast is to be aside.
                </p>
                <a><router-link to="/history" class="bn">Start Now</router-link></a>
            </div>
        </div>
    </div>
</div>
</template>

<script>


export default {
  name: '',
  components: {
    
  }
}
</script>

<style scoped>
    header ul{
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    header ul li{
        position: relative;
        list-style: none;
    }
    header ul li p {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        color: #000;
        letter-spacing: 2px;
        font-weight: 500px;
        transition: 0.6s;
    }
    .gad{
        margin: 0 !important;
        padding: 0 !important;
        display: flex;
        min-height: 100vh;
        background: linear-gradient(45deg, #424949, #566573);
        background-attachment: fixed;
    }
    /* .fas{
        justify-content: center !important;
        align-content: center !important;
    } */
    .container{
        position: relative;
        /* width: 1150px; */
        padding-top: 20px;
        display: flex;
        justify-content: center !important;
        align-content: center !important;
        flex-wrap: wrap;
        margin-top: 3rem;
    }
    .container .card{
        position: relative;
        width: 300px;
        height: 360px;
        margin: 20px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 25px rgba(0,0,0,0.2);
        transition: 0.7s;
    }
    .container:hover .card{
        filter: blur(5px);
        transform: scale(0.9);
        opacity: 0.5;
    }
        .container .card:hover{
        filter: blur(0px);
        transform: scale(1.1);
        opacity: 1;
    }
    .container .card .circle{
        position: relative;
        width: 100%;
        height: 100%;
        background: #000;
        clip-path: circle(180px at center 0);
        text-align: center;
    }
    .container .card .circle h2{
        color: #fff;
        font-size: 3rem;
        padding: 30px 0;
    }
    .container .card .content{
        position: absolute;
        bottom: 10px;
        padding: 20px;
        text-align: center;
    }
    .container .card .content p{
        color: #666;
        font-family: 1em sans-serif;
        font-size: 15px;

    }
    .container .card .content .bn{
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        background: #000;
        color: #fff;
        border-radius: 40px;
        text-decoration: none;
        margin-top: 20px;
    }
    .container .card:nth-child(1) .circle,
    .container .card:nth-child(1) .bn{
        background: #922B21 ;
    }
    .container .card:nth-child(2) .circle,
    .container .card:nth-child(2) .bn{
        background: #212F3C;
    }
    .container .card:nth-child(3) .circle,
    .container .card:nth-child(3) .bn{
        background: #056350 ;
    }
    .container .card:nth-child(4) .circle,
    .container .card:nth-child(4) .bn{
        background: #d8a108;
    }
</style>