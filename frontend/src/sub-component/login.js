import Swal from 'sweetalert2';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

export default function Login({ setIsLoggedIn }) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [resetPasswordMode, setResetPasswordMode] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [personId, setPersonId] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            setPersonId(storedUser._id);
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);

    const handleLoginSuccess = () => {
        localStorage.setItem('isLoggedIn', 'true'); // Set login flag to true
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Remove login flag
        // You might also want to clear other stored data like 'user'
        setIsLoggedIn(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login/api/check', { email, password });
            const { message, user } = response.data;
            const data1 = user._id;
            console.log("pass id", data1);
            console.log("User Data:", user);

            setUser(user);
            setPersonId(user._id);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('data1', data1); // Store data1 in localStorage

            console.log("Person ID:", user._id);

            if (message.includes('admin')) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Hello Admin! Login successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                handleLoginSuccess(); // Call function to set login flag
                navigate('/admindashboard');
            } else if (message.includes('tenant')) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Hello Tenant! Login successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                handleLoginSuccess(); // Call function to set login flag
                navigate('/', { state: { user: data1 } });
            } else {
                Swal.fire({
                    title: 'Success!',
                    text: 'Hello User! Login successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                handleLoginSuccess(); // Call function to set login flag
                navigate('/', { state: { user: user._id } });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Login failed',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.error('Error logging in user:', error);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/forget/api/pswforget', { email, newPassword });
            Swal.fire({
                title: 'Success!',
                text: 'Password reset successful',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            navigate('/login');
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Password reset failed',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.error('Error resetting password:', error);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-100 w-100" src={require('../Assets/logo1.png')} alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            {resetPasswordMode ? (
                                <div>
                                    <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                                    <div className="mt-2">
                                        <input id="newPassword" name="newPassword" type="password" autoComplete="new-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setNewPassword(e.target.value)} />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <div className="text-sm">
                                            <a onClick={() => setResetPasswordMode(true)} className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">Forgot password?</a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="text-sm">
                                        <a href='/register' className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">Create an account</a>
                                    </div>
                                </div>
                            )}
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={resetPasswordMode ? handleResetPassword : handleSubmit}>{resetPasswordMode ? 'Reset Password' : 'Sign in'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
