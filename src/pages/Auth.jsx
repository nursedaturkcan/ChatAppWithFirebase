import { signInWithPopup, signInWithRedirect } from "firebase/auth"
import { auth,provider } from "../firebase/firebaseConfig"


const Auth = () => {
    const handleClick=()=>{
        /*Kullanıcının sağlayıcı üzerindeki hesabını seçmesi için bir pencere açar
        daha önce hesabı varsa giriş yapar, yoksa yeni bir hesap oluşturur ve ona giriş yapar
        promise döndürür

        */
signInWithRedirect(auth,provider).then((res)=>{console.log(res)})
.catch((err)=>console.log(err))
    }
    return (
        <div className='auth'>
            <h1>Chat Odası</h1>
            <p>Devam Etmek İçin Giriş Yapınız</p>
            <button onClick={handleClick}>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
                <span>Google ile Giriş Yap</span>
            </button>


        </div>
    )
}

export default Auth