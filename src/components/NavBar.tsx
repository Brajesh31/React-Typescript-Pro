interface props {
  cartItemCount: number;
}

const NavBar = ({ cartItemCount }: props) => {
  return <div>NavBar{cartItemCount}</div>;
};

export default NavBar;
