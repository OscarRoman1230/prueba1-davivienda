import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  IsObject,
  IsUUID, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AccountDto {
  @IsString()
  type: string;

  @IsString()
  number: string;

  @IsString()
  state: string;

  @IsBoolean()
  isEmbargoed: boolean;

  @IsString()
  typeHandling: string;

  @IsString()
  productCode: string;

  @IsString()
  subProductCode: string;

  @IsNumber()
  balance: number;
}

export class ChannelDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  sessionId: string;

  @IsString()
  entryPoint: string;

  @IsString()
  ipAddress: string;

  @IsString()
  userAgent: string;
}

export class ClientDto {
  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsString()
  firstSurname: string;

  @IsString()
  secondSurname: string;

  @IsString()
  identificationType: string;

  @IsString()
  identificationNumber: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  email: string;

  @IsUUID()
  userId: string;
}

export class CreateRequestDto {
  @Type(() => ChannelDto)
  @ValidateNested()
  channel: ChannelDto;

  @IsObject()
  @ValidateNested()
  @Type(() => ClientDto)
  client: ClientDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AccountDto)
  accounts: AccountDto[];
}
