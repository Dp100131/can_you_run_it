import {Navbar, NavbarBrand} from "@nextui-org/react"; 

export function Header() {
  return (
    <Navbar>
      <NavbarBrand> 
        <h1 className="font-bold text-inherit text-3xl ">CAN YOU RUN IT?</h1>
      </NavbarBrand> 
    </Navbar>
  );
}