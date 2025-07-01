
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// import { Role } from 'apps/firstsvc/src/DTO/role.enum';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './role.enum';
import { JwtService } from '@nestjs/jwt';
import { promises } from 'dns';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector ,private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext):Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
     if (!token) {
          throw new UnauthorizedException();
        }
        const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: "bhanu"
        }
       
      );
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    
    ]);
    if (!requiredRoles) {
      return true;
    }

    // console.log(context.switchToHttp().getRequest())
    return requiredRoles.some((role) => payload.role?.includes(role));
  }

  private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers["authorization"].split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
}
