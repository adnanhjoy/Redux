import React from 'react';
import './Assignment2.css'
import logo from '../assets/img/lws-logo.svg'
import AssignmentForm from './AssignmentForm';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';

const Assignment2 = () => {
    const flightBooking = useSelector(state => state.value)

    return (
        <div>
            <header id="header">
                <div className="container">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="flex items-center">
                        <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
                        <button className="log-btn btn">Login</button>
                    </div>
                </div>
            </header>


            <section>
                <div className="mt-[160px] mx-4 md:mt-[160px] relative">
                    <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                        <AssignmentForm />
                    </div>
                </div>


                <div className="table-container">
                    <table className="booking-table">
                        <thead className="bg-gray-100/50">
                            <tr className="text-black text-left">
                                <th>Destination From</th>
                                <th>Destination To</th>
                                <th className="text-center">Journey Date</th>
                                <th className="text-center">Guests</th>
                                <th className="text-center">Class</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                            {/* <!-- Row 1 --> */}
                            {
                                flightBooking?.map((flight, idx) =>
                                    <TableRow
                                        key={idx}
                                        flight={flight}
                                    />)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Assignment2;