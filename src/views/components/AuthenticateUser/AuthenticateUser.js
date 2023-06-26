
export function AuthenticateUser(props, getCurrentUser) {
    console.log("getCurrentUser", getCurrentUser);
    if(getCurrentUser === 1){
		props.history.push("/admin/dashboard")
	} else if(getCurrentUser === "2"){
        props.history.push("/pidva/dashboard")
    }
}