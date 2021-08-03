    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '156963960431',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-156963960431',
        onOrderComplete: exampleCallback
    });
