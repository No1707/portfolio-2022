<template>

    <div class="reseaux">
      <a href="mailto:nolanwebpro@gmail.com" target="blank"></a>
      <a href="https://github.com/No1707" target="blank"></a>
      <a href="https://www.linkedin.com/in/nolan-boisel-17nb0708ab" target="blank"></a>
    </div>

</template>

<style scoped lang="scss">
.reseaux{
    position: fixed;
    bottom: 5%;
    left: 0;
    display: flex;
    flex-direction: column;
    
    a{
        margin: 1.5em;
        height: 25px;
        width: 25px;

        &:nth-of-type(1){
            background-image: url('../assets/email.svg');
            filter: invert(44%) sepia(90%) saturate(788%) hue-rotate(144deg) brightness(93%) contrast(101%);
        }
        &:nth-of-type(2){
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(292deg) brightness(108%) contrast(95%);
            background-color: #EEEEEE;
            background-image: url('../assets/github.svg');
            background-size: 25px;
            border-radius: 3px;
        }
        &:nth-of-type(3){
            background-image: url('../assets/linkedin.svg');
        }
    }
    img:hover{
        cursor: pointer;
    }
}
</style>

<script>
    export default{
        name: 'contact-réseaux'
    }
</script>