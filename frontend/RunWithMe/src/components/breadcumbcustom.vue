<template>
    <div>
       <div class="breadcrumbcustom">
            <slot name="header">
               <h1>{{title}}</h1>
                    <!-- <span>| {{ desc }}</span> -->
            </slot>
        </div>
        <div class="separator-breadcrumb border-top"></div>
    </div>
</template>
<script>
export default {
    props:[ 'desc','title'],
   
}
</script>
