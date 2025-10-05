import React from 'react'
import { useSelector } from 'react-redux';
import { hexToRgb } from './helper';
import styles from './style.module.css';

const BoxListingModule = () => {
  const { shippingBoxList } = useSelector(state => state.boxListing);

  if(shippingBoxList.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>No boxes added yet</div>
      </div>
    )
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

export default BoxListingModule
