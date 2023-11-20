import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FileUploadService {
  private readonly s3Client: S3Client;
  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async createPresignedUrlWithClient(filename: string) {
    const key = this.createKey(filename);
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    });
    console.log('called');
    const url = await getSignedUrl(this.s3Client, command, { expiresIn: 3600 });

    return {
      url: url,
      key: key,
    };
  }

  private createKey(filename: string) {
    return `${uuid()}-${filename}`;
  }
}
