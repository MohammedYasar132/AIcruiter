// import { useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ServerUrl } from "../App";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";

// function PaymentSuccess() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const verifyPayment = async () => {
//       const session_id = searchParams.get("session_id");

//       const { data } = await axios.post(
//         ServerUrl + "/api/payment/verify",
//         { session_id },
//         { withCredentials: true }
//       );

//       dispatch(setUserData(data.user));
//       navigate("/");
//     };

//     verifyPayment();
//   }, []);

//   return <h1>Processing Payment...</h1>;
// }

// export default PaymentSuccess;

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ServerUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const session_id = searchParams.get("session_id");

        if (!session_id) return;

        const { data } = await axios.post(
          ServerUrl + "/api/payment/verify",
          { session_id },
          { withCredentials: true }
        );

        dispatch(setUserData(data.user));

        // redirect after showing animation
        setTimeout(() => {
          navigate("/");
        }, 4000);

      } catch (error) {
        console.log(error);
      }
    };

    verifyPayment();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-4">

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        className="text-green-500 text-6xl"
      >
        <FiCheckCircle />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-green-600"
      >
        Payment Successful! Credits Added
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-500 text-sm"
      >
        Redirecting to home...
      </motion.p>

    </div>
  );
}

export default PaymentSuccess;