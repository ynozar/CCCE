
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '119300716655',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-119300716655',
        onOrderComplete: exampleCallback
    });
