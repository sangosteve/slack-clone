import React, { useState, useContext } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { RoomContext } from "../contexts/RoomContext";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const { roomId, setRoomId } = useContext(RoomContext);

  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      setRoomId(id);
      console.log(roomId);
    }
  };
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
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
  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
`;
