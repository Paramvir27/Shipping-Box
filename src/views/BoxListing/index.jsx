import React from 'react'
import { useSelector } from 'react-redux';
import styles from './style.module.css';

const BoxListing = () => {
  const { shippingBoxList } = useSelector(state => state.boxListing);

  console.log(shippingBoxList);

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
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Receiver Name</th>
              <th>Box Weight (KG)</th>
              <th>Box Color</th>
              <th>Destination Country</th>
              <th>Shipping Charge</th>
            </tr>
          </thead>
          <tbody>
            {
              shippingBoxList.map((box, index) => (
                <tr key={box.id}>
                  <td className={styles.indexCell}>{index + 1}</td>
                  <td>
                    <div className={styles.receiverName} title={box.receiverName}>
                      {box.receiverName}
                    </div>
                  </td>
                  <td>{box.boxWeight}</td>
                  <td>
                    <div className={styles.colorCell}>
                      <div className={styles.colorBox} style={{ backgroundColor: box.boxColor }}></div>
                      <span className={styles.colorValue}>{hexToRgb(box.boxColor)}</span>
                    </div>
                  </td>
                  <td className={styles.countryCell}>{box.destinationCountry}</td>
                  <td className={styles.chargeCell}>₹{box.shippingCharge}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BoxListing
