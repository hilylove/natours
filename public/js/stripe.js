/* eslint-disable*/

import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51MPT10JNwupSlEGEdoJG8XgVJ9oFeTUacDhkawjHZ7t3hQC45DcAoMUmTt2IzSBRKawMF22eVVnTPXotAWTChacn00ufkti9Cz'
);

export const bookTour = async tourId => {
  try {
    // 1.Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
