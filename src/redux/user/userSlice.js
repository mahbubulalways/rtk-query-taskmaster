import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name }) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log(result);
    return {
      email: result.user.email,
      name: result.user.displayName,
    };
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUSer: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
    toggleLoading:(state,{payload})=>{
        state.isLoading=payload
    },
    userSignOut:(state)=>{
        state.email=''
        state.name=''
        state.isLoading=false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.email = ""),
          (state.name = ""),
          (state.error = "");
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.email = payload.email),
          (state.name = payload.name),
          (state.error = "");
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.email = ""),
          (state.name = ""),
          (state.error = action.error.message);
      });
  },
});
export const { setUSer,toggleLoading,userSignOut } = userSlice.actions;
export default userSlice.reducer;
