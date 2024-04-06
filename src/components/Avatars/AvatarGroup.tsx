'use client';

import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";

const AvatarGroups = ({ maxValue }: any) => {
  return (
    <AvatarGroup
      isBordered
      max={maxValue}
      total={10}
      renderCount={(count) => (
        <p className="text-small text-foreground font-medium ms-2">+{count} others people are joining us</p>
      )}
    >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
  );
};
export default AvatarGroups;
