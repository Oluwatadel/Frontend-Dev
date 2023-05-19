var budgetController = (function(){
    var income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
        var expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
        }
    }
//this indicates you want to create an object
    var data = {
        allItems:{
            income : [], expense : []
        },
        totals:{
            income:0, expense:0
        },
        budget: 0
})