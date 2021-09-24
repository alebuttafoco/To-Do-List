<template>
<div id="app">
    <!-- HEADER -->
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-lg">
                <a class="navbar-brand" href="/"><i class="fas fa-clipboard-list"></i></a>
        
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link" :class=" $route.path == '/' ? 'border-bottom border-2 text-white' : '' ">Attive</router-link>
                    <router-link to="/completed" class="nav-link" :class=" $route.path == '/completed' ? 'border-bottom border-2 text-white' : '' " >Completate</router-link>
                    <router-link to="/trash" class="nav-link" :class=" $route.path == '/trash' ? 'border-bottom border-2 text-white' : '' ">Cestino</router-link>
                </div>
            </div>
        </nav>
    </header>
    
    <!-- MAIN -->
    <main class="container-lg p-0">
        <router-view/>
    </main>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Padauk&display=swap');
#app {
    font-family: 'Padauk', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.1rem;
}

body {
    background-color: #d9dbd4;
}

.navbar {
    background-color: #009688 !important;
}

.navbar-brand {
    i {
        font-size: 2rem;
    }
}

.navbar-nav {
    flex-direction: row !important;
     a:not(:last-child){
         margin-right: .5rem;
     }
}

main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 991.98px) {
        margin-top: 0;
        margin-bottom: 0;
    }
}

main, .form-control, .btn {
    font-size: 1.2rem !important;
}

.my_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    cursor: pointer;
}

.my_btn, .text {
    height: 50px;
}

.fas {
    line-height: none;
    cursor: pointer;
}
</style>
