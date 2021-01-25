import React, { useEffect } from 'react'
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

	useEffect(()=>{
		Axios.get('/api/hello')
		.then(response => {console.log(response)})
	},[])

	const onClickLogoutHandler = () => {
		Axios.get(`/api/users/logout`)
		.then(response => {
			if(response.data.success){
				props.history.push("/login")
			} else {
				alert("로그인이 되어있지 않습니다")
			}
		})
	}
	return (
		<div style = {{
			display: 'flex', justifyContent: 'center', alignItems:'center',
			width: '100%', height: '100vh'
			}}>
				<h2>랜딩페이지</h2>
				<button onClick={onClickLogoutHandler}>
					로그아웃
				</button>
		</div>
	)
}

export default withRouter(LandingPage)
