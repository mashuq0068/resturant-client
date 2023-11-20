import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../PayemntForm/PaymentForm";
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('')


const Payment = () => {
    return (
        <div>
        <div className="w-[75vw] ">
            <h1 className="text-2xl text-center mt-[20%] md:text-4xl">PAYMENT</h1>
        </div>
        <div>
<Elements stripe={stripePromise} >
     <PaymentForm></PaymentForm>
  </Elements>
        </div>
        </div>
    );
};

export default Payment;