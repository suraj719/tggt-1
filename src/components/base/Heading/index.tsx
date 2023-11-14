interface IndexProps {
  value: string;
}

const index: React.FC<IndexProps> = ({ value }) => {
  return <p className="font-bold text-center">{value}</p>;
};

export default index;
