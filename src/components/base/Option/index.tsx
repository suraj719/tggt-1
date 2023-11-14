interface IndexProps {
  value: string;
  label: string;
}

const index: React.FC<IndexProps> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

export default index;
