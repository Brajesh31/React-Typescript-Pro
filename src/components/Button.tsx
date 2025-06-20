interface props {
  handleClick: () => void;
  children: string;
}

function Button({ handleClick, children }: props) {
  return (<>
    <button onClick={handleClick} className="btn btn-primary" type="button">
      {children}
    </button>

</>
  );
}

export default Button;
