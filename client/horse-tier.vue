<script>
    module.exports = {
        props: ['currentTier', 'tier'],
        computed: {
            cssClass: function () {
                let condition = (this.currentTier == this.tier);
                return {
                    'btn': true,
                    'btn-primary': !condition,
                    'btn-success': condition,
                    'horse-tier': true
                };
            }
        }
    };
</script>
<template>
    <span v-bind:class="cssClass">
        {{tier}}
    </span>
</template>