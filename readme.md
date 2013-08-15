## Responsive Dispatch
#### version 0.1.0

Use responsive dispatch to create setup and teardown functions for your responsive websites.

Depends on jQuery & Backbone

### Usage

Initialize responsive dispatch with the following code:

    responsiveDispatch.init({
        logging: true,
        ranges: [
            { name: "large", min: 979, max: Infinity },
            { name: "medium", min: 767, max: 979 },
            { name: "small", min: 0, max: 767 }
        ]
    });

You can provide custom ranges to suite your website's needs. Ranges can overlap.

Then simply use the Backbone.Events syntax to register your callbacks:

    responsiveDispatch.on('didEnter:large', function () {
        $('.large').show();
    });
    responsiveDispatch.on('didExit:large', function () {
        $('.large').hide();
    });
    responsiveDispatch.on('didEnter:medium', function () {
        $('.medium').show();
    });
    responsiveDispatch.on('didExit:medium', function () {
        $('.medium').hide();
    });
    responsiveDispatch.on('didEnter:small', function () {
        $('.small').show();
    });
    responsiveDispatch.on('didExit:small', function () {
        $('.small').hide();
    });
