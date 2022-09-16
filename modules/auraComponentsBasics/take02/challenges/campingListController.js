({
    handleAddItem: function(component, event, helper) {
        console.log('campingListController.handleAddItem');
        let newItem = event.getParam("item");
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
            }
        });
        $A.enqueueAction(action);
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
