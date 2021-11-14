import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
function Invoice() {
  const { number } = useParams();

  const invoice = getInvoice(parseInt(number));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due : {invoice.amout}</h2>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due Date : {invoice.due}</p>
    </main>
  );
}

export default Invoice;
