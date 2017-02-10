<script>
    module.exports = {
        props: ['region', 'selectedRegion'],
        computed: {
            cssClass: function () {
                let thisRegion = (this.region === this.selectedRegion);
                return {
                    'btn': true,
                    'btn-warning': !thisRegion,
                    'btn-success': thisRegion
                }
            }
        },
        methods: {
            name: function () {
                return this.region.toUpperCase();
            },
            changeRegion: function () {
                this.$emit('new-region');
            }
        }
    }
</script>

<template>
    <button v-bind:class="cssClass" style="font-size: 125%" @click="changeRegion">
        {{this.name()}}
    </button>
</template>