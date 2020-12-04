<template>
    <div>
        <cardDuvida/>
        
        
        <btnAdicionarDuvida/>

    </div>
</template>


<script>
import cardDuvida from '@/components/cardDuvida'
import btnAdicionarDuvida from '@/components/btnAdicionarDuvida'

export default {
    name:  'minhasDuvidas',
    components: {
        cardDuvida
    },
    props: [
        'usuario'
    ],
    data() {
        return {
            
        }
    },

}
</script>