'use strict';

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
    }
}

export default Form;