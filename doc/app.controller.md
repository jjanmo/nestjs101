# app.controller.ts

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

일반적인 노드(express) 어플리케이션에서 확인할 수 있는 컨트롤러이다. MVC 패턴으로 설명하면 모델과 뷰사이를 연결해 주는 로직이 존재하는 곳으로서 `어떻게`에 대한 부분이 보여준다. 하지만 Nest 어플리케이션에서의 컨트롤러는 (개인적인 생각이지만) 약간 다른 느낌이 있다. 좀 더 `라우팅에 초점`이 맞춰져 있다. 해당 URL을 맵핑하여 클라이언트의 요청을 받고 Query나 Body를 넘기는 등의 역할을 한다. 즉 클라이언트의 요청(request) 어떻게 핸들링할 것인지에 대한 내용이 들어간다.

> Nest에서의 컨트롤러는 요청을 처리하고 응답을 반환하는 공간이다. 어떻게 응답을 만들어낼지에 대한 비지니즈 로직은 여기에 없다.(service에 존재)
