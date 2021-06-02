import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
  const [fileList, setFile] = useState<RcFile[]>([]);
  const [downloadLink, setLink] = useState('');
  const [name, setName] = useState('');
  const [txt, setTxt] = useState('');
  const mergeAndConvert = () => {
    var formData = new FormData();
    formData.append('file', fileList[0]);
    axios
      .request({
        method: 'POST',
        url: '/img2txt',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('res', res);
        if (res && res.data && res.data.code === 200) {
          const { message } = res.data;
          setTxt(message);
        }
      });
  };
  return (
    <>
      <Upload
        listType="picture"
        fileList={fileList}
        beforeUpload={(file, newFileList) => {
          setFile([file]);
          return false;
        }}
      >
        <Button icon={<UploadOutlined />}>选择图片</Button>
      </Upload>
      <Button onClick={mergeAndConvert}>图片转文字</Button>
      {txt && <div>{txt}</div>}
    </>
  );
};
export default UploadComponent;
