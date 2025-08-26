import '@/public/styles/view-all-work.css'; 
import Link from 'next/link';


const ViewAllWork = () => {
  return (
    <section className="pageContent pageContent--viewAllWork">
      <Link href="/work/logos">View more logos</Link>
    </section>
  );
};

export default ViewAllWork;