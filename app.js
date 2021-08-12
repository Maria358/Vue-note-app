const app = {
    data() {
        return {
            placeholder: 'Input name of item',
            title: 'Notes: ',
            inputValue: null,
            notes: ['Note 1', 'Note 2','Note 3']
        }
    },
    methods:{
        onInputChange(event){
            this.inputValue = event.target.value;
        },
        addNewNote(){
            this.notes.push(this.inputValue);
            this.inputValue = ''
        },
        removeNote(index){
            this.notes.splice(index, 1);
        }
    }
}

Vue.createApp(app).mount("#app");