<script>
    module.exports = {
        props: ['groupvalue', 'value'],
        methods:{
            onClick: function(){
                this.$emit('radioupdate', this.value);
            }
        },
        computed: {
            cssClass: function(){
                const b = this['groupvalue'] == this['value'];
                return {
                    'btn': true,
                    'btn-sm': true,
                    'btn-success': b,
                    'btn-danger': !b
                };
            }
        }
    };
</script>
<template>
    <label :class="cssClass" @click="onClick"><strong>{{value}}</strong></label>
</template>