class Template {
  constructor(data) {
    this.classes = {
      template: '.js-email-template',
      preview: '.js-email-build-preview',
      copyTextArea: '.js-email-build-code',
      copyBtn: '.js-email-build-copy'
    };
    
    this.data = data;
  }

  init() {
    this.getElements();
    this.generate();
    this.copy();
  }

  getElements() {
    this.template = document.querySelector(this.classes.template).innerHTML;
  }

  generate() {
    let { data, template } = this;

    for (let key in data) {
      var regEx = new RegExp('\\{{' + key + '\\}}', 'g');
      template = template.replace(regEx, data[key]);
    }

    document.querySelector(this.classes.preview).innerHTML = template;
    document.querySelector(this.classes.copyTextArea).innerHTML = template;
  }

  copy() {
    document.querySelector(this.classes.copyBtn).onclick = () => {
      document.querySelector(this.classes.copyTextArea).select();
      document.execCommand('copy');
    };
  }
}

export default Template;
