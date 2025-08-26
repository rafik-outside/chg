'use client';
import Link from "next/link";
import FilterToggle from "./FilterToggle";

const WorkFilterAndSort = ({ slug, sort }) => {
    return (
        <section className="pageContent--workFilterAndSort">
            <FilterToggle slug={slug}></FilterToggle>
            <ul className="sort">
                <li>
                    <Link
                        className={sort === 'curated' ? 'active' : ''}
                        href={`/work/${slug}`}
                    >
                        Curated
                    </Link>
                </li>
                <li>
                    <Link
                        className={sort === 'az' ? 'active' : ''}
                        href={`/work/${slug}/az`}
                    >
                        A–Z
                    </Link>

                </li>
                <li>
                    <Link
                        className={sort === 'new' ? 'active' : ''}
                        href={`/work/${slug}/new`} >

                        Newest
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default WorkFilterAndSort;