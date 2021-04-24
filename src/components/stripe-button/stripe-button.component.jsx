import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{//price=2100
    const priceForStripe= price*100
    const publishableKey='pk_test_51IjW1qSF5HMGMQ9toMZUVekp5u6aOUiyFGI7pYjOd359VzMwrBf2AULzIiaVwthGGbR7M2h5GC0Re3DBkb493yUy00R3hpXPDt';
    
    const onToken = token =>{
        alert('Hurray ! Your payment was successful. Keep Shopping');
    }
    
    return(
        <StripeCheckout 
            label='Pay Now' 
            name='Womania' 
            billingAddress 
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total amount is : Rs${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            currency="Indian rupee"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;