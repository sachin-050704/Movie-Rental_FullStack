import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { RxCross2 } from "react-icons/rx";

export default function Drop() {
  return (
    <Menu>
      <SubMenu label="Home" suffix={<RxCross2 />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 1</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 2</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 3</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 4</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 5</MenuItem>
      </SubMenu>
      <SubMenu label="Movies" suffix={<RxCross2 />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Movie</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Movie Details</MenuItem>
      </SubMenu>
      <SubMenu label="TvShows" suffix={<RxCross2 />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>TvShows</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>TvShows Details</MenuItem>
      </SubMenu>
      <SubMenu label="Web Series" suffix={<RxCross2 />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Web Series</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Web Series Details</MenuItem>
      </SubMenu>
      <SubMenu label="Pages" suffix={<RxCross2 />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>About Us</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Artist</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Subscriptions</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Cooming Soon</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Log In</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Error 404</MenuItem>
      </SubMenu>
      <SubMenu label="Blogs" suffix={<RxCross2 />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Blog</MenuItem>
        <MenuItem style={{ backgroundColor: "black", color: "white" }}>Blog Details</MenuItem>
      </SubMenu>
      <MenuItem style={{ padding: "0" }}> Contact</MenuItem>
    </Menu>
  )
}
