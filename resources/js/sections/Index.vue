<style lang="scss">
body {
            background-image: url("/../img/imagen1.jpg");
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
        }

.square {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.7);
}

#square-1 {
    animation-delay: 0.2s;
}

#square-2 {
    animation-delay: 0.6s;
}

#square-3 {
    animation-delay: 1s;
}

.title {
    font-family: 'Anton', sans-serif;
    font-size: 200%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.text {
    font-family: 'Yanone Kaffeesatz', sans-serif;
    margin-left: 25%;
}

.photo {
    height: 80px;
    width: 90px;
    margin-left: 35%;
}

#texth {
    font-family: 'Yanone Kaffeesatz', sans-serif;
    list-style: none;
    margin-top: 60px;
    font-size: 125%;
}

#large {
    animation-delay: 1.4s;
    background-color: rgba(255, 255, 255, 0.7);
    margin-top: 50px;
    height: 150px;
    text-align: center;
    vertical-align: middle;
}
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div id="square-1" class="offset-2 col-8 col-md-2 offset-md-3 square animated fadeInDown">
        <span class="title">WEB & SOCIAL</span>
        <br />
        <br />
        <ul class="text">
          <li>Design & Development</li>
          <li>Responsive Design</li>
          <li>Wordpress & Squarespace</li>
          <li>Hosting, Domains, E-mail</li>
          <li>Setting up Google Analytics</li>
          <li>Web Ad Design</li>
          <li>eCommerce Solutions</li>
          <li>Member Subscription Sites</li>
          <li>Online Donations</li>
          <li>Setting up MailChimp Templates</li>
          <li>Setting up Socia Media Accounts</li>
          <li>Social Media Graphics & Templates</li>
        </ul>

        <img src="img/pc1.png" class="photo" />
      </div>

      <div id="square-2" class="offset-2 col-8 col-md-2 offset-md-1 square animated fadeInDown">
        <span class="title">BRANDING</span>
        <br />
        <br />
        <ul class="text">
          <li>Logo Development</li>
          <li>Style Guides</li>
          <li>Brand Management</li>
          <li>Consistent Designs (Print & Web)</li>
          <li>Presentation Graphics</li>
          <li>Info Graphics</li>
        </ul>

        <img src="img/brand.png" class="photo" />
      </div>

      <div id="square-3" class="offset-2 col-8 col-md-2 offset-md-1 square animated fadeInDown">
        <span class="title">PRINT & EXHIBIT</span>
        <br />
        <br />
        <ul class="text">
          <li>Business Cards</li>
          <li>Any Printed Card or Invite</li>
          <li>Event Graphics & Poster Design</li>
          <li>Newspaper & Magazine Ads</li>
          <li>Catalogues & Reports</li>
          <li>T-shirt, Hats & Promo Products</li>
          <li>Trade Show Booths</li>
          <li>Pop Up/Roll Up Display Banners</li>
          <li>Building Signs</li>
          <li>Road Signs & Realtor Signs</li>
          <li>Oversee Printing Projects</li>
        </ul>

        <img src="img/card.png" class="photo" />
      </div>

      <div data-aos="zoom-in" id="large" class="col-md-8 offset-md-3">
        <ul id="texth">
          <li>Creo firmemente que el diseño es, ante todo, la solución a la mayoría de los problemas de comunicación de una empresa.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>