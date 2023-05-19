const Form = (props) => {
  return (
    <form onKeyPress={props.eventEnter}>
      <input
        type="text"
        name="userName"
        placeholder="Username.."
        onChange={props.eventChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password.."
        onChange={props.eventChange}
      />
    </form>
  );
};

export default Form;
