import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import productReducer from './ProductSlice'
import adminReducer from './AdminSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    admin: adminReducer
  },
})