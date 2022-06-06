import { Module } from '@nestjs/common';
import { OwnersMoudle } from 'src/owners/owners.module';
import { CatOwnerResolver } from './cat-owner.resolver';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';

@Module({
  imports: [OwnersMoudle],
  providers: [CatsService, CatsResolver, CatOwnerResolver],
})
export class CatsModule {}
