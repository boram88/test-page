import axios from 'axios';
import {
	LOGIN_USER,
	REGISTER_USER,
	AUTH_USER,

} from './types'

export function loginUser(dateTosubmit) {
 const requset =	axios.post('/api/users/login',dateTosubmit)
				.then(response => response.data	)
	return {
		type: LOGIN_USER,
		payload: requset

	}
}

export function registerUser(dateTosubmit) {
	const requset =	axios.post('/api/users/regsister',dateTosubmit)
				 .then(response => response.data	)
	 return {
		 type: REGISTER_USER,
		 payload: requset
 
	 }
 }

 export function auth() {
	const requset =	axios.get('/api/users/auth')
				 .then(response => response.data	)
	 return {
		 type: AUTH_USER,
		 payload: requset
 
	 }
 }