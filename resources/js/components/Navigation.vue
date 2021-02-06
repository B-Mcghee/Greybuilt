<template>
    <nav :style="{background: [background, '#9d7958' ] }">
        <figure class="image-logo" @click="toggleNav">
            <img :src="imagePath" alt="" />
        </figure>
        <ul :style="{background: [background, '#9d7958'] }" ref="nav">

            <li v-for="(link, index) in navLinks" :key="index" :style="{color:[linkColor, '#fff']}" @mouseenter="$event.currentTarget.style.background =  '#DACCBE','#999'" @mouseleave="$event.currentTarget.style.background =  '#9D7958','#333'">
                <router-link :style="{color:[linkColor, '#fff']}"  :to="link.path"><span @click="navToggle" role="link">{{link.text}}</span><i @click="navToggle" :class="link.icon" /></router-link>
            </li>
        </ul>
        <div class="icon" @click="toggleNav"><i class="fas fa-bars"></i>
        </div>
    </nav>
</template>

<script>
export default {
    props: [
        'navLinks', 'background', 'hoverBackground', 'imagePath', 'linkColor'
    ],
    methods: {
        toggleNav() {
            const nav = this.$refs.nav.classList
            nav.contains('active') ? nav.remove('active') : nav.add('active')
        },
        navToggle() {
            const nav = this.$refs.nav.classList
            if (nav.contains('active')) {
                nav.remove('active');
            }
        }
    }
}
</script>

<style scoped lang="scss">
$primary: rgb(148, 148, 148);
$shadowGrey: #54595f;
$secondary: rgb(18, 39, 68);

$DarkContrast: #262626;
$Highlight: #c2c1bf;
$InteractiveLight: #DACCBE;
$Interactive: #9D7958;
$InteractiveDark:#5b4733;

.root {
    margin: 0;
}

.content {
    justify-content: none;
}

nav {
    font-weight: 900;
    height: 60px;
    width: 100%;
    figure {
        img {
            width: 60px;
        }
        z-index: 2;
        position: absolute;
        top: 10px;
        left: 5px;
        cursor: pointer;
        margin-right: 10px;
    }
    ul {
        display: flex;
        height: 100%;
        align-items: center;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        cursor: pointer;
        justify-content: flex-end;
        z-index: 1;
        a {
            text-decoration: none;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
        }
        i {
            margin-right: 10px;
            font-size: 22px;
        }
        li {
            font-size: 1.5em;
            list-style-type: none;
            padding: 10px 20px;
        }
    }
}

.icon {
    display: none;
}

@media screen and (max-width: 1024px) {
    nav {
        height: 50px;
        ul {
            position: fixed;
            width: 260px;
            flex-direction: column-reverse;
            left: -200px;
            transition: 300ms ease all;
            justify-content: flex-start;
            margin-right: 50px;
            &.active {
                left: 0px;
            }
            li {
                align-self: flex-end;
                width: 100%;
                padding-left: 0;
                padding-right: 0;
                margin-bottom: .5em;
            }
            a {
                flex-direction: row;
                margin-left: 20px;
                justify-content: space-between;
                margin-right: 5px;
            }
            i {
                font-size: 1.25rem;
            }
        }
        figure {
            img {
                width: 60px;
            }

            top: 10px;
            left: -5px;
        }
    }
    .icon {
        display: block;
        cursor: pointer;
        background-color: $Interactive;
        color: #fff;
        position: fixed;
        right: 10px;
        bottom: 10px;
        padding: .25em .75em;
        border-radius: .5em;
        i {
            font-size: 1.5rem;
        }
    }
}

@media screen and (max-width: 500px) {
    nav {
        height: 50px;
        ul {
            position: fixed;
            width: 175px;
            flex-direction: column-reverse;
            left: -175px;
            transition: 300ms ease all;
        }
    }
}
</style>
