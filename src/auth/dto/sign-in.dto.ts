import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'username',
    example: 'max_doe',
  })
  username: string;

  @ApiProperty({
    description: 'password',
    example: 'pAssword1#',
  })
  password: string;
}
