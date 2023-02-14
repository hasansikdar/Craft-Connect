import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51M8mBnHqK4LgCkpJSxVwEIEiMxHcEYWeqz5bcD9dSldD6WBzOWdxDvrNrdY08h3c2fsUoYxKqE6cSaYIxFqoDmYl00PzdEd6p2');

const PaymentModal = ({ openPaymentModal, setOpenPaymentModal, billingDetails }) => {


    return (
        <div className='my-5 py-2'>

            <Elements stripe={stripePromise}>
                <CheckoutForm billingDetails={billingDetails} openPaymentModal={openPaymentModal} setOpenPaymentModal={setOpenPaymentModal} />
            </Elements>


        </div>
    );
};

export default PaymentModal;