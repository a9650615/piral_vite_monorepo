import React from "react";
import styled from "styled-components";

const ContainerOuter = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 30px 0;
`;
const ContainerFrame = styled.div`
  display: flex;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

const MenuFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  width: 300px;
`;

export const Container = ({ children, menuItems }: any) => {
  return (
    <ContainerOuter>
      <ContainerFrame>
        <MenuFrame>
          {Object.keys(menuItems).map(key =>
            menuItems[key].map(({ path, name }) => (
              <div key={path}>
                <a href={`/${key}/${path}`}>{name}</a>
              </div>
            )),
          )}
        </MenuFrame>
        <div style={{ flex: 1 }}>{children}</div>
      </ContainerFrame>
    </ContainerOuter>
  );
};
