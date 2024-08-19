import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { JWTDto } from './dto/JWT.dto';
import { AUTH_API } from '../common/constants';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: AUTH_API.OPERATION_SUMMARY.SIGN_IN })
  @ApiResponse({
    status: AUTH_API.RESPONSE_STATUS.SUCCESS,
    description: AUTH_API.RESPONSE_DESCRIPTIONS.SUCCESS,
    type: JWTDto,
  })
  @ApiResponse({
    status: AUTH_API.RESPONSE_STATUS.UNAUTHORIZED,
    description: AUTH_API.RESPONSE_DESCRIPTIONS.UNAUTHORIZED,
  })
  signIn(@Body() signInDto: SignInDto): Promise<JWTDto> {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
