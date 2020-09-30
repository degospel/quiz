<template>
  <div>
    <header class="sticky">
        <a href="#" class="logo"><img src="~@/assets/academia.png" style="width:10rem;"></a>
        <ul>
            <!-- <li><p><router-link to="/" class="tex">Home</router-link></p></li> -->
            <!-- <li><p><router-link to="/quis" class="tex">Web</router-link></p></li>
            <li><p><router-link to="/history" class="tex">History</router-link></p></li>
            <li><p><router-link to="/entertainment" class="tex">Entertainment</router-link></p></li>
            <li><p><router-link to="/sport" class="tex">Sport</router-link></p></li> -->
        </ul>
    </header>
    
    <section class="banner">
        <div class="container">
            <div class="landContent">
                <h1 style="margin-top: 7rem;">Take a Test</h1>
                <h1 class="mt-2">Get Set</h1>
                <h1 class="mt-2">Be Prepared</h1>
                <h3 class="mt-2">Don't Just Surf, Solve Too.</h3>

                <button class="mt-5"><router-link to="/select" class="fer">START HERE</router-link></button>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
    
  }
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
</script>

<style>
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.6s;
        padding: 40px 100px;
        z-index: 100000;
    }

    header.sticky{
        padding: 10px 100px;
        background: #000;
    }

    header .logo{
        /* position: relative;
        font-weight: 700;
        color: #D2B48C;
        text-decoration: none;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: 0.6s;
        font-family: 'Vidaloka', serif; */
    }
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
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        background:linear-gradient(#0000, #000), url("~@/assets/sharon-mccutcheon-eMP4sYPJ9x0-unsplash.jpg");
        background-size: cover;
    }
    header.sticky li p{
        font-size: 15px;
    }
    .tex{
        color: #fff;
    }
    /* .container{
        margin-top: 10rem !important;
    } */
    .landContent{
        position: absolute;
        top: 30;
    }
    .select-head{
        position: absolute;
        top: 30;
    }
    .landContent h1{
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: #000;
        font-size: 78px;
        font-weight: 700;
    }
    .landContent h3{
        font-size: 30px;
        font-weight: 400px;
        font-family: 'Cairo', sans-serif;
        color: #fff;
    }
    .landContent button{
        width: 170px;
        height: 55px;
        outline: none;
        border: 0;
        color: rgb(209, 209, 209);
        font-size: 20px;
        cursor: pointer;
        border-radius: 20px;
        margin: auto;
        background-color: #1B2631;
        text-decoration: none;
    }
    .fer{
        text-decoration: none !important;
        color: #F6DDCC;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .banner{
                height: 800px;
            }
    }
</style>