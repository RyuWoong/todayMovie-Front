import React from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';

const { TextArea } = Input;

const CustomModal = ({ isVisible, setVisible }) => {
  const [form] = Form.useForm();

  const handleOK = () => {
    form.validateFields().then((values) => {
      console.log(values);
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
