import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import configuration from './config/configuration';
import { FileUploadModule } from './file-upload/file-upload.module';
// import { FileAccessModule } from './fileAccess/fileAccess.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // load: [configuration],
      isGlobal: true,
    }),
    // FileAccessModule,
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
