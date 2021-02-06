<template>
  <div class="slot-container">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

$primary: rgba(148,148,148, 0.5);
$secondary: rgba(18,39,68, 0.55);


.slot-container{

  border: 1px solid $primary;
  box-shadow: 0 2px 2px $primary;

  margin: 2rem 1rem;
  max-width: 30rem;


}



</style>
