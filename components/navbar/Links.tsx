import React from 'react'
import { TiSocialFacebook, TiSocialYoutube }
    from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";

interface Props {
    
}

const Links = (props: Props) => {
    return (
        <div className="flex gap-2">
            <TiSocialFacebook className="links-icon" />
            <TiSocialYoutube className="links-icon" />
            <IoLogoInstagram className="links-icon" />
            <MdOutlineEmail className="links-icon" />
            
        </div>
    )
}

export default Links
