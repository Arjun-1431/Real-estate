import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from "../sub-component/navbar";
import SliderProject from "../sub-component/sliderprojects";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../CSSfiles/rental.css';

export default function UploadForRentFlate() {
    const userId = localStorage.getItem('data1');
    console.log(userId);

    const [flatlocation, setFlatlocation] = useState('');
    const [pricing, setPricing] = useState('');
    const [rating, setRating] = useState('');
    const [sqtfoot, setSqtfoot] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [beds, setBeds] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [conte, setConte] = useState('');
    const [imagesq, setImages] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('flatlocation', flatlocation);
        formData.append('pricing', pricing);
        formData.append('rating', rating);
        formData.append('sqtfoot', sqtfoot);
        formData.append('bedroom', bedroom);
        formData.append('beds', beds);
        formData.append('image', imagesq);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('conte', conte);

        try {
            const response = await axios.post(`http://localhost:5000/uploadflat/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log(response.data);
            Swal.fire({
                icon: "success",
                title: "Uploaded!",
                text: "Flat uploaded successfully!",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            console.error('Error uploading image:', error);
        }
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <>
            <Navbar />
            <div style={{ marginTop: '7%' }}>
                <div className="lg:m-10">
                    <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10" onSubmit={handleSubmit}>
                        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Fill Details for Rent a Flat</h1>
                        <div className="grid gap-3 md:grid-cols-2">
                            <div>
                                <label>Enter name</label>
                                <input type="text" placeholder="Enter Name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label>Email Id</label>
                                <input type="text" placeholder="Enter email ID" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label>Contect Number</label>
                                <input type="text" placeholder="Contect number" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setConte(e.target.value)} />
                            </div>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                            <div>
                                <label>Flat Location with Size</label>
                                <input type="text" placeholder="Location here" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setFlatlocation(e.target.value)} />
                            </div>
                            <div>
                                <label>Pricing</label>
                                <input type="text" placeholder="ex: 12,000/month" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setPricing(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label>Rating</label>
                            <input type="text" placeholder="4/5" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div>
                            <label>How much square Foot(sqt)</label>
                            <input type="text" placeholder="120sqt" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setSqtfoot(e.target.value)} />
                        </div>
                        <div>
                            <label>How many BedRooms</label>
                            <input type="text" placeholder="4" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setBedroom(e.target.value)} />
                        </div>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload image
                            <VisuallyHiddenInput type="file" onChange={(e) => setImages(e.target.files[0])} />
                        </Button>
                        <div>
                            <label>How many Baths</label>
                            <input type="text" placeholder="3" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" onChange={(e) => setBeds(e.target.value)} />
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">I agree to the <a href="#" target="_blank" className="text-blue-600">Terms and Conditions</a></label>
                        </div>
                        <div>
                            <button type="submit" className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Submit</button>
                        </div>
                    </form>
                </div>
                <SliderProject />
            </div>
        </>
    );
}
