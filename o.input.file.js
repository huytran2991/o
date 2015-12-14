if(typeof o == "undefined") o = {};
if(typeof o.input ==  "undefined") o.input = {};
o.input.file = Object.create(o.input);
o.input.file = {
    id : null,
    name : null,
    element: null,
    setName: function(name){
        this.name = name;
        this.element = $('[name="'+this.name+'"]');
        this.id = this.element.attr('id');
        return this;
    },
}