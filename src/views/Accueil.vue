<template>
  <div>

    <header>
      <div id="header_bg">
        <div>
          <h2>SITE OFFICIEL DE</h2>
          <h1>TEDDY RINER</h1>
        </div>
      </div>
    </header>

    <main>
      <section id="section_biographie_accueil">
        <div id="content_biographie">
          <div>
            <h3>QUI EST TEDDY RINER ?</h3>
            <p>Teddy Riner est né le 7 avril 1989 à Pointe-à-Pitre, en Guadeloupe. Débordant d’énergie, Teddy s’essaye,
              dès 5 ans, à l’escalade, au golf, au tennis, à la natation, au football… et bien sûr au judo ! Mais très
              vite, il faut choisir car il ne faut pas négliger les études, Teddy optera donc pour le judo. « J’avais
              déjà
              de très bons résultats », avoue-t-il. « Mon choix a été en partie guidé par mes performances ». </p>
            <a href="" class="button_style">DÉCOUVRIR</a></div>
          <img id="biographie_img" src="../assets/media/accueil/biographie_accueil_nobg.png" alt="">
        </div>
      </section>
      <section id="section_combats_accueil">
        <div id="content_combats">
          <div>

            <h3>QU'EN EST-IL DE SES COMBATS ?</h3>
            <p>Alors que Teddy Riner veut étendre son incroyable série de 128 succès, retour sur cette performance de
              haut-vol dans le monde du sport.
            </p>
            <a href="" class="button_style">DÉCOUVRIR</a></div>
          <img id="combats_img" src="../assets/media/accueil/combats_accueil_nobg.png" alt="">
        </div>
      </section>
      <section id="section_academie_accueil">
        <div id="content_academie">
          <div>

            <h3>L'ACADÉMIE TEDDY RINER</h3>
            <p>Comme tout immense champion, Teddy a sa méthode d’entraînement et une rigueur infaillible.
              Maintenant, il va être possible d’apprendre en partie la méthode Teddy Riner, tout en s’amusant.
              Pour tous les enfants de 8 à 17 ans, licenciés de judo, il suffit de s’inscrire pour perfectionner son
              judo
              à ses côtés.</p>
            <a href="" class="button_style">DÉCOUVRIR</a></div>
          <img id="academie_img" src="../assets/media/accueil/academie_accueil_nobg.png" alt="">
        </div>
      </section>
    </main>


  </div>
</template>

<script>

export default {
  name: "Accueil",
  components: {}
}
</script>

<style lang="less" scoped>

header {
  height: 100vh;
  width: 100%;

  & #header_bg {
    background-image: url("../assets/content/header_accueil_bg.jpg");
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
      position: relative;
      top: 25vh;
      left: 50vw;
      justify-content: center;

      & h2 {
        font-size: 42px;
      }

      & h1 {
        font-size: 72px;
      }
    }
  }
}

main {
  width: 100%;


  & h3 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 35px;
  }

  & p {
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 35px;

  }

  & img {
    &#biographie_img {
      width: 30vw;
      height: 30vw;
      margin-top: auto;

    }
    &#combats_img {
      width: 45vw;
      height: calc( 45vw / 1.5);
      margin: auto;
    }
    &#academie_img {
      width: 40vw;
      height: calc( 40vw / 1.5);
      margin: auto;
    }
  }

  #content_combats {
    display: flex;
    & #combats_img {
      order: -1;
    }
  }

  & a {
    font-size: 24px;
    font-weight: bolder;
    padding: 0 10px;
    border: var(--black) 2px solid;
    color: var(--black);
    text-decoration: none;
    margin-bottom: 35px;

  }

  & section {
    width: 100%;
    height: 750px;

    & div {
      width: 100%;
      height: 100%;

      & > div {
        padding: 200px 100px 0 0;
        width: 50%;
      }
    }
  }

  & #content_academie, & #content_combats, & #content_biographie {
    width: 1320px;
    margin: 0 auto;
    display: flex;
  }

  & #content_academie, & #content_biographie {
    & div {
      padding-left: 100px;
      border-left: var(--black) 2px solid;
    }
  }

  & #section_biographie_accueil {
    background-color: var(--white);
  }

  & #section_combats_accueil {
    background-color: var(--black);

    & a {
      border: var(--white) 2px solid;
    }

    & * {
      color: var(--white);
    }
  }

  & #section_academie_accueil {
    background-color: var(--brown);
  }

}


</style>
