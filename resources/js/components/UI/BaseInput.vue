<template>
  <input :type="type">
</template>

<script>
export default {
props:['type']
}
</script>

<style lang="scss" scoped>
$primary: rgb(148,148,148);
$shadowGrey: #54595f;
$secondary: rgb(18,39,68);

  input {
    cursor: text;
    display: block;
    width: 75%;
    padding: 0.15rem;
    border-radius: 7px;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    padding: 6px 0px 6px 3px;
    margin: 15px auto;
    border: 1px solid rgba(148,148,148, .7);
}

input:focus {
    box-shadow: 0 0 5px $secondary;
    padding: 6px 0px 6px 3px;
    border: 1px solid $secondary;
    background-color: $primary;
}


</style>
