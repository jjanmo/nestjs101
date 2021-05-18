# app.controller.ts

일반적인 노드(express) 어플리케이션에서 확인할 수 있는 컨트롤러이다. MVC 패턴으로 설명하면 모델과 뷰사이를 연결해 주는 로직이 존재하는 곳으로서 `어떻게`에 대한 부분이 보여준다. 하지만 Nest 어플리케이션에서의 컨트롤러는 (개인적인 생각이지만) 약간 다른 느낌이 있다. 좀 더 `라우팅에 초점`이 맞춰져 있다. 클라이언트의 요청(request)과 클라이언트에게의 응답(response)을 어떻게 핸들링할 것인지에 대한 내용이 들어간다.

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```
