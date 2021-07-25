# main.ts

노드 어플리케이션에서의 `app.js`와 같은 역할을 하는 파일로서 nest 어플리케이션의 입구(entry)이다.

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

`NestFactory`는 Nest 어플리케이션을 시작하기 위한 앱에 대한 인스턴스를 만드는 클래스이다. 그렇기 때문에 상단의 import 해오는 위치를 보면 `@nest/core` 라고 적혀있지 않은가! 여기도 또 봐야할 내용은 인자로 들어가는 `AppModule` 이다. AppModule 안에 무엇인가 있을텐데, 보통 설정되어 있는 조건들일 것으로 추측할 수 있다. 이를 바탕으로 앱의 인스턴스를 만든다고 유추할 수 있다.

> Nest는 객체지향프로그래밍을 바탕으로 만들어지 프레임워크이다. 마치 스프링과 매우 유사하다. 아마도 스프링을 해본 사람이라면 전체적인 구조를 이해하는데 크게 어려움이 없을 수 있다.
