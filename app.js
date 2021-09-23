const App = {
    data() {
        return {
            placeholderString: 'Type something',
            title: 'Counter',
            inputValue: '',
            notes: ['Todo 1', 'Todo 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }


        },
        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        },
        doubleCount() {
            console.log('doubleCount')
            return this.notes.length * 2
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCount')
            return this.notes.length * 2;
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ' '
            }
        }
    }
}


Vue.createApp(App).mount('#app');