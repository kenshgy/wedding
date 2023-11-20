import { Controller, Get, Req } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';

@Controller('files')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Get('signedUrl')
  async getPresignedUrl(@Req() request) {
    return this.fileUploadService.createPresignedUrlWithClient(
      request.query.fileName,
    );
  }
}
