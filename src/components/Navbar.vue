<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">Pilpres 2019</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link" tag="a">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'realcount' }" class="nav-link" tag="a">Real Count</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'quickcount' }" class="nav-link" tag="a">Quick Count</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="https://github.com/viandwi24/vqrcode" class="nav-link">Github</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
 nav.navbar {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
 }
</style>