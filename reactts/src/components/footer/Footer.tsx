import React from "react";
import { Layout, Typography} from "antd";

export const Footer: React.FC = () => {
    
  return(
    <Layout.Footer >
      <Typography.Title level={2} style={{textAlign:"center"}}>
        版权所有 @ LEE旅游网
      </Typography.Title>
    </Layout.Footer>
  );
}