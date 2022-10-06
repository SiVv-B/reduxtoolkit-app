import {createSlice, PayloadAction} from '@reduxjs/toolkit'

//only for typescript
//it is to say that our initialstate has the type of reservationState; an epmty array
interface ReservationState {
    value : string[]
}

const initialState:ReservationState = {
    value : []
}
export const reservationSlice = createSlice({
    name : 'reservations', 
    initialState,
    reducers: {
         addReservation: (state, action: PayloadAction<string>) =>{
            state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) =>{
//theaction payload is the index and the second parameter is the nbr of element to delete
            state.value.splice(action.payload,1)
        },
    }
})

export const {addReservation,removeReservation} = reservationSlice.actions

export default reservationSlice.reducer