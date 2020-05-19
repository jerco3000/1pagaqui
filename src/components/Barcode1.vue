<template>
    <div>
        <v-quagga
                :onDetected="logIt"
                :readerSize="readerSize"
                :readerTypes="['ean_reader']">

        </v-quagga>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueQuagga from 'vue-quaggajs';

    // register component 'v-quagga'
    Vue.use(VueQuagga);

    export default {
        name: 'Barcode1',
        data () {
            return {
                readerSize: {
                    width: 640,
                    height: 480
                },
                //aspectRatio: { min: 1, max: 2 },
                detecteds: []
            }
        },
        methods: {
            logIt (data) {
                console.log('detected', data)
            }

        }
    }
</script>