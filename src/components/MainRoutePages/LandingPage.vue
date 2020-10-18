<template>
  <div class="content-wrapper">
    <div class="content">
      <div class="left">
        <p class="left-image">podcast image</p>
      </div>
      <div class="right">
        <p class="right-image"> blog image</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>
<style>

  .content-wrapper {
    width: 100%;
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .left, .right {
    height: 100%;
    width: 50%;
  }

  .right {
    border-left: 3px solid #E0FFFF;
  }

  .left-image {
    color: #E0FFFF;
  }

  .right-image {
    color: #FFE5CC;
  }

</style>