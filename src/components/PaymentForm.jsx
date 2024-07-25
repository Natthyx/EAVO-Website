import React, { useRef, useImperativeHandle, forwardRef } from "react";

const PaymentForm = forwardRef(
  ({ amount, email, firstName, lastName, phoneNumber }, ref) => {
    const formRef = useRef(null);

    useImperativeHandle(ref, () => ({
      submitForm: () => {
        if (formRef.current) {
          formRef.current.submit();
        }
      },
    }));

    const [currentDate, setCurrentDate] = React.useState("");

    React.useEffect(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      const formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
      setCurrentDate(formattedDateTime);
    }, []);

    return (
      <form
        method="POST"
        action="https://api.chapa.co/v1/hosted/pay"
        ref={formRef}
      >
        <input
          type="hidden"
          name="public_key"
          value="CHAPUBK_TEST-4H1houLQR9nxWHQwKQ2jm5lyWJnshex5"
        />
        <input type="hidden" name="tx_ref" value={`name-tx-${currentDate}`} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="phone_number" value={phoneNumber} />
        <input type="hidden" name="first_name" value={firstName} />
        <input type="hidden" name="last_name" value={lastName} />
        <input type="hidden" name="title" value="EAVO Donation" />
        <input type="hidden" name="description" value="Donation for EAVO" />
        <input
          type="hidden"
          name="logo"
          value="https://trello.com/1/cards/66966cde07608681653a971c/attachments/66966ce558e8acfc063300b0/previews/66966ce658e8acfc063300bd/download/IMG_7988.jpg"
        />
        <input
          type="hidden"
          name="callback_url"
          value="https://example.com/callbackurl"
        />
        {/* <input type="hidden" name="return_url" value="http://google.com" /> */}
        <input type="hidden" name="meta[title]" value="test" />
        {/* <button type="submit">Pay Now</button> */}
      </form>
    );
  }
);

export default PaymentForm;
