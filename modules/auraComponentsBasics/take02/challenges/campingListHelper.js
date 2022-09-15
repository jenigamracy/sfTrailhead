({
    createItem : function(component, newItem) {
        let action = component.get("c.saveItem");
        action.setParams({
            "newItem": newItem
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let allItems = component.get("v.items");
                allItems.push(newItem); 
                component.set("v.items", allItems); 
                
                // reset newItem - is there a better way to do this?
                component.set("v.newItem.Quantity__c", 0);
                component.set("v.newItem.Price__c", 0);
                component.set("v.newItem.Packed__c", false);
                component.set("v.newItem.Name", '');
            }
        });
        $A.enqueueAction(action);
    }
})
