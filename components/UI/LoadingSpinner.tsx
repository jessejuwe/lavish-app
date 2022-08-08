type Props = {};

const LoadingSpinner: React.FC<Props> = () => {
  return (
    <div className="spinner"></div>
    // <div className="spinner after:content-[' '] after: spinner-after"></div>
  );
};

export default LoadingSpinner;
