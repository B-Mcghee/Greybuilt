<template>
    <div class="bio-individual">
        <base-card>
            <h1>{{bio.FirstName}} {{bio.LastName}}</h1>
        </base-card>
        <div class="bio-flex">
            <div class="bio-image" :style="{backgroundImage: 'url(' + image +')'}">
                <!-- <img :src="bio.Image" alt=""> -->
            </div>
            <div class="bio-info">
                <h3>{{bio.Position}}</h3>
                <p>{{bio.Description}}</p>
            </div>
        </div>

    </div>
</template>

<script>
import BaseCard from './UI/BaseCard.vue';
export default {
    components:{
        BaseCard
    },
    data() {
        return {
            bio: '',
            image: ''
        }
    },
    // created: function() {
    //     axios.get('/static/bios.json')
    //         .then((response) => {
    //             this.bio = response.data.bios.filter(b => b.Bio_Id == this.$route.params.id)[0]
    //             this.image = this.bio.Image;
    //         });
    // }
}
// created: function() {
//     axios.get('http://127.0.0.1:8001/projects')
//         .then((response) => {
//             console.log(response.data[0]);
//             // this.project = response.data.projects.filter(p => p.project_id == this.$route.params.id)[0]
//            this.image = "/" +response.data[0].file_path + response.data[0].file_name + response.data[0].extension
//             // this.project = response.data.projects.filter(

//             //   data = data.id = this.$route.params.id)[0]
//             //   this.project.image = '/' + this.project.image;

//         });
</script>

<style lang="scss" scoped>
// .bio-individual{
//   margin-left: 60px;
//   text-align: center;
// }
img {
    margin: 2em auto .5em auto;
    width: 100%;
    background-position: center;
    /* Center the image */
    background-repeat: no-repeat;
    background-size: cover;
}
    .bio-individual {
        margin: 0;
        .slot-container {
            margin: 3% auto;
            text-align: center;
        }
    }
.bio-flex {
    display: grid;
    grid-template-columns: 50% 1fr;


    .bio-image {
        margin: 5% 5%;
        height: 550px;
        max-width: 100%;
        background-position: top;
        /* Center the image */
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bio-info{
      justify-content: center;
      align-self: center;
      text-align: center;
      margin-bottom: 20%;
      padding: 5%;

      h3{
        margin-bottom: 5% ;
      }
    }
}

@media screen and (max-width: 1024px) {
    .bio-flex{
    display: block;
  }
    .bio-individual {

        margin: 0 15%;
        .slot-container {
            margin: 7% auto;
            text-align: center;
        }
    }
    .bio-image {
        margin: 5% 5%;
        height: 550px;
        max-width: 100%;
        background-position: top;
        /* Center the image */
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media screen and (max-width: 759px) {
    .bio-individual {
        margin: 0 15%;
    }
    .bio-image {
        margin: 5% 5%;
        height: 400px;
        max-width: 100%;
        background-position: center;
        /* Center the image */
        background-repeat: no-repeat;
        background-size: cover;
    }
}

@media screen and (max-width: 500px) {

    .bio-individual {
        margin: 0 auto;
    }
    .bio-image {
        margin: 5% 5%;
        height: 400px;
        max-width: 100%;
        background-position: center;
        /* Center the image */
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bio-info {
        margin: 5% 5%;
    }
}
</style>
