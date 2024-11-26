'use client'
import React from 'react'

export default function GoogleMaps() {
    
    if (typeof window === 'undefined') return null;

    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d383.36536729943845!2d64.43026967599869!3d39.76383857948636!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1732558559495!5m2!1sru!2s"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}
