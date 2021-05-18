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
