<template>
    <b-card>
        <img class="d-block w-100 rounded rounded" :src="wiImageUrlTwo" alt="corrupted">
        <b-card-body>
            <h5 class="card-title mb-2">{{ wiCardOneTitle }}</h5>
            <p class="card-text text-mute">{{ wiCardOneText }}</p>
                       
            <div class="ul-widget-card__info">
                <span>
                    <p>{{ wiCardPriceOne }}</p>
                    <p class="text-mute">{{ wiCardIncome }}</p>
                </span>
                <span>
                    <p>{{ wiCardDateTwo }}</p>
                    <p class="text-mute m-0">{{ wiCardDeadLine }}</p>
                </span>
            </div>
        </b-card-body>
    </b-card>   
</template>
<script>
export default {
    props:['wiCardOneTitle','wiCardOneText','wiCardPriceOne','wiCardIncome','wiCardDateTwo','wiCardDeadLine','wiImageUrlTwo'],
    data()
    {
        return{
            // imgLink:require('@/assets/images/products/iphone-1.jpg')
        }
    }
}
</script>