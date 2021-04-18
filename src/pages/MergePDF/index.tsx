import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
  const [fileList, setFile] = useState([]);
  const mergeAndConvert = () => {
    console.log('fileList', fileList);
    var formData = new FormData();
    fileList.map((file) => {
      formData.append('file[]', file);
    });
    axios.request({
      method: 'POST',
      url: 'http://192.168.1.3:8010/pdfmerge',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return (
    <>
      <Upload
        listType="picture"
        multiple={true}
        fileList={fileList}
        beforeUpload={(file, newFileList) => {
          console.log(fileList);
          const nFileList = [...fileList, ...newFileList];
          setFile([...nFileList]);
          return false;
        }}
        onRemove={(file) => {
          const newList = [...fileList];
          const index = newList.indexOf(file);
          console.log(index);
          newList.splice(index, 1);
          setFile(newList);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <Button onClick={mergeAndConvert}>合并PDF</Button>
    </>
  );
};
export default UploadComponent;
