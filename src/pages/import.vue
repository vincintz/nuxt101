<template>
    <div>
        <input type="file" @change="doSomething" accept=".csv" />
        <hr/>
        <vue-excel-editor v-model="jsondata">
            <vue-excel-column field="user"   label="User" />
            <vue-excel-column field="name"   label="Name" />
            <vue-excel-column field="phone"  label="Contact" />
            <vue-excel-column field="gender" label="Gender" />
            <vue-excel-column field="age"    label="Age" />
            <vue-excel-column field="birth"  label="Date Of Birth" />
        </vue-excel-editor>
        <hr/>
        <textarea name="" id="" cols="80" rows="10" v-model="content"></textarea>
    </div>
</template>

<script>
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
        content: '123',
        jsondata: [
        ]
    }),
    methods: {
        doSomething(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            var reader = new FileReader();
            reader.readAsText(files[0], "UTF-8");
            reader.onload = e => {
                this.content = e.target.result;
            }
        }
    }
}
</script>
