<template>
    <div class="navigation">
            <div class="navigation-cover">
                <div class="navigation-logo">
                    <div class="nav-logo">
                        <img src="@/static/logo.png" alt="logo-lescinschi-art">
                    </div>
                </div>
                <div class="navigation-a-cover">
                    <nuxt-link exact active-class="active" to="/">Proiecte realizate</nuxt-link>
                </div>
                <div class="navigation-a-cover">
                    <nuxt-link active-class="active" to="/cautare-google/">Publicitate în Google</nuxt-link>
                </div>
                <div class="navigation-a-cover">
                    <nuxt-link active-class="active" to="/prognosis">Prognoza cumpărătorilor din Google</nuxt-link>
                </div>
                <div class="navigation-a-cover">
                    <nuxt-link active-class="active" to="#">Publicitate în FB și ING</nuxt-link>
                </div>
                <div class="navigation-a-cover">
                    <nuxt-link active-class="active" to="#">Logo & Brandign</nuxt-link>
                </div>
            </div>
        </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');    

a {
    color: white;
}

::-webkit-scrollbar { /* chrome based */
    width: 0px;  /* ширина scrollbar'a */
    background: transparent;  /* опционально */
}

html {
    -ms-overflow-style: none;  /* IE 10+ */
    scrollbar-width: none; /* Firefox */
}

.navigation {
    position: fixed;
    width: 100%;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 2;
}

.active {
    color: coral;
}

.nav-logo > img {
    height: 40px;
}

.navigation-logo {
    display: inline-block;
    vertical-align: top;
    align-self: center;
    padding: 0 20px 0 20px;
}

.navigation-cover {
    white-space: nowrap;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    height: 80px;
    justify-content: flex-start;
}

.navigation-a-cover {
    display: inline-block;
    vertical-align: top;
    align-self: center;
}

.navigation-a-cover > a {
    display: block;
    padding: 5px 10px;
    text-decoration: none;
    font-family: Lora, sans-serif;
    font-size: 20px;
    border-right: 1px solid #636363;
}

.navigation-a-projects {
    display: inline-block;
    vertical-align: top;
    align-self: center;
}

.navigation-a-projects > a {
    display: block;
    padding: 5px 10px;
    color: white;
    text-decoration: none;
    font-family: Lora, sans-serif;
    font-size: 20px;
    border-right: 1px solid #636363;
}

.navigation-a-active {
    border-bottom: 2px solid #636363;
    border-left: 2px solid #636363;
    border-right: 1px solid #636363;
    border-top: 2px solid #636363;
}

.navigation-logo-none {
    visibility: none;
}


</style>