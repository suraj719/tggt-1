interface IndexProps {
  label: string;
  value: string;
}

const index: React.FC<IndexProps> = ({ label, value }) => {
  return (
    <p>
      {label}: {value}
    </p>
  );
};

export default index;
