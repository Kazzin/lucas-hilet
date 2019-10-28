<style lang="scss" scoped>
#navbar {
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  padding-top: 20px;
  text-align: center;
}

#navbar a {
  padding-bottom: 30px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  font-family: "Concert One", cursive;
  text-align: center;
}

#navbar a:hover {
  color: #f1f1f1;
  text-decoration: none;
}

#navbar ul {
  padding-top: 50px;
  list-style: none;
}

@media (max-width: 768px) {
  #navbar {
    display: none;
  }
}

#perfil {
  width: 150px;
  height: 150px;
  animation-delay: 0.3s;
  border-radius: 50%;
}

#nombre {
  animation-delay: 1s;
  font-family: "Concert One", cursive;
  color: white;
}
</style>

<template>
  <div>
    <nav id="navbar" class="animated fadeInDown">
      <img id="perfil" class="animated fadeInUp" src="img/perfil.jpg" />
      <br />
      <span id="nombre" class="animated fadeInUp">Lucas Stancich</span>
      <ul>
        <li>
          <router-link to="/" href>HOME</router-link>
        </li>
        <li>
          <router-link to="/work">WORK</router-link>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </nav>

    <Burger />
  </div>
</template>

<script>

function hideNavbar()
{
  let navbar = document.getElementById("navbar");

  navbar.style.display = "none";
  navbar.style.width = "200px";
}

function showNavbar(wdt)
{
  let navbar = document.getElementById("navbar");
  
  navbar.style.display = "initial";
  navbar.style.width = wdt;
}

function toggleNavbarByWindowWidth(wdt)
{
  if ($(window).width() < 768)
  {
    hideNavbar(wdt);
    return false;
  }

  return true;
}

$(function() {
  $("#burger-container").click(function() {
    let navbar = document.getElementById("navbar");

    if (navbar.style.display == "none") {
      showNavbar("100%");
    } else {
      hideNavbar();
    }
  });

  $("#navbar a").click(function() {
    let burger = document.getElementById("burger-container");
    
    toggleNavbarByWindowWidth("100%");
  });

  window.addEventListener("resize", function() {
    if (toggleNavbarByWindowWidth("100%"))
    {
      showNavbar("200px");
    }
  });
});

import Burger from "@/components/Burger.vue";
export default {
  components: {
    Burger
  }
};
</script>