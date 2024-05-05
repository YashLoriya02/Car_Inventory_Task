import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [inventoryData, setInventoryData] = useState([])

  const getData = async () => {
    const response = await axios.get('http://localhost:5000/getData')
    setInventoryData(response.data.data)
    console.log(response.data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (inventoryData.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <h1 className='main_head'>Car Inventory</h1>

      <div className='main_table'>
        <table className="item-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Stock Count</th>
              <th>Purchase Order ID</th>
              <th>Sales Order ID</th>
              <th>Purchase Value</th>
              <th>Sales Value</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map(item => (
              <tr key={item.itemId}>
                <td>{item.itemId}</td>
                <td>{item.stock_count}</td>
                <td>{item.purchase_order_id}</td>
                <td>{item.sales_order_id}</td>
                <td>${parseFloat(item.purchase_value).toFixed(2)}</td>
                <td>${parseFloat(item.sales_value).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
