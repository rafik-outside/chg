'use client';
import FilterToggle from "./FilterToggle";

const WorkFilterAndSort = ({slug,sort}) => {
    return (
        <section className="pageContent--workFilterAndSort">
            <FilterToggle slug={slug}></FilterToggle>
            <ul className="sort">
                <li>
                    <a
                        className={sort === 'curated' ? 'active' : ''}
                        href={`/work/${slug}`}
                    >
                        Curated
                    </a>
                </li>
                <li>
                    <a
                        className={sort === 'az' ? 'active' : ''}
                        href={`/work/${slug}/az`}
                    >
                        A–Z
                    </a>
                </li>
                <li>
                    <a
                        className={sort === 'new' ? 'active' : ''}
                        href={`/work/${slug}/new`}
                    >
                        Newest
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default WorkFilterAndSort;