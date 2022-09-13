({
    handleClick: function(component, event, helper) {
        let btnClicked = event.getSource();         // the button
        let btnMessage = btnClicked.get("v.label"); // the button's label
        component.set("v.message", btnMessage);     // update our message
    },
    
    // Same as original, but chained
    handleClick2: function(component, event, helper) {
        let newMessage = event.getSource().get("v.label");
        component.set("v.message", newMessage);
    },
    
    // Same as original, but even more chained
    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
})
