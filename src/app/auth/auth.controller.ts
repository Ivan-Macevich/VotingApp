import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() { }

  async signUp() {
    return
  }
  async signIn(username: string, password: string) : Promise<{access_token:string}> {
    return
  }
  async signout() {
    return
  }
}