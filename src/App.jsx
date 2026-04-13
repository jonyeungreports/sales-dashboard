import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Sales Dashboard</h1>
      <p>Report Date: {data.report_date}</p>

      <h2>Summary</h2>
      <p>YTD PO: {data.summary.ytd_po}</p>
      <p>YTD Sales: {data.summary.ytd_sales}</p>
      <p>Current Month Sales: {data.summary.current_month_sales_total}</p>
    </div>
  );
}
