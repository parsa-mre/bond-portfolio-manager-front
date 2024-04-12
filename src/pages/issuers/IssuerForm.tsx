import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextInputField from "../components/TextInputField";
import Issuer from "../../types/issuer";
import { createIssuer } from "../../services/issuerService";

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    country: Yup.string().required("Country is required"),
    credit_rating: Yup.string().required("Credit Rating is required"),
    industry: Yup.string().required("Industry is required"),
});

// Initial values for the form fields
const initialValues = {
    name: "",
    country: "",
    credit_rating: "",
    industry: "",
};

const countries = ["USA", "UK", "Canada", "Australia", "Germany"];
const industries = [
    "Finance",
    "Technology",
    "Healthcare",
    "Manufacturing",
    "Retail",
];
const creditRatings = ["AAA", "AA", "A", "BBB", "BB", "B", "CCC"];

const IssuerForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission here
        console.log(values);
        createIssuers(values);
        // Reset form after submission
        resetForm();
    };

    const createIssuers = async (values: Issuer) => {
        const response = await createIssuer(values);
        if (response.status !== 201) {
            console.log(response);
            alert("Error creating issuer");
        }
    };

    return (
        <div className="flex-col p-4 rounded-lg h-[100%] bg-bgcolor items-center justify-center">
            <div className="mb-8">
                <h2 className=" font-bold text-lg">Create Bond Issuer</h2>
                <p>
                    Welcome to the Bond Issuers Form. This form is designed for
                    the meticulous facilitation of bond issuance processes,
                    ensuring accuracy, compliance, and transparency. Please
                    proceed with utmost diligence and attention to detail as you
                    navigate through the essential steps of issuing bonds.
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
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Country
                                    </label>
                                    <Field
                                        as="select"
                                        name="country"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>
                                            Select Country
                                        </option>
                                        {countries.map((country) => (
                                            <option
                                                key={country}
                                                value={country}
                                            >
                                                {country}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        name="country"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="credit_rating"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Credit Rating
                                    </label>
                                    <Field
                                        as="select"
                                        name="credit_rating"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>
                                            Select Credit Rating
                                        </option>
                                        <option value="AAA">AAA</option>
                                        <option value="AA">AA</option>
                                        <option value="A">A</option>
                                        <option value="BBB">BBB</option>
                                        <option value="BB">BB</option>
                                        <option value="B">B</option>
                                        <option value="CCC">CCC</option>
                                    </Field>
                                    <ErrorMessage
                                        name="credit_rating"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="industry"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Industry
                                    </label>
                                    <Field
                                        as="select"
                                        name="industry"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled>
                                            Select Industry
                                        </option>
                                        {industries.map((industry) => (
                                            <option
                                                key={industry}
                                                value={industry}
                                            >
                                                {industry}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        name="industry"
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

export default IssuerForm;
