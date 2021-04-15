import React from 'react';
import {Formik, Field} from "formik";
import * as yup from 'yup';
import s from './Login.module.css';
import {loginThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Обязательно'),
        password: yup.string().required('Обязательно')
    });

    if (props.isAuth) {
        return <Redirect to={"profile"} />
    };
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                validateOnBlur
                onSubmit={(values) => {props.loginThunkCreator(values)}}
                validationSchema={validationSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className={s.login_input}
                            placeholder={"email"}
                            type={"text"}
                            name={"email"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                        <p>{errors.email && touched.email && errors.email}</p>
                        <input
                            className={s.login_input}
                            placeholder={"password"}
                            type={"password"}
                            name={"password"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>
                        <p>{errors.password && touched.password && errors.password}
                        {props.correctPassword
                            ? "Wrong email or password"
                            : null
                        }</p>
                        <Field
                            type={"checkbox"}
                            name={"rememberMe"}
                        />
                        <label htmlFor={"rememberMe"}>Remember Me</label>
                        <button type={"submit"} disabled={!isValid && !dirty} onClick={handleSubmit}>Login</button>
                    </form>
                )}
            </Formik>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        correctPassword: state.auth.correctPassword
    }
};

const LoginFormContainer = connect(mapStateToProps, {loginThunkCreator})(LoginForm);

const Login = (props) => {
    return <div className={s.login_form}>
        <h1>Login</h1>
        <LoginFormContainer />
    </div>
};




export default Login;