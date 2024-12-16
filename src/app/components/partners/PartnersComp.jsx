'use client';
import React from 'react';
import { PARTNERS } from '@/app/utils/partners';
import Link from 'next/link';

export default function PartnersComp() {
    return (
        <div className="partners">
            <div className="partners-blok">
                {PARTNERS.map((partner) => (
                    <div key={partner.id} className="partners-blok__section">
                        <Link href={partner.link}><img src={partner.image} alt={`Oxford IELTS Center Partner ${partner.id}`} /></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};