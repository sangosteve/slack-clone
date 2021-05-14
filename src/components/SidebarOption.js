import React from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function SidebarOption({ Icon, title, addChannelOption }) {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  console.log(channels);
  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {};
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  cursor: pointer;
  color: #fff;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h4 {
    font-weight: 500;
  }
`;
const SidebarOptionChannel = styled.div``;
