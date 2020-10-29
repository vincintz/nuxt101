<template>
    <div>
        <div>
            <input type="file" @change="handleFileChange" accept=".csv" />
        </div>
        <div>
            <vue-excel-editor v-model="jsondata">
                <!-- tag_id,external_id,name,image,image_info,image_list,json_data,lat,lon,altitude,zone,entity,update_date,state,marker,description,deleted,uid,serial_number,part_number,manufacturer,owner,model_number,calibration_due_date,last_calibration_date,wavetest,price-->
                <vue-excel-column field="tag_id"   label="RFID" />
                <vue-excel-column field="external_id"   label="AssetID" />
                <vue-excel-column field="zone"  label="Location" />
                <vue-excel-column field="lat" label="Lat" />
                <vue-excel-column field="lon" label="Lon" />
                <vue-excel-column field="altitude" label="Altitude" />
                <vue-excel-column field="entity" label="Entity" />
                <vue-excel-column field="update_date" label="Update Date" />
                <vue-excel-column field="state" label="State" />
                <vue-excel-column field="marker" label="Marker" />
            </vue-excel-editor>
        </div>
        <div>
            <textarea name="" id="" cols="80" rows="10" readonly v-model="jsonString"></textarea>
        </div>
    </div>
</template>

<script>
import * as csv from "csvtojson";

export default {
    head() {
        return {
            title: "NUXT101 - Import",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Best place for corny dad jokes"
                }
            ]
        }
    },
    data: () => ({
        jsondata: [
        ]
    }),
    computed: {
        jsonString() {
            return JSON.stringify(this.jsondata, null, 2)
        }
    },
    methods: {
        handleFileChange(changeEvent) {
            let files = changeEvent.target.files || changeEvent.dataTransfer.files;
            if (!files.length)
                return;
            let reader = new FileReader();
            reader.readAsText(files[0], "UTF-8");
            reader.onload = e => {
                let jsonText = document.getElementById('jsonOutput')
                let startTime = new Date()
                csv({
                        output: "json"
                    })
                    .fromString(e.target.result)
                    .then(result => {
                        let endTime = new Date()
                        this.jsondata = result
                        alert(`Elapsed time: ${endTime - startTime}ms`)
                    })

            }
        }
    }
}
</script>
