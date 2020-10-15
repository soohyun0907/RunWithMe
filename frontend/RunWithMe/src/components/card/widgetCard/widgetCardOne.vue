<template>  
    <b-card no-body class="o-hidden">
        <img :src="wiImageUrlOne"/>
        <b-card-body>
            <h5 class="card-title mb-2">{{ wiCardOneTitle }}</h5>
            <p class="card-text text-mute">{{ wiCardOneText }}</p>
            <b-button :variant="wiCardLButtonColor">{{ wiCardLButton }}</b-button>
            <b-button :variant="wiCardRButtonColor" class="float-right">{{ wiCardRButton }}</b-button>
        </b-card-body>
    </b-card>
        
    <!-- widget-card-two -->

    
</template>
<script>
export default {
    props:['wiCardOneTitle','wiCardOneText','wiCardLButton','wiCardRButton','wiImageUrlOne','wiCardLButtonColor','wiCardRButtonColor'],
    data()
    {
        return{
            // imgLink:require('@/assets/images/products/iphone-1.jpg')
        }
    }
}
</script>