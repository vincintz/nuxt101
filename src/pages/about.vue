<template>
    <div>
        <h1>Dad Jokes</h1>
        <p>This is a website... I think.</p>
        <hr/>
        <vue-excel-editor v-model="jsondata">
            <vue-excel-column field="user"   label="User" />
            <vue-excel-column field="name"   label="Name" />
            <vue-excel-column field="phone"  label="Contact" />
            <vue-excel-column field="gender" label="Gender" />
            <vue-excel-column field="age"    label="Age" />
            <vue-excel-column field="birth"  label="Date Of Birth" />
        </vue-excel-editor>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "NUXT101 - About",
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
    })
}
</script>
