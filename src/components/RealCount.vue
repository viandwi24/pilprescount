<template>
    <div>
        <div class="card">
            <div class="card-body">
                <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            realcount: {
                paslon: [],
                count: [],
            }
        }
    },
    mounted(){
        this.axios.get('https://pemilu2019.kpu.go.id/static/json/ppwp.json', {
            headers: {
                crossDomain: true,
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            console.log(res);
        });
    }
}
</script>

