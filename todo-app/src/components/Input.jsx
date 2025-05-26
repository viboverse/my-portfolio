const Input = ({ title, type = "text", TextContainer = "input", ...props }) => {
  const Container = TextContainer;

  return (
    <>
      <label>{title}</label>
      <Container {...props} type={type}></Container>
    </>
  );
};

export default Input;
