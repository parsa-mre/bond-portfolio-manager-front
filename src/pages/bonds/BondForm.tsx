import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createBond } from "../../services/bondService";

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
    issuer_id: Yup.number().required("Issuer ID is required"),
    coupon: Yup.number().required("Coupon is required"),
    face_value: Yup.number().required("Face Value is required"),
    maturation: Yup.date().required("Maturation date is required"),
    issuance_date: Yup.date().required("Issuance date is required"),
});

// Initial values for the form fields
const initialValues = {
    issuer_id: "",
    coupon: "",
    face_value: "",
    maturation: "",
    issuance_date: "",
};

const BondForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission here
        console.log(values);
        createBond(values);
        // Reset form after submission
        resetForm();
    };

    return (
        <div className="flex-col p-4 rounded-lg h-[100%] bg-bgcolor items-center justify-center">
            <div className="mb-8">
                <h2 className="font-bold text-lg">Create Bond</h2>
                <p>
                    Welcome to the Bond Creation Form. This form allows you to
                    create a new bond with the provided details. Please fill in
                    all the required fields accurately.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-96">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        className="w-full"
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="mb-4">
                                    <label
                                        htmlFor="issuer_id"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Issuer ID
                                    </label>
                                    <Field
                                        type="number"
                                        name="issuer_id"
                                        className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="issuer_id"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="coupon"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Coupon
                                    </label>
                                    <Field
                                        type="number"
                                        name="coupon"
                                        className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="coupon"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="face_value"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Face Value
                                    </label>
                                    <Field
                                        type="number"
                                        name="face_value"
                                        className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="face_value"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="maturation"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Maturation Date
                                    </label>
                                    <Field
                                        type="date"
                                        name="maturation"
                                        className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="maturation"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="issuance_date"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Issuance Date
                                    </label>
                                    <Field
                                        type="date"
                                        name="issuance_date"
                                        className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="issuance_date"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-main text-white py-2 px-4 rounded-md focus:outline-none"
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default BondForm;
