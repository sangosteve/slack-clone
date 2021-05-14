import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import SidebarOption from "./SidebarOption";

import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h3>Konekta</h3>
          <h5>
            <UserStatusIcon /> Steve Sango
          </h5>
        </SidebarInfo>

        <UserAvatarWrapper>
          <UserEditIcon />
        </UserAvatarWrapper>
      </SidebarHeader>

      <SidebarOption Icon={ChatOutlinedIcon} title="Threads" />
      <SidebarOption
        Icon={AlternateEmailRoundedIcon}
        title="Mentions & Relations"
      />
      <SidebarOption Icon={LocalOfferRoundedIcon} title="Saved Items" />
      <SidebarOption Icon={MoreVertOutlinedIcon} title="More" />
      <hr />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title="Channels" />
      <hr />
      <SidebarOption
        Icon={AddOutlinedIcon}
        title="Add Channel"
        addChannelOption
      />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.3;
  background-color: var(--slack-color);
  border-top: solid 1px #703259;
  margin-top: 46px;
  max-width: 260px;
`;

const SidebarHeader = styled.div`
  flex: 1;
  display: flex;
  color: #fff;
  border-bottom: solid 1px #703259;
  padding: 10px;
`;

const SidebarInfo = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  > h3 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h5 {
    display: flex;
    font-size: 13px;
    font-weight: 900;
    align-items: center;
  }
  > h5 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: #00e676;
  }
`;

const UserStatusIcon = styled(FiberManualRecordIcon)``;

const UserAvatarWrapper = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserEditIcon = styled(BorderColorOutlinedIcon)`
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  background-color: #fff;
  color: var(--slack-color);
  :hover {
    opacity: 0.8;
  }
`;
