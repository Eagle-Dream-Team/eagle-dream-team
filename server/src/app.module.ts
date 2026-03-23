import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StaffModule } from './staff/staff.module';
import { Tutormodule } from './tutor/tutor.module';
import { RyanTestModule } from './ryan-test/ryan-test.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    StaffModule,
    Tutormodule,
    RyanTestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
