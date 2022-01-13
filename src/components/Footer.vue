<template>
  <div id="footer">

    <footer>

      <div id="add">
        <a id="button_add_content"> + AJOUTER DU CONTENU</a>
      </div>

      <div id="footer_nav_content">

        <ul id="link_list">
          <li>
            <a>BIOGRAPHIE</a>
          </li>
          <li>
            <a>COMBATS</a>
          </li>
          <li>
            <a>FONDATION</a>
          </li>
          <li>
            <a>MODIFIER</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>

        <div>
          <div>
            <h4>RÉSEAUX SOCIAUX</h4>
            <div id="rs_div">
              <ul id="rs_list">
                <li><a href="https://www.facebook.com/riner.teddy/" id="fb_logo"><img
                    src="../assets/content/rs_logo/social_fb.svg" alt="logo facebook"></a></li>
                <li><a href="https://www.instagram.com/teddyriner/" id="insta_logo"><img
                    src="../assets/content/rs_logo/social_ig.svg" alt="logo instagram"></a>
                </li>
                <li><a href="https://twitter.com/teddyriner" id="twitter_logo"><img
                    src="../assets/content/rs_logo/social_tw.svg" alt="logo twitter"></a>
                </li>
              </ul>
            </div>
          </div>

          <a>MENTIONS LÉGALES</a>
        </div>

      </div>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'Footer',
}


</script>

<style scoped lang="less">


footer {
  max-width: 1320px;
  width: 100%;
  margin: 40px auto 0 auto;

  & li {
    list-style-type: none;
  }

  & a, & h4 {
    font-size: 24px;
    font-weight: bolder;
  }

  & div#add {
    text-align: center;

  }

  & div#add, & div#footer_nav_content {
    width: 100%;
    border: var(--black) 2px solid;
    margin-bottom: 40px;

  }

  & div#footer_nav_content {
    display: flex;
    justify-content: space-between;

    & > div {
      text-align: right;
      margin-right: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

    }
    & ul {
      margin-left: 100px;

      & li {
        margin-bottom: 10px;
      }
    }

    & > * {
      margin: 30px 0;
    }

  }


  & #rs_list {
    display: flex;
  }

}


#twitter_logo, #insta_logo, #fb_logo {
  background-repeat: no-repeat;
  height: 40px;
  width: 40px;
  text-indent: 9999px;
}

#twitter_logo, #insta_logo {
  margin-left: 20px;
}


</style>
