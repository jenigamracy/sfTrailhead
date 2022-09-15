({
    clickCreateItem : function(component, event, helper) {
        console.log('You got here!');
        
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
    
    // Load campingItems from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        let action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
})
