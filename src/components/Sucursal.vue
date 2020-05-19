<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Home</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>

            <ion-list>
                <ion-list-header>
                    <ion-label><H1> Sucursales </H1></ion-label>
                </ion-list-header>


                <ion-item v-for="compra of compras" v-bind:key="compra.suc_id">
                    <ion-checkbox slot="start"></ion-checkbox>
                    <ion-label>
                        <!-- <h1>{{compra.emp_nombrecorto}}</h1> -->
                       <!-- <ion-note>{{compra.emp_logo_url}}</ion-note> -->
                        <img :src="compra.emp_logo_url" width="80" height="80" align="center"/>
                        <h3>{{compra.suc_nombre}}</h3>
                    </ion-label>
                    <ion-badge color="success" slot="end">5 Days</ion-badge>
                </ion-item>


            </ion-list>

            <ion-content>
            <ion-card v-for="compra of compras" v-bind:key="compra.suc_id" v-on:click="$router.push({ name: 'new-item' })">
                <img :src="compra.emp_logo_url" width="80" height="80" align="center"/>
                <ion-header>
                    <!-- <ion-card-title>{{compra.emp_nombrecorto}}</ion-card-title> -->
                    <ion-card-subtitle>Sucursal: {{compra.suc_nombre}}</ion-card-subtitle>
                </ion-header>
            </ion-card>
            </ion-content>

            <ion-fab vertical="bottom" horizontal="center" slot="fixed">
                <ion-fab-button @click="$router.push({ name: 'new-item' })">
                    <ion-icon name="addCircle"></ion-icon>
                </ion-fab-button>
            </ion-fab>

            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="$router.push({ name: 'new-item' })">
                    <ion-icon name="eye"></ion-icon>
                </ion-fab-button>
            </ion-fab>

        </ion-content>
    </ion-page>
</template>

<script>
    import axios from 'axios'

    import {eye,add,addCircle} from "ionicons/icons" // not iosEye
    import {addIcons} from "ionicons"

    addIcons({
        "ios-eye": eye,
        "md-eye": eye,
        "ios-add": add,
        "md-add": add,
        "ios-addcircle": addCircle,
        "md-addcircle": addCircle,
    })


    export default {
        name: "Sucursal",
        props: {
            msg: String
        },
        data() {
            return {
                compras: []
            }
        },
        created(){
            //this.traerCompras();
            this.gps();
        },
        methods: {
            traerCompras(){
                axios.post('http://192.168.1.18:3001/compras')
                    .then(res => {
                        this.compras = res.data;
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
            },
            sucursales(pos){
                var crd = pos.coords;

                const options = {
                    headers: {'Content-Type': 'application/json'}
                };
                axios.post('https://api.1pagaqui.com/sucursal',
                    {
                            'lat': crd.latitude,
                            'long': crd.longitude
                        },
                    options
                )
                    .then(res => {
                        this.compras = res.data;
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
            },
            gps(){
                var options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                };

                function success(pos) {
                    var crd = pos.coords;

                    console.log('Your current position is:');
                    console.log('Latitude : ' + crd.latitude);
                    console.log('Longitude: ' + crd.longitude);
                    console.log('More or less ' + crd.accuracy + ' meters.');

                };

                function error(err) {
                    console.warn('ERROR(' + err.code + '): ' + err.message);
                };

                //navigator.geolocation.getCurrentPosition(success, error, options);
                navigator.geolocation.getCurrentPosition(this.sucursales, error, options);

            },
            todo(){
                var pos = this.gps();
                var crd = pos.coords;

                const options = {
                    headers: {'Content-Type': 'application/json'}
                };
                axios.post('http://ec2-54-207-15-162.sa-east-1.compute.amazonaws.com:5000/sucursal',
                    {
                        'lat': '-33.39043376758107',
                        'long': '-70.54559855495847'
                    },
                    options
                )
                    .then(res => {
                        this.compras = res.data;
                    })
                    .catch(e => {
                        console.log(e.response);
                    })

            }
        }

    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
        background-color: #000;
        box-shadow: no;
    }
</style>