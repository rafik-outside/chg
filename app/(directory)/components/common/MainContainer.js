const MainContainer = ({ id, children, className = '' }) => {
  return (
    <main id={id} className={`main-container ${className}`}>
      {children}
    </main>
  );
};

export default MainContainer;