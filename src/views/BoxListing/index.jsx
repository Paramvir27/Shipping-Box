import React from 'react'
import { useSelector } from 'react-redux';

const BoxListing = () => {
  const { shippingBoxList } = useSelector(state => state.boxListing);

  function hexToRgb(hex) {
    // Remove '#' if present
    hex = hex.replace(/^#/, '');

    // Parse r, g, b values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgb = `(${r}, ${g}, ${b})`;

    return rgb;
  }
  
  return (
    <div>
      <div style={{ padding: '1rem' }}>

        <table>
          <thead>
            <tr>
              <th>Receiver Name</th>
              <th>Box Weight [Kg]</th>
              <th>Box Color</th>
              <th>Destination Country</th>
              <th>Shipping Charge</th>
            </tr>
          </thead>
          <tbody>
            {shippingBoxList.map((box) => (
              <tr key={box.id}>
                <td>{box.receiverName}</td>
                <td>{box.boxWeight}</td>
                <td><div style={{ width: '100%', height: '10px', backgroundColor: box.boxColor }}></div>{hexToRgb(box.boxColor)}</td>
                <td>{box.destinationCountry}</td>
                <td>{box.shippingCharge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BoxListing
