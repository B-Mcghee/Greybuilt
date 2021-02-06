<template>
    <div>
        <!-- <app-main
                  :nav-links="navLinks"
                  :image-path ="require('../static/Images/logo.png')"
                  background="#333"
                  linkColor="#777"
                  hoverBackground="#999"

                ></app-main> -->
        <navigation
            :nav-links="navLinks"
            :image-path="'/storage/images/GB_Homes_Reverse.png'"
            linkColor="#777"
        />

        <!-- <app-header :nav-links="navLinks" :image-path="require('../static/Images/logo.png')"></app-header> -->
        <div class="home-image container my-10 mx-auto text-center">
            <div>
                <h1 class="title line-title text-7xl">Greybuilt Homes</h1>
            </div>
            <div class="home-image-picture">
                <img
                    class="image"
                    :src="'/storage/images/Blueprinthouse.svg'"
                    alt=""
                />
            </div>
            <hr class="line-title line" />
            <div>
                <p class="text-base text-l md:text-3xl mb-8 px-2">
                    We're so sorry, at the moment our website is also under
                    construction. Enter your email and we will let you know when
                    to come back and visit us!
                </p>
                <form :action="href" @submit="checkForm" method="post">
                    <div
                        class="bg-green-50 rounded successful-subscribe"
                        v-if="success.length"
                    >
                        <h3 class="text-xl" v-for="(item, index) in errors"
                            :key="index">
                            {{ item }}
                        </h3>
                    </div>

                    <div v-else-if="errors > 0">
                        <h3
                            class="bg-red-50 text-xl"
                            v-for="(item, index) in error"
                            :key="index"
                        >
                            {{ item }}
                        </h3>
                    </div>
                    <div class="grid ">
                        <div class=" place-self-center col-span-6 ">
                            <input
                                class="subscribe-input py-2 px-4"
                                type="email"
                                placeholder="Enter Email"
                                v-model="email"
                                name="email"
                            />
                            <input type="hidden" name="_token" :value="csrf" />
                            <button
                                class="rounded success-button  col-span-6 py-2 px-4"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <router-view />
    </div>
</template>

<script>
// import Main from '@/components/Main'
// import Header from '@/components/Header'
import Navigation from "./Navigation.vue";
import axios from 'axios';
export default {
    name: "App",
    components: {
        // 'app-main': Main,
        // 'app-header': Header,
        Navigation
    },
    data: () => ({
        navLinks: [
            {
                text: "About",
                path: "/about",
                icon: "fas fa-user"
            },
            {
                text: "Projects",
                path: "/projects",
                icon: "fas fa-hammer"
            },
            {
                text: "Home",
                path: "/",
                icon: "fas fa-home"
            },
            {
                text: "Floor Plans",
                path: "/testimonials",
                icon: "fas fa-book-open"
            },

            {
                text: "Contact Us",
                path: "/contact",
                icon: "fas fa-id-card"
            }
        ],
        email: null,
        success: [],
        error: [],
        csrf: document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
        href: "/newsletter"
    }),
    methods: {
        checkForm: function(e) {
            this.success = [];
            if (this.email) {

                this.$store.dispatch('subscribeContact', this.email);
            }
            this.error = [];

            if (!this.email) {
                this.error.push("An email is required");
                let self = this.
                setTimeout(function(){
                    console.log("it needs to update");
                }, 1000)
            }
            e.preventDefault();
            this.email = null;
        },
        clearError(){
            this.error = [];
        }
    }, computed:{
        errors:function(){
            return this.error.length;
        }
    }
};
</script>

<style lang="scss">
$DarkContrast: #262626;
$Highlight: #c2c1bf;
$InteractiveLight: #daccbe;
$Interactive: #9d7958;
$InteractiveDark: #9d7958;
$background: #fefefa;

figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 10px;
    margin-inline-end: 0;
}

#app {
    font-family: "Barlow Condensed", "Raleway", "Avenir", Helvetica, Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(18, 39, 68);
}

body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #fff;
}
.home-image {
    color: $DarkContrast;
    .home-image-picture {
        max-height: 50vh;
        overflow-y: hidden;
        margin-bottom: 10vh;
    }
    .line {
        border-bottom: solid 3px $InteractiveDark;
        margin-bottom: 5vh;
    }
    .line-title {
        animation: divider ease-in 2s;
    }
    .title {
        color: $DarkContrast;
    }
    @keyframes divider {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }
    .subscribe-input {
        border: 2px solid $Interactive;
    }
    .success-button {
        border: 2px solid $Interactive;
        background-color: $Interactive;
        font-size: 1.1em;
        font-weight: 600;
        color: #fefefa;
    }
}
.successful-subscribe {
    margin: 0 auto;
    text-align: center;
    width: 50%;
}
@media screen and (max-width: 1024px) {
    .home-image {
        color: $DarkContrast;
        .home-image-picture {
            margin-top: 5vh;
            max-height: 40vh;
            margin-bottom: 5vh;
        }
        .line {
            max-width: 90%;
            border-bottom: solid 3px $InteractiveDark;
            margin: 0 auto;
            margin-bottom: 3vh;
        }

        .subscribe-input {
            border: 2px solid $Interactive;
        }
        .success-button {
            border: 2px solid $Interactive;
            background-color: $Interactive;
            font-size: 1.1em;
            font-weight: 600;
            color: #fefefa;
        }
    }
}
@media screen and (max-width: 500px) {
    .home-image {
        color: $DarkContrast;
        .home-image-picture {
            margin-top: 5vh;
            max-height: 30vh;
            margin-bottom: 0;
        }
        .line {
            max-width: 90%;
            border-bottom: solid 3px $InteractiveDark;
            margin: 0 auto;
            margin-bottom: 3vh;
        }

        .subscribe-input {
            border: 2px solid $Interactive;
        }
        .success-button {
            border: 2px solid $Interactive;
            background-color: $Interactive;
            font-size: 1.1em;
            font-weight: 600;
            color: #fefefa;
        }
    }
}
</style>
