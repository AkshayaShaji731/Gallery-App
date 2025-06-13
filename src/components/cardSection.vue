<template>
    <section class="main-container">
        <section class="card">
            <div class="img-container">
                <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img">
            </div>
            <div class="text-container">
                <span class="title">helo</span>
                <span class="id">hiii</span>
            </div>
        </section>
        <section class="card">
            <div class="img-container">
                <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" alt="img">
            </div>
            <div class="text-container">
                <span class="title">helo</span>
                <span class="id">hiii</span>
            </div>
        </section>
    </section>
</template>
<script>

</script>
<style>
.main-container{
    display: grid;
    grid-template-columns:repeat(2,1fr);
    padding-inline:16px;
    gap: 16px;
    margin-top:30px
}
.card{
    display: flex;
    flex-direction: column;
    border:2px solid rgb(31 41 55);
    border-radius: 4px;
}
.img-container{
    padding-top: 8px;
    border-bottom:2px solid  rgb(31 41 55);
    max-width:400px
}
.img-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.text-container{
    display: flex;
    flex-direction: column;
    padding: 12px;
    text-align: center;
}
.title{
    font-weight: 500;
    color: rgba(229 231 235);
    font-size:14px;
    line-height:20px;
}
.id{
    color: rgb(156, 163, 175);
    font-size: 12px;
    line-height:16px;
}
</style>