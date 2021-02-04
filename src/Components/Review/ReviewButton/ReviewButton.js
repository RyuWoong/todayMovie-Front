import React from 'react';
import { Button, Form, Input, Menu, Modal, Radio } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';
import { putUserReview } from '../../../lib/api/post/putUserReview';

const { TextArea } = Input;

const CustomModal = ({ isVisible, setVisible }) => {
  const [form] = Form.useForm();

  const handleOK = () => {
    form.validateFields().then((values) => {
      console.log(values);
      putUserReview(values);
      form.resetFields();
    });
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <Modal
      title="📝 평가남기기"
      visible={isVisible}
      okText="Submit"
      onCancel={handleCancel}
      onOk={handleOK}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="어디서 보셨나요?" name="Platform">
          <Menu>
            <Menu.Item key="0">Netflix</Menu.Item>
            <Menu.Item key="1">Watcha</Menu.Item>
            <Menu.Item key="2">타 OTT</Menu.Item>
            <Menu.Item key="4">IPTV VOD</Menu.Item>
            <Menu.Item key="5">다운로드</Menu.Item>
            <Menu.Item key="6">비디오나 DVD</Menu.Item>
          </Menu>
        </Form.Item>
        <Form.Item label="영화는 어땠나요?" name="Rate">
          <Radio.Group size="large">
            <Radio.Button value="1">👍 추천해요!</Radio.Button>
            <Radio.Button value="0">🤔 평가보류</Radio.Button>
            <Radio.Button value="-1">👎 별로예요.</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="생각을 간략하게 남겨주세요." name="Text">
          <TextArea showCount maxLength={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function ReviewButton() {
  const [isVisible, setVisible] = useState(false);
  const handleShowModal = () => {
    setVisible(true);
  };

  return (
    <>
      <Button onClick={handleShowModal}>
        <FormOutlined />
        평가하기
      </Button>
      <CustomModal setVisible={setVisible} isVisible={isVisible} />
    </>
  );
}

export default ReviewButton;
