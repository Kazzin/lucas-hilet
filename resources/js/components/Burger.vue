<style lang="scss" scoped>
#burger {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
}
  
#burger-container {
    position: fixed;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
    z-index: 2;
}

@media (min-width: 768px) {
    #burger-container {
        display: none;
    }
}
</style>

<template>
  <div>
    <span id="burger-container">
      <div id="burger"></div>
      <div id="burger"></div>
      <div id="burger"></div>
    </span>
  </div>
</template>

<script>
export default {};
</script>