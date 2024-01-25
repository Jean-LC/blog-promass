// import logo from '@/public\logo.png'

//{/* <img src="../../../img/logo.png" alt="logo" /> */}
export default function HeaderLogo() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1rem",
      }}
    >
      <img src="/logo.png" alt="logo" style={{ width: "300px" }} />
    </div>
  );
}
