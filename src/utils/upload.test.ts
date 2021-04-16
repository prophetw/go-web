import axios from 'axios';
describe('API', () => {
  test('test API', async () => {
    const file = new File(new Array(10), '1.txt');
    const file1 = new File(new Array(10), '2.txt');
    const formData = new FormData();
    formData.append('file[]', file);
    formData.append('file[]', file1);
    console.log('1');
    // const res = await axios.get('http://172.22.109.132:8010')
    // console.log('res', res)
    const res = await axios.request({
      method: 'POST',
      url: 'http://172.22.109.132:8010/upload',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res);
    expect(1).toBe(1);
  });
});
