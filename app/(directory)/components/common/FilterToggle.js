'use client';

import { useState } from 'react';  // Import useState for managing toggle
import '@/public/styles/filter.css';
import Link from 'next/link';

const FilterToggle = ({slug}) => {
    const filters = [
        { slug: 'logos', name: 'Logos', link: '/work/graphics' },
        { slug: 'graphics', name: 'Graphics', link: '/work/logos' },
        { slug: 'art-in-architecture', name: 'Art in Architecture', link: '/work/logos' }
    ];

    const currentFilter = filters.find(filter => filter.slug === slug) || filters[0];

    const [isOpen, setIsOpen] = useState(false);

    const toggleFilters = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <>
            <span className={`filter-toggle ${isOpen ? 'active' : ''}`} onClick={toggleFilters}>
                {currentFilter.name}
            </span>

            <div className={`filter--otherLinks ${isOpen ? 'active' : ''}`}>
                {filters.map((filter) => {
                    if (currentFilter.slug === filter.slug) {
                        return null;
                    }
                    return (
                        <span key={filter.slug}>
                            <Link href={filter.slug === currentFilter.slug ? filter.link : `/work/${filter.slug}`}>
                                {filter.name}
                            </Link>
                        </span>
                    );
                })}
            </div>
        </>
    );
};

export default FilterToggle;
