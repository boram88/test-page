import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_acction'; 
import { withRouter } from 'react-router-dom';
function LoginPage(props) {
	const dispatch = useDispatch();

	const [Email, setEmail] = useState("")
	const [Password, setPassword] = useState("")

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value)
	}

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value)
	}

	const onSubmitHandler = (event)=> {
		// event.preventDefault(); --> 새로고침 방지
		event.preventDefault();

		let body = {
			email: Email,
			password: Password
		}
		dispatch(loginUser(body))
			.then(response => {
				if(response.payload.loginSuccess){
					// 로그인하고 메인페이지로 연결 [push('/')] 이부분을 어드민으로 바꿀것
					props.history.push('/')
				} else {
					alert('아이디와 비밀번호를 확인해주세요.')
				}
			})
	}
	return (
		<div style = {{
			display: 'flex', justifyContent: 'center', alignItems:'center',
			width: '100%', height: '100vh'
			}}>

			<form style={{ display:'flex', flexDirection:'column'}}
				onSubmit={onSubmitHandler}
			>
				<label>Email</label>
				<input type="email" value={Email} onChange={onEmailHandler} />
				<label>Password</label>
				<input type="password" value={Password} onChange={onPasswordHandler} />
				<br />
				<button>Login</button>
			</form>

		</div>
	)
}

export default withRouter(LoginPage)
