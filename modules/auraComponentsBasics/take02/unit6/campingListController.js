({
    clickCreateItem : function(component, event, helper) {
        console.log('You got here!');
        
        let validExpense = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validExpense){
            console.log('saving the item now');
            
            let newItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
            
            console.log('New item: ' + JSON.stringify(newItem));
            
            let allItems = component.get("v.items");
            allItems.push(newItem); 
            component.set("v.items", allItems);
            
            console.log('All items: ' + JSON.stringify(allItems));
            
            console.log('item name is: ' + component.find("v.itemform"));
            console.log('really???');
            
            // reset newItem - is there a better way to do this?
            component.set("v.newItem.Quantity__c", 0);
            component.set("v.newItem.Price__c", 0);
            component.set("v.newItem.Packed__c", false);
            component.set("v.newItem.Name", '');
        }
    }
})
