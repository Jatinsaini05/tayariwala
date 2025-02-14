import { create } from "zustand";
import { persist } from "zustand/middleware";
import Swal from "sweetalert2"; // Import Swal
import { useStoreLoader } from "./loader";
import { useStoreDialog } from "./dialog";
 
export const useStoreLogin = create(
  persist(
    (set) => ({
      user: null,
      authToken: null,

      login: async (userData) => {
        const { username, password } = userData;

        if (!username || !password) {
          Swal.fire({
            icon: "error",
            title: "Required",
            text: "Username & Password are required",
            scrollbarPadding: false,
          });
          return;
        }

        useStoreLoader.getState().setLoading(true);

        try {
          let response = await fetch(`https://ihub.masterlearners.in/api/auth/signin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          if (!response.ok) {
            const errorData = await response.json();
            Swal.fire({
              icon: "error",
              title: "Invalid",
              text: errorData.message || "Invalid Username or password",
              scrollbarPadding: false,
            });
            return;
          }

          const data = await response.json();
          set({ user: data.user, authToken: data.token });

          useStoreDialog.getState().setVisible(false);
          Swal.fire({
            icon: "success",
            title: "Login Success",
            text: "You have successfully logged in",
            scrollbarPadding: false,
          });

        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message || "Error during login",
            scrollbarPadding: false,
          });
        } finally {
          useStoreLoader.getState().setLoading(false);
        }
      },

      getLoginOtp: async (userData) => {
        const { username } = userData;

        if (!username) {
          Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Mobile is required",
            scrollbarPadding: false,
          });
          return;
        }

        const regex = /^(?:\+91|91)?[6-9]\d{9}$/;
        if (!regex.test(username)) {
          Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Enter a valid mobile number",
            scrollbarPadding: false,
          });
          return;
        }

        useStoreLoader.getState().setLoading(true);

        try {
          let response = await fetch(`https://ihub.masterlearners.in/api/public/send-otp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }

          const data = await response.json();
          return data;

        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            scrollbarPadding: false,
          });
          console.log(error);
        } finally {
          useStoreLoader.getState().setLoading(false);
        }
      },

      verifyLoginOtp: async (userData) => {
        const { otp, id, mobile, user } = userData;

        if (!otp || !id || !mobile || !user) {
          Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "All fields are required",
            scrollbarPadding: false,
          });
          return;
        }

        useStoreLoader.getState().setLoading(true);

        try {
          let response = await fetch(`https://ihub.masterlearners.in/api/public/varify`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }

          const data = await response.json();
          set({ user: data.user, authToken: data.token });
          useStoreDialog.getState().setVisible(false);
          Swal.fire({
            icon: "success",
            title: "OTP Verified",
            text: "You have successfully logged in",
            scrollbarPadding: false,
          });

        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
            scrollbarPadding: false,
          });
          console.log(error);
        } finally {
          useStoreLoader.getState().setLoading(false);
        }
      },

      logout: () => {
        set({ user: null, authToken: null });
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out",
          scrollbarPadding: false,
        });
      },
    }),
    {
      name: "bears-storage", // Persist storage name
    }
  )
);
