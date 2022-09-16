({
    clickCreate: function(component, event, helper) {
        console.log('expenseFormController.clickCreate');
        let validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            let newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }, 
})
