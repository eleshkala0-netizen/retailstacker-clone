'use client';

import { useState } from 'react';

export default function SignInModal({onClose}: {onClose:()=> void}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        setMessage("");

        try {
            const endpoint = isSignup ? "/api/signup" : "/api/signin";
            const requestBody = isSignup
                ? JSON.stringify({ email, password, name })
                : JSON.stringify({ email, password });

            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: requestBody,
            });

            const data = await res.json();

            if (res.ok) {
                if (isSignup) {
                    setIsError(false);
                    setMessage("Account created! Please sign in.");
                    setIsSignup(false);
                    setPassword("");
                } else {
                    setIsError(false);
                    setMessage("Login successful! Redirecting...");
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    setTimeout(() => {
                        window.location.href = "/dashboard";
                    }, 1000);
                }
            } else {
                setIsError(true);
                setMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setIsError(true);
            setMessage("Something went wrong. Please try again.");
            console.error("Auth error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-black">
                        {isSignup ? "Sign Up" : "Sign In"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignup && (
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {message && (
                        <div className={`p-3 rounded ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Please wait..." : (isSignup ? "Sign Up" : "Sign In")}
                    </button>

                    <p className="text-sm text-center mt-4 text-gray-600">
                        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button
                            type="button"
                            onClick={() => { setIsSignup(!isSignup); setMessage(""); }}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            {isSignup ? "Sign In" : "Sign Up"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}