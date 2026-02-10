import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { auth, db } from "../services/FirebaseConfig";

import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

import {
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";

import { AppUser, UserProgress } from "../types/DataTypes";
import { Alert } from "react-native";

const EmailRegx = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

// -------------------------------
// Types
// -------------------------------

interface UserStoreType {
    user: AppUser | null;
    loading: boolean;
    setUser: (u: AppUser | null) => void;

    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

// -------------------------------
// Context
// -------------------------------

const UserContext = createContext<UserStoreType | null>(null);

// -------------------------------
// Hook
// -------------------------------

export function useUserStore() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserStore must be used inside UserProvider");
    }
    return context;
}

// -------------------------------
// Load progress from Firestore
// -------------------------------

async function loadUserProgress(uid: string) {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
        return null;
    }

    return snap.data() as UserProgress;
}

// -------------------------------
// Provider
// -------------------------------

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AppUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
            if (!firebaseUser) {
                setUser(null);
                setLoading(false);
                return;
            }

            const progress = await loadUserProgress(firebaseUser.uid);

            let userProgress = progress;

            if (!userProgress) {
            userProgress = {
                xp: 0,
                level: 1,
                streak: 0,
                lastActiveDate: new Date().toISOString(),
                language: "English",
                createdAt: Date.now(),
            };
            await setDoc(doc(db, "users", firebaseUser.uid), userProgress);
            }

            const appUser: AppUser = {
                auth: firebaseUser,
                progress,
            };

            setUser(appUser);
            setLoading(false);
        });

        return () => unsub();
    }, []);

    async function register(email: string, password: string) {
        if (!EmailRegx.test(email)) {
            Alert.alert("Please enter a valid email address.");
            return;
        }
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = result.user;

        const defaultProgress: UserProgress = {
            xp: 0,
            level: 1,
            streak: 0,
            lastActiveDate: new Date().toISOString(),
            language: "English",
            createdAt: Date.now(),
        };

        await setDoc(doc(db, "users", firebaseUser.uid), defaultProgress);
    }

    async function login(email: string, password: string) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (e) {
            Alert.alert("Login failed. Please check your credentials.");
            throw e;
        }
    }

    async function logout() {
        await signOut(auth);
        setUser(null);
    }

    return (
        <UserContext.Provider value={{
             user, setUser, loading, register, login, logout 
        }}>
            {children}
        </UserContext.Provider>
    );
}