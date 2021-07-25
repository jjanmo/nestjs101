# app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

Nest 프로젝트는 전체적으로 하나의 큰 앱(루트)를 중심으로 여러 개의 앱을 모듈 형태로 넣어주는 방식을 취하고 있다. 즉 개발자가 프로젝트를 관리할 때 각각의 앱 단위로 관리하게 되어 있다. 마치 Django에서 프로젝트를 만들고 그 안에서 각각의 앱을 만들어서 프로젝트를 구성하는 것과 매우 유사한 느낌이다.

이제 이 module.ts 파일에서 알아야 할 것은 기본적으로 2가지가 있다.

- @ 의 의미
- @Module() 안에 인자로 들어가는, 각각의 key의 의미

<br />

## @ : decorator

데코레이터는 <u>전달된 함수의 동작에 추가 혹은 수정을 하는 함수를 반환한다.</u> 쉽게 말하면, 미들웨어 느낌이 나는 또 다른 함수라고 생각하면 이해하기 쉽다. 데코레이터는 함수가 일급시민(일급객체)인 언어에서는 모두 사용이 가능한다. 함수를 인자로 전달할 수 있고, 변수에 할당 할 수 있으며, 리턴값으로 사용할 수 있을 때, 이러한 함수를 일급시민(일급객체)이라고 부른다. 자바스크립트에서의 데코레이터에 대해서 자세히 알고 싶다면, [여기](https://ui.toast.com/weekly-pick/ko_20200102)를 참고하시길...

## Module 인자의 의미

- imports : 해당 모듈에 집어넣을 모듈에 대한 리스트, app.module에선 새로운 앱이 생길때 마다 해당 앱의 모듈을 적어줘야 한다.
- controllers : 인스턴스화 해야하는 해당 앱에서 정의된 컨트롤러 리스트를 적어준다
- providers : 모듈에서 공유되어야 하는 제공자 리스트를 적어준다. NestInjector에 의해서 인스턴스화되어서 필요로 하는 부분에서 의존성 주입을 통해서 집어넣어줄 수 있게 만들어준다.
- exports : 해당 앱에서 밖으로 내보낼 모듈을 적어준다. 위 코드에선 없지만, 외부에서 사용가능하게 만들기 위해선 여기에 적어줘야 한다.
