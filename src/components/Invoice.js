import { useParams, useNavigate } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";
function Invoice() {
  const { number } = useParams();
  const navigate = useNavigate();
  let invoice = getInvoice(parseInt(number, 10));
  return (
    <main
      style={{ padding: "1rem", width: "50%", margin: "0px 30px 20px 0px" }}
    >
      <h2>Total Due : {invoice.amout}</h2>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due Date : {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}

export default Invoice;
