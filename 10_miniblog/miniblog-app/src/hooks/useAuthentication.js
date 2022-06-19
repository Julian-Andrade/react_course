// Firebase
import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  upadteProfile,
  signOut,
  updateProfile,
} from "firebase/auth";

// Hooks
import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Cleanup
  // Deal with memory leak / Lidar com vazamento de memória

  // Register
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  // Register

  // Logout
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };
  // Logout

  // Login
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;
      if (error.message.includes("user-not-found")) {
        systemErrorMessage = `Usuário não cadastrado.`;
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = `Senha incorreta.`;
      } else {
        systemErrorMessage = `Ocorreu um erro, por favor tente mais tarde.`;
      }
      setError(systemErrorMessage);
    }
    setLoading(false);
  };
  // Login

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  const createUser = async (data) => {
    // 1 - Confere se foi cancelado
    checkIfIsCancelled();
    // 2 - Carrega como verdadeiro
    setLoading(true);
    // 3 - Limpando as mensagens
    setError(null);
    // 4 - Validações default do Firebase
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });
      setLoading(false);

      return user;
    } catch (error) {
      console.log(error);
      console.log(typeof error.message);

      // 5 - Transformando as mensagens do backend para o usuário
      let systemErrorMessage;
      if (error.message.includes("Password")) {
        systemErrorMessage = `A senha precisa conter pelo menos 6 caracteres`;
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = `E-mail já cadastrado.`;
      } else {
        systemErrorMessage = `Ocorreu um erro, por favor tente mais tarde.`;
      }
      setError(systemErrorMessage);
    }
    setLoading(false);
  };
  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
