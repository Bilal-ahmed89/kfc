import styles from './Login.module.css'
import google from '../../assets/imgs/google.png'



function Login() {
    return (
        <>
            <div className="container bg-main p-5 text-white my-5 rounded-2 ">
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6 px-5">
                        <h2 className='fw-bold'>Welcome!</h2>
                        <input type="text" className={styles.loginInput} placeholder='Name' />
                        <input type="text" className={styles.loginInput} placeholder='Phone Number' />
                        <button className={styles.loginBtn}>Login</button>

                        <p className={styles.jss1}>Or Login With</p>
                        <div className={styles.mediaLogo}>

                        
                        <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.kfcpakistan.com%3Fid%3Dauth139132&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=1092761159810-8aq4hot4g8qcpl8afdmk1jaitn4de5dn.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.kfcpakistan.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow" target='blank'>
                            <img src={google} alt="" style={{width : '40px' , height: '40px', backgroundColor : 'white',borderRadius : '50%', padding : '12px'}}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;