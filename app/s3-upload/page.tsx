import AWS from 'aws-sdk';
import S3ImageGallery from '../components/S3ImageGallery';
import UploadComponent from '../components/UploadComponent';

export default async function UploadFiles() {
  AWS.config.update({
    accessKeyId: process.env.S3_UPLOAD_KEY,
    secretAccessKey: process.env.S3_UPLOAD_SECRET,
    region: process.env.S3_UPLOAD_REGION,
  });

  const s3 = new AWS.S3();

  let urls: string[] = []; // Array to store all URLs
  const data = await s3
    .listObjectsV2(
      {
        Bucket: process.env.S3_UPLOAD_BUCKET as string,
      }
      // function (err, data) {
      //   if (err) {
      //     console.log(err, err.stack); // an error occurred
      //   } else {
      //     // console.log('data', data); // successful response
      //     data.Contents?.map((item) => {
      //       const params = {
      //         Bucket: process.env.S3_UPLOAD_BUCKET,
      //         Key: item.Key,
      //         Expires: 60 * 60,
      //       }; // Expires in 1 hour
      //       const url = s3.getSignedUrl('getObject', params);
      //       // console.log('The URL is', url);
      //       // return url;
      //       urls.push(url);
      //     });
      //   }
      //   // console.log('urls', urls);
      // }
    )
    .promise();

  data.Contents?.map((item) => {
    const params = {
      Bucket: process.env.S3_UPLOAD_BUCKET,
      Key: item.Key,
      Expires: 60 * 60,
    }; // Expires in 1 hour
    const url = s3.getSignedUrl('getObject', params);
    urls.push(url); // Add the URL to the array
  });

  return (
    <main className={'max-w-7xl mx-auto my-8'}>
      <UploadComponent />
      <S3ImageGallery urls={urls} />
    </main>
  );
}
