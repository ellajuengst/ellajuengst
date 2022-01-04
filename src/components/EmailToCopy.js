
import React from 'react'
import Tooltip from './Tooltip'

export default function EmailToCopy() {
    return (
        <Tooltip text="click to copy">
            <span onClick={() => {navigator.clipboard.writeText(document.getElementById('contact-email').textContent)}} id="contact-email" className="contact-email">ellajuengst@gmail.com</span>
        </Tooltip>
    )
}



