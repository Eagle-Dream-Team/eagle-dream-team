import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StaffModule } from './staff/staff.module';
import { Tutormodule } from './tutor/tutor.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { MessageModule } from './message/message.module';
import { FileModule } from './file/file.module';
import { RyanTestModule } from './ryan-test/ryan-test.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    StaffModule,
    Tutormodule,
    UserModule,
    StudentModule,
    MessageModule,
    FileModule,
    BlogModule,
    RyanTestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
