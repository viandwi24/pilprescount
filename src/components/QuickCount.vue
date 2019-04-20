<template>
    <dir>
        <div class="card" v-for="item in data" :key="item.$index" style="margin-top: 25px;">
            <div class="card-header">{{ item.institute }}</div>
            <div class="card-body">
                <bar-chart :data="[[paslon[0], item.candidates[0].votes], [paslon[1], item.candidates[1].votes]]"></bar-chart>
            </div>
        </div>
    </dir>
</template>

<script>
export default {
    data(){
        return {
            paslon: [
                "(01) Ir. H. JOKO WIDODO - Prof. Dr. (H.C) KH. MA'RUF AMIN",
                "(02) H. PRABOWO SUBIANTO - H. SANDIAGA SALAHUDIN UNO"
            ],
            data: []
        }
    },
    mounted(){
        this.axios.get('https://api-pemilu2019.herokuapp.com/pilpres').then((res) => {
            this.data = res.data.data;
            console.log(res);
        });
    }
}
</script>

