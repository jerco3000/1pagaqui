<template>
    <div>
        <h1>Barcode Reader</h1>
        <v-quagga
                :onDetected="logIt"
                :readerSize="readerSize"
                :readerType="['ean_reader']">

        </v-quagga>

    </div>
</template>

<script>
    export default {
        name: 'Barcode2',
        data () {
            return {
                readerSize: {
                    width: 640,
                    height: 480
                },
                aspectRatio: { min: 1, max: 2 },
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