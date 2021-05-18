# NestJS101

> 두둥 드디어 Node Framework인 NestJS를 알아보고자 한다. Learning by Doing에 충실한 [Nomad Coders NestJS](https://nomadcoders.co/nestjs-fundamentals)를 통해서 만들어보고 해당 내용을 공식문서를 통해서 직접 찾아보면서 정리해보고자 한다.

## Setup NestJS Project

```shell
  npm i -g @nestjs/cli

  nest new <project name>
```

위의 명령어로 NestJS프로젝트를 시작한다. `@nestjs/cli`는 CLI를 통해서 Nest 프로젝트를 시작하고, 개발하며 유지보수하는데 도움을 주는 툴이다. 이것을 전역으로 설치해준 후, 그 아래 명령어를 통해서 Nest 프로젝트를 시작할 수 있다. 그러면 아래와 같은 최초 디렉터리 구조를 볼 수 있다. 여기서 nodemodules, test등의 디렉터리와 여러가지 설정 파일을 확인해 볼 수 있다.

![src](./screenshot/src.png)

특히 src 디렉토리에는 **5가지의 주요 파일**을 확인할 수 있다.
| 파일명 | 기능 |
|:-----:|:----|
|app.controller.ts| 일반적인 노드(express) 어플리케이션에서 확인할 수 있는 컨트롤러이다. MVC 패턴으로 설명하면 모델과 뷰사이를 연결해 주는 로직이 존재하는 곳으로서 `어떻게`에 대한 부분이 보여준다. 하지만 여기 Nest 어플리케이션에서의 컨트롤러는 (개인적인 생각이지만) 좀 더 라우팅에 초점이 맞춰져 있다. 클라이언트의 요청(request)과 클라이언트에게의 응답(response)을 어떻게 핸들링할 것인지에 대한 내용이 들어간다.|
|app.controller.spec.ts|컨트롤러에 대한 유닛테스트를 구현하는 파일이다.|
|app.module.ts| 어플리케이션의 루트 모듈|
|app.service.ts| 간단한 토이프로젝트에서는 기본적인 MVC만으로 모든 것을 해결한다. 하지만 좀 큰 규모의 프로젝트에서는 service layer를 구현한다. |
|main.ts| 노드 어플리케이션에서의 app.js와 같은 역할을 하는 파일로서 Nest 어플리케이션의 입구(entry)이다.|

## NestJS Architecture

## REST API

## Unit Testing

## E2E Testing
