import React from "react";
import styled from "styled-components";
// ICONS
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderWatchIcon />
      </HeaderLeft>

      <HeaderSearch>
        <HeaderSearchIcon />
        <input type="text" placeholder="search items..." />
      </HeaderSearch>

      <HeaderRight>
        <HeaderHelpIcon />
        <HeaderAvatarIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--slack-color);
  display: flex;
  padding: 10px 0;
  align-items: center;
  position: fixed;
`;

// HeaderLeft
const HeaderLeft = styled.div`
  flex: 0.3;
  padding: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    color: #fff;
  }
`;

const HeaderWatchIcon = styled(AccessTimeIcon)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

// HeaderSearch
const HeaderSearch = styled.div`
  flex: 0.4;
  > .MuiSvgIcon-root {
    color: #fff;
  }
  opacity: 1;
  border-radius: 6px;
  background-color: #5c3a58;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #fff;
  }
`;

const HeaderSearchIcon = styled(SearchIcon)`
  color: #fff;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
`;

const HeaderHelpIcon = styled(HelpOutlineOutlinedIcon)`
  cursor: pointer;
  color: #fff;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderAvatarIcon = styled(AccountCircleOutlinedIcon)`
  cursor: pointer;
  font-size: 40px;
  color: #fff;
  align-self: flex-end;
  :hover {
    opacity: 0.8;
  }
`;
