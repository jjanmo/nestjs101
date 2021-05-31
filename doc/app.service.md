# app.service.ts

간단한 토이프로젝트에서는 기본적인 MVC만으로 모든 것을 해결한다. 하지만 좀 큰 규모의 프로젝트에서는 service layer를 구현한다.

Service Layer는 로직을 관리하는 부분이다. 어떠한 한 개의 요소가 한가지의 책임을 갖게된다.(Single Responsibility Principle)

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```
