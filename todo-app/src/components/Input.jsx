const Input = ({ label, type = 'text', TextContainer = 'input', ...props }) => {
  const Container = TextContainer;

  return (
    <>
      <label>{label}</label>
      <Container {...props} type={type}></Container>
    </>
  );
};

export default Input;
