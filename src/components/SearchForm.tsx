import React from "react";
import { useFormik } from "formik";
import Select from "react-select";
import countryList from '../assests/files/country.json';
import languageList from '../assests/files/language.json';
import "../assests/css/search.css"


function SearchForm({ setUrl }) {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            fontSize: '14px',
            padding: '2px',
        }),
        menu: (provided) => ({
            ...provided,
            fontSize: '14px',
        }),
        option: (provided) => ({
            ...provided,
            fontSize: '14px',
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '14px',
        }),
    };

    const formik = useFormik({
        initialValues: {
            country: null,  // Use null for initial value to match Select options
            language: null,
            keyword: ''
        },
        validate: values => {
            const errors: any = {};
            if (!values.country) {
                errors.country = 'Country is required';
            }
            if (!values.language) {
                errors.language = 'Language is required';
            }
            if (!values.keyword) {
                errors.keyword = 'Keyword is required';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values);
            const country = values.country || "";
            let language = values.language;
            const keyword = values.keyword;
            const googleBaseUrl = countryList.find(c => c.value === country)?.google_url;
            const ccc = countryList.find(c => c.value === country)?.label || "";

            let base64Location = btoa(ccc);
            let charCode = String.fromCharCode(ccc.length + 65);
            console.log("base64Location",base64Location,ccc.length, String.fromCharCode(65 +ccc.length));
            const uule = 'w+CAIQICI'+charCode;
            let guule = (uule + base64Location);
            setUrl(`${googleBaseUrl}/search?igu=1&q=${keyword}&glp=1&tci=g:2784&adtest=on&hl=${language}&uule=${guule}&safe=images&safe=high`);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <label htmlFor="country">Select Country: </label>
                    <Select
                        name="country"
                        options={countryList}
                        value={countryList.find(option => option.value === formik.values.country)}
                        onChange={(option) => formik.setFieldValue('country', option ? option.value : null)}
                        onBlur={() => formik.setFieldTouched('country', true)}
                        styles={customStyles}
                    />
                    {formik.touched.country && formik.errors.country ? (
                        <div className="error">{formik.errors.country}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="language">Select Language: </label>
                    <Select
                        name="language"
                        options={languageList}
                        value={languageList.find(option => option.value === formik.values.language)}
                        onChange={(option) => formik.setFieldValue('language', option ? option.value : null)}
                        onBlur={() => formik.setFieldTouched('language', true)}
                        styles={customStyles}
                    />
                    {formik.touched.language && formik.errors.language ? (
                        <div className="error">{formik.errors.language}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="keyword">Enter Keyword: </label>
                    <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        value={formik.values.keyword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.keyword && formik.errors.keyword ? (
                        <div className="error">{formik.errors.keyword}</div>
                    ) : null}
                </div>
                <div>
                    <button className="submit-button" type="submit">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
