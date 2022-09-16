({
    createItem: function(component, newItem) {
        console.log('campingListFormHelper.createItem');
        let createItem = component.getEvent("addItem");
        createItem.setParams({ "item": newItem });
        createItem.fire();
        console.log('end of campingListFormHelper.createItem - event fired!');
    },
})
