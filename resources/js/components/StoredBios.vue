<template>
    <div class="bio-container">

        <router-link v-for="bio in bios" :key="bio.Bio_Id" class="bio" tag="div" :to="{name: 'SingleBio', params: {id:bio.Bio_Id}}">
            <base-card>
                <div class="bio-pic">
                    <img :src="'/storage/images/aaron_bilal.JPG'" alt="">
                </div>
                <div class="bio-info">
                    <h1 class="text-xl">Co-Owners: Bilal Powell &#38; Aaron Witt</h1>
                    <!-- <h1>{{bio.FirstName}} {{bio.LastName}}</h1>
                    <h3>{{bio.Position}}</h3>
                    <p>{{bio.Description}}</p> -->
                </div>
            </base-card>
            <base-card>
             <div class="bio-pic">
                    <img :src="'/storage/images/kelsey_jessie.JPG'" alt="">
                </div>
                <div class="bio-info">
                    <h1 class="text-xl">Our "New Home"/ Designer Consultants:  Kelsey Witt and Jessie Powell</h1>
                    <!-- <h1>{{bio.FirstName}} {{bio.LastName}}</h1>
                    <h3>{{bio.Position}}</h3>
                    <p>{{bio.Description}}</p> -->
                </div>
            </base-card>
        </router-link>




        <!-- <Bio :bio = bio /> -->
    </div>
</template>

<script>
import Bio from './Bio'
import BaseCard from './UI/BaseCard'

export default {
    props: ['bios'],
    components: {
        Bio,
        BaseCard
    }
}
</script>

        BaseCard
<style lang="scss" scoped>
img {
    margin: 0;
    max-width: 500px;
    background-position: center;
    /* Center the image */
    background-repeat: no-repeat;
    background-size: cover;
}

.bio {
    margin: 5% auto;
    display: inline-block;

    .slot-container {
        display: flex;
        flex-direction: row;
        max-width: 60rem;
        margin: 0 10% 0 15%;
    }
    h3{
      margin: 10% 5%;
    }
    p{
      margin: 2% 5%;
    }
}

@media screen and (max-width: 1024px) {
    img {
        max-width: 100%;
    }
    .bio-container {
        .bio {
            margin: 5% auto;
        }
        .slot-container {
            display: block;
            margin: 0 10% 0 15%;
            max-width: 40rem;
        }
    }
}

@media screen and (max-width: 759px) {
    .bio-container {
        .bio {
            margin: 5% auto;
        }
        .slot-container {
            margin: 0 5% 0 15%;
            max-width: 40rem;
        }
    }
}

@media screen and (max-width: 500px) {
    .bio-container {
        .bio {
            margin: 5% 1em;
        }
        .slot-container {
            margin: 0 auto;
            max-width: 30rem;
        }
    }
}
</style>
