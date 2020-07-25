import React from 'react'
import StripeCheckout from'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H8jMaHeCDXaljcT3DJtHAe2hiUqeESwahzrDjJgkVFvNAGa3sNAIAJzDQGht5eAO5houO1Q21ubLQSXcyeOgFq500G5gFAI3E';
    const Ontoken = token => {
        console.log(token)
    }

       return (
            <StripeCheckout 
            label='Pay Now'
            name='Crwn Clothing Pvt .Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount={priceForStripe}
            description={`Your Total Is $${price}`}
            stripeKey={publishableKey}
            panelLabel='Pay on'
            token={Ontoken}
            

            />

            
            )
    

}

export default StripeCheckoutButton;