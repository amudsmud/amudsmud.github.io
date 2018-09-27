
['#paypal-button'].forEach(function(selector) {
    paypal.Button.render({
      // Configure environment
      //commit: true,
      env: 'production',
      client: {
        sandbox: 'AbvxFYEAn8lvVpGcxvhljGSifjbQOfZ0sjFSvcG7OhPwthDSzB0nlhtCLd3QzTK10vKaBmBjB2se2dh9',
        production: 'AZ8YjyJAooKY0krNvJf8nsDbsuirvypgh6KJkJvwlAdojyvRS3QnjzXlX9jhSUNYuvO4BLDga8W2Z5u4'
      },
      // Customize button (optional)
      locale: 'en_US',
      style: {
        size: 'responsive',
        //color: 'gold',
        color: 'black',
        shape: 'pill',
        label: 'pay',
      },
      // Set up a payment
      payment: function (data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '20.00',
              currency: 'NOK',
              details: {
                subtotal: '18.00',
                tax: '2.00'
              }
            },
            description: 'The payment transaction description.',
            custom: '90048630024435',
            //invoice_number: '12345', Insert a unique invoice number
            payment_options: {
              allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
            },
            //soft_descriptor: 'ECHI5786786',
            soft_descriptor: 'AMUDSMUD',
            item_list: {
              items: [
                {
                  name: '10´000 CC',
                  description: 'Add 10´000 CarCoins to your game wallet',
                  quantity: '1',
                  price: '18.00',
                  sku: '10CC',
                  currency: 'NOK'
                }
              ],
            }
          }],
          note_to_payer: 'Contact us for any questions on your order.'
        });
      },
      // Execute the payment
      onAuthorize: function (data, actions) {
        return actions.payment.execute()
          .then(function () {
            // Show a confirmation message to the buyer
            window.alert('Thank you for your purchase!');
            var z = nykey(localStorage.getItem("kroner"), 1)
            z += 10000;
            localStorage.setItem("kroner", nykey(z.toString(), 0));
            console.log(nykey(localStorage.getItem("kroner"), 1));
          });
      }
  }, selector);
})
