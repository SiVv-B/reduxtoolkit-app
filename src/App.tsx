import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { RootState } from './app/store'
import CustomerCard from './components/CustomerCard'
import ReservationCard from './components/ReservationCard'
import { addReservation } from './features/reservationSlice'

function App() {
  const dispatch = useDispatch()
  const [reservationNameInput, setReservationNameInput] = useState('')
  
  const reservations = useSelector(
    (state: RootState) => state.reservations.value,
  )
  const customers = useSelector((state: RootState) => state.customer.value);

  console.log('customers',customers)
  const handleAddReservations = () => {
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index}/>
              })}{' '}
            </div>
          </div>
          <div className="reservation-input-container">
          <input
                  value={reservationNameInput}
                  onChange={(e) => setReservationNameInput(e.target.value)}
                />
                <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        <h5 className="reservation-header">Customers in the restaurant</h5>
        {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                key={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default App
