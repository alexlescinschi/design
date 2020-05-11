<template>
  <div>
    <!--Projects-->
        <div class="projects">
            <div class="project-4x" 
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/ideas/1_de_la_universitate_la_pensionare.html">
                    <img src="@/static/covers/9_ideas_de_la_universitate_la_pensionare_cover.png" alt="publicitate-google-broni-usi" >
                </a>
                <div class="project-title"><a href="/ideas/1_de_la_universitate_la_pensionare.html">De la universitate la pensionare: folosim evenimentele de viața clienților în Google Ads</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/projects/8_shantel/preobrajenie-2/index.html">
                    <img src="@/static/covers/8_shantel-preobrajenie-2-cover-index.png" alt="publicitate-google-broni-usi" >
                </a>
                <div class="project-title"><a href="/projects/8_shantel/preobrajenie-2/index.html">Publicitate în Facebook pentru sezonul doi la programului de slăbit „Preobrajenie”</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/projects/7_gurmania/index.html">
                    <img src="@/static/covers/7_gurmania-logo-cover-index.png" alt="альтернативный текст" >
                </a>
                <div class="project-title"><a href="/projects/7_gurmania/index.html">Logo pentru „Gurmania”</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/projects/6_stomato/stomato.html">
                    <img src="@/static/covers/6_stomato-cover-index.png" alt="альтернативный текст" >
                </a>
                <div class="project-title"><a href="/projects/6_stomato/stomato.html">Fiecare al treilea vizitator devine client la clinica „Stomato”</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="5_renovation/renovation.html">
                    <img src="@/static/covers/5_renovation-cover-index.png" alt="альтернативный текст" >
                </a>
                <div class="project-title"><a href="5_renovation/renovation.html">Repararea apartamentelor la cheie</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/projects/4_pullbox/pullbox.html">
                    <img src="@/static/covers/4_pullbox-cover-index.png" alt="альтернативный текст" >
                </a>
                <div class="project-title"><a href="/projects/4_pullbox/pullbox.html">Automobiliști la centrul de servicii auto „Pullbox”</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/projects/3_nord-services/nord-services.html">
                    <img src="@/static/covers/3_nord-services-cover-index.png" alt="альтернативный текст" >
                </a>
                <div class="project-title"><a href="/projects/nord-services/nord-services.html">Clienți la centrul de reparare a electrocasnicilor „Nord Services”</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/projects/2_bron-usi/bron-usi.html">
                    <img src="@/static/covers/2_bron-usi-cover-index.png" alt="publicitate-google-broni-usi" >
                </a>
                <div class="project-title"><a href="/projects/2_bron-usi/bron-usi.html">Generare clienți la uși din aluminiu „Broni Uși”</a></div>
            </div>
            <div class="project-4x"
              data-aos="fade-down"
              data-aos-delay="1000"
              >
                <a class="project-4x-img" href="/projects/1_retirement/retirement.html">
                    <img src="@/static/covers/1_retirement-cover-index.png" alt="альтернативный текст" >
                </a>
                <div class="project-title"><a href="/projects/1_retirement/retirement.html">Publicitate în Google pentru casă de îngrijire pentru bătrâni — „Retirement”</a></div>
            </div>
        </div>

        <nuxt-link exact active-class="active" to="/en/">in engleza</nuxt-link>

  </div>
</template>

<script>
export default {  
  head: {
      title: `Proiecte realizate | ${process.env.appName}`
  },
}
</script>

<style scoped>

.projects {
    display: flex;
    flex-direction: row;
    margin: 100px 0 5% 0;
    justify-content: space-evenly;
    flex-flow: row wrap;
}

.project-4x {
    display: flex;
    flex-direction: column;
    width: 20.5%;
    margin: 0 0 5% 0;
}

.project-4x-img {
    overflow: hidden;
}

.project-4x-img > img {
    max-width: 100%;
    height: auto;
}

.project-4x-img > img:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);-webkit-transition: all 1s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
}

.project-title > a {
    font-size: 30px;
    font-family: Lora, sans-serif;
    color: white;
    font-weight: 400;
    cursor: pointer;
    border-bottom: 2px solid #636363;
    text-decoration: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

@media screen and (max-width:1024px) {
    .project-4x {
        width: 34%;
    }
}

@media screen and (max-width: 768px) {
    .project-4x {
        width: 34%;
        margin: 0 0 10% 0;
    }
}

@media screen and (max-width: 425px) {
    .project-4x {
        width: 80%;
    }
}

</style>