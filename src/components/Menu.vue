<template>
  <div id="menu">
    <nav>

      <div id="logo_menu_contener">
        <a id="logo_menu">
          <img src="../assets/content/logo_teddyriner.png" alt="logo de teddy riner">
          <h4>TEDDY <span>RINER</span></h4>
        </a>

        <div id="menu_button">
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>


      <ul id="link_list">
        <li>
          <rooter-link>BIOGRAPHIE</rooter-link>
        </li>
        <li>
          <rooter-link>COMBATS</rooter-link>
        </li>
        <li>
          <rooter-link>FONDATION</rooter-link>
        </li>
        <li>
          <rooter-link>MODIFIER</rooter-link>
        </li>
        <li>
          <rooter-link>CONTACT</rooter-link>
        </li>
      </ul>

      <div id="rs_div">
        <ul id="rs_list">
          <li><a href="https://www.facebook.com/riner.teddy/" id="fb_logo"><img src="../assets/content/rs_logo/social_fb.svg" alt="logo facebook"></a></li>
          <li><a href="https://www.instagram.com/teddyriner/" id="insta_logo"><img src="../assets/content/rs_logo/social_ig.svg" alt="logo instagram"></a>
          </li>
          <li><a href="https://twitter.com/teddyriner" id="twitter_logo"><img src="../assets/content/rs_logo/social_tw.svg" alt="logo twitter"></a>
          </li>
        </ul>
      </div>

    </nav>
  </div>
</template>

<script>

export default {
  name: 'Menu',

}



</script>


<style scoped lang="less">




#menu {
  z-index: 10;
  position: fixed;
  width: 100%;
  * {
    list-style-type: none;
  }
}

#logo_menu, nav, #link_list, #rs_list {
  display: flex;
  align-items: center;
}


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 78px;
  border: black 2px solid;
}

#link_list {
  width: 50%;

  & li {
    margin: 0 20px;
    font-weight: bold;
    font-size: 26px;

  }
}



#logo_menu {

  & h4 {
    font-size: 28px;
    font-weight: normal;

    & span {
      font-weight: bold;
      font-size: 26px;

    }
  }

  & img {
    width: 70px;
    height: auto;
    margin-left: 15px;
  }
}

#rs_div {
  margin-right: 15px;
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
