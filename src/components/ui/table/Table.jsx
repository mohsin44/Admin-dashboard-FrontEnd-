import React from 'react'
import styles from './Table.module.scss'

const Table = () => {
  return (
    <>
  <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>PHOTO</th>
          <th>FULLNAME</th>
          <th>VALUE</th>
          <th>EMAIL</th>
          <th>COUNTRY</th>
          <th>DATE</th>
          <th>STATUS</th>
          <th>ACTIONS</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
          <td>2000</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Table