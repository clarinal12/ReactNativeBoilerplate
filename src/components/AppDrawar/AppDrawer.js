import React from "React";

import { Drawer } from "native-base";

const AppDrawer = props => {
  const { onClose, open } = props;
  return <Drawer open={open} content={null} onClose={onClose} />;
};

export default AppDrawer;
