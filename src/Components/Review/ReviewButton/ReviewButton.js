import React from 'react';
import { Button, Input, Modal, Radio } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';

const { TextArea } = Input;

function ReviewButton() {
  const [isVisible, setVisible] = useState(false);
  const handleShowModal = () => {
    setVisible(true);
  };
  const handleOK = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Button onClick={handleShowModal}>
        <FormOutlined />
        평가하기
      </Button>
      <Modal title="📝 평가남기기" visible={isVisible} onOk={handleOK} onCancel={handleCancel}>
        <Radio.Group defaultValue="1" size="large">
          <Radio.Button value="1">👍 추천해요!</Radio.Button>
          <Radio.Button value="0">🤔 평가보류</Radio.Button>
          <Radio.Button value="-1">👎 별로예요.</Radio.Button>
        </Radio.Group>
        <TextArea showCount maxLength={100} />
      </Modal>
    </>
  );
}

export default ReviewButton;
