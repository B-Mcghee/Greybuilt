<template>
    <div class="root">
        <h1>Meet The Team</h1>
        <stored-bios :bios="allBios" />
    </div>
</template>

<script>
import StoredBios from "../components/StoredBios";
// import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        StoredBios
    },
    data() {
        return {
            allBios: [
                {
                    FirstName: "Aaron",
                    LastName: "Witt",
                    Position: "Co-Owner",
                    Description: "Description"
                }
            ]
        };
    },
    methods: {
        // ...mapActions(['fetchBios'])
    },
    computed: {
        // ...mapGetters(['allBios'])
    }
    //   created(){
    //     this.fetchBios();
    //   }
};
</script>

<style scoped>
.root {
    text-align: center;
}
</style>
