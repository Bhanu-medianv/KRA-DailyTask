import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { userDto } from 'libs/dtos/user/user.dto';

import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiGatewayService {
    
}
