<template lang="html">
  <div class="">
    <div class="blog-cover-img">
        <img data-src="img/1_de_la_universitate_la_pensionare/1.png" class="lazyload" alt="альтернативный текст">
    </div>
    <div class="blog-cover-h1">
        <h1>De la universitate la pensionare: folosim evenimentele din viața clienților în Google Ads</h1>
    </div>
    <div class="blog-describe">
        <p>Evenimentele din anunțurile Google se bazează pe date din toate canalele Google. Sistemul analizează comportamentul utilizatorului pe termen scurt și, dacă comportamentul coincide cu modelul pregătit, îl etichetează pe utilizator la un anumit eveniment.</p>
    </div>
    <div class="blog-describe">
        <p>La moment, există nouă tipuri de evenimente disponibile pentru publicitate în Google Ads:</p>
        <ul class="blog-describe-list">
          <li>deja s-a întâmplat;</li>
          <li>se va întâmpla în curând.</li>
        </ul>
    </div>
    <div class="blog-describe">
        <p>Această diviziune extinde domeniul de utilizare a evenimentelor: persoanele care intenționează să se mute în altă locuință pot fi publicitate pentru servicii de transport și hamali, iar celor care s-au mutat deja, se pot oferi lucruri care vor face ca locuința nouă să fie mai confortabilă, de exemplu, mobilier nou.</p>
    </div>
    <div class="blog-img">
        <img data-src="img/1_de_la_universitate_la_pensionare/2.png" class="lazyload" alt="альтернативный текст">
    </div>
    <div class="blog-describe">
        <p>Cele nouă direcționări disponibile oferă oportunități uriașe pentru majoritatea afacerilor. Numai doar auditoriul utilizatorilor care intenționează să deschidă o afacere este potrivit publicitatea serviciilor de contabilitate, serviciilor juridice, serviciilor bancare sau evenimentele de formare personală, cursuri și webinarii.</p>
    </div>
    <div class="blog-img">
        <img data-src="img/1_de_la_universitate_la_pensionare/3.jpg" class="lazyload" alt="альтернативный текст">
    </div>
    <div class="blog-describe">
        <p>Vindeți pisici și câini - demonstrați publicitatea oamenilor care intenționează să cumpere o pisică sau un câine. Ajuți la transportarea mobilierului - oferă un serviciu persoanelor care intenționează să se mute. Angajezi oameni - oferiți servicii absolvenților sau celor care intenționează să schimbe locul de muncă etc.</p>
    </div>
    <div class="blog-img">
        <img data-src="img/1_de_la_universitate_la_pensionare/4.png" class="lazyload" alt="альтернативный текст">
    </div>
    <div class="blog-describe">
        <p>Dacă intenționezi să crești nivelul de conștientizare al brandului, folosește evenimentele din viața clienților și combină evenimentul cu brandul în texte, imagini sau videoclipuri publicitare.</p>
    </div>
    <div class="blog-img">
        <img data-src="img/1_de_la_universitate_la_pensionare/5.png" class="lazyload" alt="альтернативный текст">
    </div>
    <div class="blog-describe">
        <p>Sau folosim geo local. Limitați regiunea de afișare la zona în care se află magazinul sau biroul dvs., selectați o audiență potrivită pentru produsele sau serviciile dvs. și creați publicitate relevantă pentru această audiență: dacă aveți un magazin pentru animale de companie, atunci selectați evenimente legate de animale de companie.</p>
    </div>
    <div class="blog-img">
        <img data-src="img/1_de_la_universitate_la_pensionare/6.png" class="lazyload" alt="альтернативный текст">
    </div>
    <div class="blog-describe">
        <p>Dacă afacerea dvs. nu se potrivește cu niciuna dintre cele trei opțiuni enumerate, puteți adăuga o campanie publicitară existentă creată de evenimente în modul „Observație”. Este probabil ca după ceva timp, să descoperiți că persoanele cu anumite evenimente în viață cumpără bunurile dvs. mai des sau în cantități mari. În acest caz, puteți efectua ajustări ale ofertelor pentru această audiență sau puteți crea un grup de anunțuri separat cu texte relevante.</p>
    </div>

    <!-- Next blog -->
    <div class="next-blog">
        <div class="next-blog-title">
            <p>Următorul proiect</p>
        </div>
        <div class="next-blog-name">
            <a href="/projects/8_shantel/preobrajenie-2/index.html">Publicitate în Facebook pentru sezonul doi la programului de slăbit „Preobrajenie”</a>
        </div>
        <div class="next-blog-describe">
            <p>Obiectiv: să suplinim 15 locuri în programul de pierdere a kilogramelor în plus din fitness club Shantel.</p>
        </div>
    </div>
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="@/static/covers/1_retirement-cover-index.png" alt="альтернативный текст" ></swiper-slide>
    <swiper-slide><img src="@/static/covers/1_retirement-cover-index.png" alt="альтернативный текст" ></swiper-slide>
    <swiper-slide><img src="@/static/covers/1_retirement-cover-index.png" alt="альтернативный текст" ></swiper-slide>
    <swiper-slide><img src="@/static/covers/1_retirement-cover-index.png" alt="альтернативный текст" ></swiper-slide>
    <swiper-slide><img src="@/static/covers/1_retirement-cover-index.png" alt="альтернативный текст" ></swiper-slide>
    <swiper-slide><img src="@/static/covers/1_retirement-cover-index.png" alt="альтернативный текст" ></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-space-between',
    title: 'Space between slides',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style scoped>
@import '~assets/css/ideas.css';
</style>
