import estilo from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
	const [userData, setUserData] = useState({
		username: '',
		password: ''
	});

	const [errors, setErrors] = useState({
		username: '',
		password: ''
	})

	const handleInputChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value
		});

		setErrors(validation({
			...userData,
			[event.target.name]: event.target.value
		}));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	}

	return (
		<form onSubmit={handleSubmit} className={estilo.form}>
			<h2 className={estilo.form_title}><span>&nbsp;Rick&Morty</span></h2>

			<div className={estilo.form__group}>
				<label htmlFor="username">Username:</label>
				<input type="text" name="username" id="username" value={userData.username} onChange={handleInputChange}/>
				{errors.username && <p className={estilo.form_error}>{errors.username}</p>}
			</div>

			<div className={estilo.form__group}>
				<label htmlFor="password" style={{"marginTop": ".8rem"}}>Password:</label>
				<input type="password" name="password" id="password" value={userData.password} onChange={handleInputChange}/>
				{errors.password && <p className={estilo.form_error}>{errors.password}</p>}
			</div>

			<button className={estilo.form__btn_ingresar}>Ingresar</button>
		</form>
		
	)
}


export default Form;