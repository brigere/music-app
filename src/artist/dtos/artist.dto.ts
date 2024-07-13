import { IsNumberString, IsOptional } from 'class-validator';

export class PagnationQueryDTO {
  @IsNumberString(
    { no_symbols: true },
    { message: 'limit shuld be unsigned number string' },
  )
  @IsOptional()
  limit?: number;

  @IsNumberString(
    { no_symbols: true },
    { message: 'limit shuld be unsigned number string' },
  )
  @IsNumberString({ no_symbols: true })
  @IsOptional()
  skip?: number;
}
