import React from 'react'

const orders = (props) => (
  <div className="table-responsive">
    <table>
      <thead>
        <tr>
          <th>Order #</th>
          <th>Date Purchased</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#">31719DA0567</a></td>
          <td>December 06, 2016</td>
          <td><span className="text-warning">In Progress</span></td>
          <td>$1,350.00</td>
        </tr>
        <tr>
          <td><a href="#">22018770CV7</a></td>
          <td>November 11, 206</td>
          <td><span className="text-danger">Canceled</span></td>
          <td>$475.60</td>
        </tr>
        <tr>
          <td><a href="#">4B33FG45520</a></td>
          <td>September 23, 2016</td>
          <td><span className="text-success">Delivered</span></td>
          <td>$2,140.80</td>
        </tr>
      </tbody>
    </table>
  </div>
)
export default orders
