import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { GameModule } from './game/game.module';
import { GenderModule } from './gender/gender.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [UserModule, ProfileModule, GameModule, GenderModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
