import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useCartData from "../../Hooks/useCartData";
import { AuthContext } from "../../Providers/Authprovider";
import { GiConfirmed } from "react-icons/gi";
import moment from "moment/moment";
import Swal from "sweetalert2";


const PaymentForm = () => {
    const stripe = useStripe();
    const {user} = useContext(AuthContext)
    const elements = useElements()
    const [clientSecret , setClientSecret] = useState(null)
    const [transactionId , setTransactionId] = useState(null)
    const {data} = useCartData()
    const axiosSecure = useAxios()
    const totalPrice = data?.reduce((total , item) => total + item.price , 0)
    const [error , setError]  =useState(null)
    useEffect(()=>{
      if(totalPrice > 0){
      axiosSecure.post('/create-payment-intent',{ price:totalPrice})
      .then(res => {
        console.log(res.data)
        setClientSecret(res.data.clientSecret)
      })}
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
          const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(clientSecret,  {
            payment_method: {
              card: card,
              billing_details: {
                email:user?.email || 'anonymous',
                name: user?.displayName || 'anonymous',
            

              },
            },
          },)
          if(confirmError){
            console.log(confirmError)
          }
          else{
            console.log('payment Intent' , paymentIntent)
            if(paymentIntent.status === 'succeeded'){
              console.log('transaction id' , paymentIntent.id)
              setTransactionId(paymentIntent.id)
              const payment = {
                email : user?.email,
                price : totalPrice,
                transactionId : paymentIntent.id,
                date : moment().format('LLL'),
                cartIds : data?.map(item => item?._id),
                menuItemIds : data?.map(item => item?.menuId),
                status : 'pending'

              }

           const res =await axiosSecure.post('/payments', payment)
          
          console.log('payment stored successfully' , res.data)
          if(res?.data?.paymentResult?.insertedId){
            Swal.fire(
              'Awesome!',
              'Your payment is success full',
              'success'
            )
          }
          

            }
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
        <button className="btn btn-primary mt-[4%]" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-red-500 text-base mt-5">{error}</p>
      {transactionId && <p className="text-gray-800 w-[70%] text-base px-5 py-3 drop-shadow-xl shadow-md mt-5 flex items-center shadow-black">
      <GiConfirmed className="text-green-500 mr-3 " />   Your transaction id is :  {   transactionId}
        </p>}
      </form>
)};

export default PaymentForm;