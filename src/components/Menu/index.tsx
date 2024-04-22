import { Avatar, Button, Flex, List } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import MenuViewDrawer from "./MenuViewDrawer";
import AddMenuDrawer from "./AddMenuDrawer";
import { MenuListType, drawerOptions } from "../../types";
import Style from "../../styles/_Menu.module.scss";
import EditMenuDrawer from "./EditMenuDrawer";

export default function Menu() {
  // states
  const [drawerOptions, setDrawerOptions] = useState<drawerOptions>({
    isAddMenuOpen: false,
    isMenuViewOpen: false,
    isMenuEditorOpen: false,
  });
  const [menuList, setMenuList] = useState<MenuListType[]>([
    {
      id: 1,
      name: "Menu 1",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
      price: 200,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quos sit modi aliquid aperiam aut at et rem tempora, voluptate porro, laudantium magnam quam? Doloribus autem, adipisci placeat reprehenderit est provident, repudiandae aliquam dicta atque illo nesciunt, corporis repellat fugit maxime? Eaque temporibus",
    },
    {
      id: 2,
      name: "Menu 2",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
      price: 200,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quos sit modi aliquid aperiam aut at et rem tempora, voluptate porro, laudantium magnam quam? Doloribus autem, adipisci placeat reprehenderit est provident, repudiandae aliquam dicta atque illo nesciunt, corporis repellat fugit maxime? Eaque temporibus",
    },
  ]);
  const [menuDetails, setMenuDetails] = useState<MenuListType>(menuList[0]);

  // methods
  const showDrawer = (option: string) => {
    setDrawerOptions((prev) => ({ ...prev, [option]: true }));
  };

  return (
    <div className={Style.menu_container}>
      <Flex gap="40px" vertical>
        <Flex justify={"space-between"} align="center">
          <Title level={5}>Menus </Title>
          <Button
            type="primary"
            shape="round"
            onClick={showDrawer.bind(null, "isAddMenuOpen")}
          >
            Add Menu
          </Button>
        </Flex>

        <List
          dataSource={menuList}
          bordered
          renderItem={(item, index) => (
            <List.Item
              key={item.id}
              actions={[
                <p>&#8377; {item?.price}</p>,
                <Button
                  type="link"
                  onClick={() => {
                    setMenuDetails(menuList[index]);
                    showDrawer("isMenuViewOpen");
                  }}
                >
                  View
                </Button>,
                <Button
                  type="link"
                  onClick={() => {
                    setMenuDetails(menuList[index]);
                    showDrawer("isMenuEditorOpen");
                  }}
                >
                  Edit
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar shape="square" size="large" src={item.image} />}
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description={`${item.desc?.slice(0, 60)}...`}
              />
            </List.Item>
          )}
        />

        <MenuViewDrawer
          open={drawerOptions.isMenuViewOpen}
          setOpen={setDrawerOptions}
          menuData={menuDetails}
        />
        <AddMenuDrawer
          open={drawerOptions.isAddMenuOpen}
          setOpen={setDrawerOptions}
        />

        <EditMenuDrawer
          open={drawerOptions.isMenuEditorOpen}
          setOpen={setDrawerOptions}
          menuData={menuDetails}
        />
      </Flex>
    </div>
  );
}
