({
    createExpense: function(component, newExpense) {
        console.log('expenseFormHelper.createExpense');
        let createEvent = component.getEvent("createExpense");
        createEvent.setParams({ "expense": newExpense });
        createEvent.fire();
    },
})
