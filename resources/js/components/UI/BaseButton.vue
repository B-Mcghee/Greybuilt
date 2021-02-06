<template>
  <button  :type = 'type' :class = mode >
    <slot></slot>
  </button>
</template>

<script>
export default {
props:['type', 'mode', 'color'],


}
</script>

<style lang="scss" scoped>
$primary: rgb(148,148,148);
$shadowGrey: #54595f;
$secondary: rgb(18,39,68);
$secondaryHover: #1d3e72;

  button{
    border-radius: 1.0rem;
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: $secondary;
    border: 1px solid $secondary;
    color: white;
    cursor: pointer;
    outline: none;
  }


      button:hover,
    button:active {
     background-color: $secondaryHover ;
     border-color: $secondaryHover;
    }

    .flat {
  background-color: $primary;
  color: $secondary;
  font-weight: bold;

  border: none;
}

.flat:hover,
.flat:active {
  background-color: $shadowGrey;
}
</style>
