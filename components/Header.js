import headerStyles from "../styles/Header.module.css";

const Header = () => {
  // const x = 5 -> conditionnals 26:27 in Tuto
  return (
    <div>
      <h1 className={headerStyles.header}>The Headless HorseMERN</h1>
      <p className={headerStyles.description}></p>
    </div>
  );
};

export default Header;
