import React from 'react'
import SocialButton from './ButtonsConexionsMethods'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const ConnexionsMethods: React.FC = () => {
    const ConnexionWithFacebbok = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        alert('Connexion with Facebook !');
    }

    const ConnexionWithTwitter = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        alert('Connexion with Twitter !');
    }

    const ConnexionWithGoogle = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        alert('Connexion with Google !');
    }

    return (
        <div className="space-y-2.5">
            <SocialButton
                icon={<AiFillFacebook className="text-blue-800 text-2xl"/>}
                name="Continue with Facebook"
                onClick={ConnexionWithFacebbok}
            />

            <SocialButton
                icon={<AiOutlineTwitter className="text-black/85 text-2xl"/>}
                name="Continue with Twitter"
                onClick={ConnexionWithTwitter}
            />

            <SocialButton
                icon={<FcGoogle />}
                name="Continue with Google"
                onClick={ConnexionWithGoogle}
            />
        </div>
    )
}

export default ConnexionsMethods