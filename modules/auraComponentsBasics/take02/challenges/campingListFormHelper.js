({
    createItem: function(component, newItem) {
        console.log('campingListFormHelper.createItem');
        let createItem = component.getEvent("addItem");
        createItem.setParams({ "item": newItem });
        createItem.fire();
        console.log('end of campingListFormHelper.createItem - event fired!');
        
        // reset newItem - is there a better way to do this?
        //component.set("v.newItem.Quantity__c", 0);
        //component.set("v.newItem.Price__c", 0);
        //component.set("v.newItem.Packed__c", false);
        //component.set("v.newItem.Name", '');
        

		// this one doesn't work quite right...
        component.set("v.newItem", 
                      "{'sobjectType': 'Camping_Item__c', " + 
                      "'Quantity__c': 0," + 
                      "'Price__c': 0, " + 
                      "'Packed__c': false, " + 
                      "'Name': ''" + 
                      "}");
    },
})
