({
    clickCreateItem : function(component, event, helper) {
        console.log('campingListFormController.clickCreateItem');
        
        let validCampingItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validCampingItem){            
            // Create the new item
            let newItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
            
            let newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newItem));
            helper.createItem(component, newItem);
        }
    },
})
