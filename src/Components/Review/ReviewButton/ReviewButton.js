import React, { useState } from 'react';
import { Button, Cascader, Form, Input, Modal, Radio } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { putUserReview } from '../../../lib/api/post/putUserReview';

const { TextArea } = Input;

const CustomModal = ({ isVisible, setVisible }) => {
  const [form] = Form.useForm();
  const options = [
    {
      code: 'Netflix',
      name: 'Netflix',
    },
    {
      code: 'Watcha',
      name: 'Watcha',
    },
    {
      code: '기타 OTT',
      name: '기타 OTT',
    },
    {
      code: 'IPTV',
      name: 'IPTV',
    },
    {
      code: '다운로드',
      name: '다운로드',
    },
    {
      code: '비디오,DVD',
      name: '비디오,DVD',
    },
  ];
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
          <Cascader
            fieldNames={{ label: 'name', value: 'code' }}
            options={options}
            placeholder="플랫폼을 선택해주세요."
          />
        </Form.Item>
        <Form.Item label="영화는 어땠나요?" name="Rate">
          <Radio.Group size="large">
            <Radio.Button value="1">👍 추천해요!</Radio.Button>
            <Radio.Button value="0">🤔 평가보류</Radio.Button>
            <Radio.Button value="-1">👎 별로예요.</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="후기를 간략하게 남겨주세요." name="Text">
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
