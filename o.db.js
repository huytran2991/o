if(typeof(o) == undefined) o = {
		init: function() {
		for (var i in this) {
			if (typeof this[i] == 'object') {
					this[i].init = this.init;
					this[i].init();
					this[i].parent = this;
			}
		}
		delete this.init;
		return this;
	},
};
if(typeof(o.db) == undefined) o.db = {};
o.db = {
	primary_key : 'entity_id',
	primary_value : null,
	collectionName:null,//name of table
	find : {},
	insert: function(){
	
	},
	update: function(){
		
	},
	data:{},
	save:function(){
		
	},
	
	//get data of one row: is fist row if return mutilirow
	getData:function(){
	
	},
	setData:function(){
	
	},
	setFind:function(){
	
	},
	collection : {
		
		//get data mutlirow
		getData:function(){
			
			
		},
		setFind:function(find){
			$this = this.parent;
			$this.find = find;
		},
		
		
	},
	
};
