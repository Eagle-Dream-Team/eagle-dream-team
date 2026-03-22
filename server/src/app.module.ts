import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StaffModule } from './staff/staff.module';
import { TutorController } from './tutor/tutor.controller';
import { Tutormodule } from './tutor/tutor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    StaffModule,
    Tutormodule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
