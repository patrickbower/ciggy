import Form from './scripts/form';
import Template from './scripts/template';

(function(){
    // Capture form data
    const form = new Form();
    form.init();
    // Template out email
    const template = new Template();
    template.init();
})(); 