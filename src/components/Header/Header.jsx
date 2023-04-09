import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={`${
        isMobile ? "bg-headerMobBg" : "bg-headerBg"
      } bg-no-repeat bg-cover w-full  bg-desatDarkCyan h-[25vh]`}
    ></div>
  );
};

export default Header;
