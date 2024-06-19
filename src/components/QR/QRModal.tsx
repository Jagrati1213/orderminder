import {
  Button,
  Col,
  Divider,
  Flex,
  Input,
  Modal,
  QRCode,
  Row,
  Tooltip,
} from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import Style from "../../styles/_QrModal.module.scss";
import { LuCopy } from "react-icons/lu";
import { useAppSelector } from "../../store/store";
import { menuMuseWebsitePath } from "../../global";

interface modalProps {
  openQrModal: boolean;
  setOpenQrModal: Dispatch<SetStateAction<boolean>>;
}
export default function QRModal({ openQrModal, setOpenQrModal }: modalProps) {
  const [copyUrl, setCopyUrl] = useState<boolean>(false);
  const { vender } = useAppSelector((store) => store.authSlice);

  // METHODS
  const copyQrLinkHandler = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopyUrl(true);

    setTimeout(() => {
      setCopyUrl(false);
    }, 3000);
  };

  return (
    <div>
      <Modal
        centered
        open={openQrModal}
        footer={null}
        onCancel={() => setOpenQrModal(false)}
        className={Style.qr_modal}
        closeIcon={false}
      >
        <Row className={Style.qr_card}>
          <Col>
            <Row justify={"center"}>
              <Col span={24}>
                <h3>Scan QR Code</h3>
              </Col>
              <Col span={24}>
                <p>scan code & jump to website</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <QRCode
              type="svg"
              value={`${menuMuseWebsitePath}/menu/${vender?._id}`}
            />
          </Col>
        </Row>
        <Divider>Or copy the link manually</Divider>

        <Flex gap={"12px"} className={Style.qr_link_box}>
          <Input
            disabled
            value={`${menuMuseWebsitePath}/menu/${vender?._id}`}
            className={Style.qr_link}
          />

          <Tooltip title={copyUrl ? "Copied" : "Copy"}>
            <Button
              icon={<LuCopy />}
              onClick={copyQrLinkHandler.bind(
                null,
                `${menuMuseWebsitePath}/menu/${vender?._id}`
              )}
            />
          </Tooltip>
        </Flex>

        <Button type="primary" className={Style.print_btn}>
          Print
        </Button>
      </Modal>
    </div>
  );
}
