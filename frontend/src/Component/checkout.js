import SliderProject from "../sub-component/sliderprojects";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const [open, setOpen] = useState(false);
    const [gallery, setGallery] = useState(null);
    const [selectedFlatId, setSelectedFlatId] = useState(null);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const id = localStorage.getItem('selectedFlatId');
        console.log(`Selected Flat ID: ${id}`);
        setSelectedFlatId(id);
    }, []);

    useEffect(() => {
        if (selectedFlatId) {
            axios.get(`http://localhost:5000/persons/${selectedFlatId}`)
                .then(response => {
                    setGallery(response.data); // Set the response data directly to the gallery state
                })
                .catch(error => {
                    console.log('Error fetching gallery:', error);
                    setGallery(null); // Reset gallery state on error
                });
        }
    }, [selectedFlatId]);

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const user = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = user !== null;

    return (
        <>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            </div>

            {gallery ? (
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                    <div className="px-4 pt-8">
                        <p className="text-xl font-medium">Order Summary</p>
                        <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>

                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={require(`../../../backend/uploads/${gallery.imagesq}`)} alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">3 BHK Flat for rent in Airport Road, Gwalior</span>
                                <span className="float-right text-gray-400">{gallery.sqtfoot}sqf---{gallery.beds}Beds---{gallery.bedroom}Baths</span>
                                <p className="text-lg font-bold">₹{gallery.pricing}/Month</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                        <p className="text-xl font-medium">Payment Details</p>
                        <p className="text-gray-400">Complete your order by providing your payment details.</p>
                        <div className="">
                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Flat Amount</p>
                                    <p className="font-semibold text-gray-900">₹{gallery.pricing}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">GST</p>
                                    <p className="font-semibold text-gray-900">₹0.00</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total</p>
                                <p className="text-2xl font-semibold text-gray-900">₹{gallery.pricing}</p>
                            </div>
                        </div>
                        <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">OPTIONAL INFORMATION</label>
                        <div className="flex">
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </div>
                        {isLoggedIn ? (
                            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handleClickOpen}>Contact Owner</button>
                        ) : (
                            <Button  onClick={handleLoginRedirect} style={{background:'black' , color:'white', marginTop:'10px'}}>Log In to Contact Owner</Button>
                        )}
                    </div>

                    <React.Fragment>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Flat Owner Details"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {gallery ? (
                                        <form className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10">
                                            <h1 className="text-xl font-semibold lg:text-2xl">Details are given below</h1>
                                            <div>
                                                <label>Owner name is:</label>
                                                <b>{gallery.name}</b>
                                            </div>
                                            <div>
                                                <label>Owner email is:</label>
                                                <b>{gallery.email}</b>
                                            </div>
                                            <div>
                                                <label>Owner number is:</label>
                                                <b>{gallery.conte}</b>
                                            </div>
                                        </form>
                                    ) : (
                                        <div>
                                            <p>Please log in to view owner details.</p>
                                            <Button variant="contained" onClick={handleLoginRedirect}>Log In</Button>
                                        </div>
                                    )}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" onClick={handleClose} autoFocus>
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                </div>
            ) : (
                <div>Loading...</div>
            )}
            <div style={{ marginTop: '3%' }}>
                <SliderProject />
            </div>
        </>
    );
}
