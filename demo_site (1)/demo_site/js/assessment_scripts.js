document.querySelector("place order").addEventListener("click", function() {
    console.log(this.textContent || this.innerText);
    window.location.href ='thankyou.html'
  });



  
  var cl_form_submission = setInterval(function() {
if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
    var eventName = "contact form submission";
    var properties = {
        "customProperties": {
            "first_name": {
                "t": "string",
                "v": "arjun"
            },
            "phone": {
                "t": "string",
                "v": "+9198394343"
            },
            "email": {
                "t": "string",
                "v": "arjun@clabs.co"
            },
            "form_submitted_from": {
                "t": "string",
                "v": "customerlabs.co/contact_us"
            }
        }
    }
    _cl.trackClick(eventName, properties)
    clearInterval(cl_form_submission)
}
}, 1000);


$(document).ready(function () {
    $('#placeOrderButton').on('click', function () {
        // Collect billing details
        var email = $('#email').val();
        var phone = $('#phone').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var city = $('#city').val();
        var state = $('#state').val();
        var zip = $('#zip').val();

        // Send data to CustomerLabs
        _cl.identify({
            email: email,
            phone: phone,
            first_name: firstName,
            last_name: lastName,
            city: city,
            state: state,
            zip: zip
        });

        // Redirect to "/thankyou.html"
        window.location.href = "/thankyou.html";
    });
});






 
    $(document).ready(function () {
        // Add event listener to the "+" button
        $('.add-to-cart-btn').on('click', function () {
            // Get product details
            var productName = $(this).closest('.product').data('product-name');
            var productPrice = $(this).closest('.product').data('product-price');

            // Send data to CustomerLabs
            _cl.trackClick('Added to cart', {
                product_name: productName,
                product_price: productPrice
            });
        });
    });



