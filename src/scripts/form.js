'use strict';

// - fill out form
// - on submit prevent submission and capture data
// get template element
// fillout with correct data
// generate preview
// generate codeview
// create copy button

class Form {
    constructor() {
        this.classes = {
            form: '.js-details-form'
        }

        this.data = {};
    }

    init() {
        this.getElements();
        this.bind();
    }

    getElements() {
        this.form = document.querySelector(this.classes.form);
    }

    bind() {
        this.form.addEventListener('submit', this.submit.bind(this));
    }

    submit(event) {
        event.preventDefault();
        
        const formData = new FormData(this.form);      
        for (const pair of formData.entries()) {
            this.data[pair[0]] = pair[1];
        }

        console.log(this.data);
    }
}

export default Form;