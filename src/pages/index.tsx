import { Link } from 'umi';

const UploadComponent = () => {
  return (
    <>
      <h1>PDF Utils</h1>
      <div>
        <Link to={'/img-to-pdf'}>图片转PDF</Link>
      </div>
      <div>
        <Link to={'/merge-pdf'}>合并PDF</Link>
      </div>
      <div>
        <Link to={'/compress-pdf'}>压缩PDF</Link>
      </div>
      <div>
        <Link to={'/img-to-txt'}>图片转文字</Link>
      </div>
    </>
  );
};
export default UploadComponent;
