import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useCartData from "../../Hooks/useCartData";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const {data} = useCartData()
    const axiosSecure = useAxios()
    const totalPrice = data?.reduce((total , item) => total + item.price , 0)
    const [error , setError]  =useState(null)
    useEffect(()=>{
      axiosSecure.post('/create-payment-intent',{ price:totalPrice})
      .then(res => {
        console.log(res.data)
      })
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError(error.message)
            console.log('[error]', error);
          } else {
            setError(null)
            console.log('[PaymentMethod]', paymentMethod);
          }
      
    }
    return (
        <form onSubmit={handleSubmit} className=" 2xl:text-2xl w-[75vw] mx-auto px-[20%]">
        <CardElement
      
          options={{
            style: {
              base: {
                fontSize: '20px',
                color: '#424770',
                border:'1px solid black',
                '::placeholder': {
                  color: 'black',
                },
              },
              invalid: {
                color: 'black',
              },
            },
          }}
        />
        <button className="btn btn-primary mt-[4%]" type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className="text-red-500 text-base mt-5">{error}</p>
      </form>
)};

export default PaymentForm;