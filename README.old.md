# environment-config-example
set up environment ( dev, staging, production )

## React
* dotenv

## React Native
Appcenter를 사용하고 IOS일 경우, Appcenter에서 지정한 환경변수가 정상적으로 인식하지 않아 Appcenter의 appcenter-pre-build.sh 쉘을 만들어 환경변수를 지정해줘야한다. 따라서 dotenv와 같이 package스크립트 단계에서 환경변수를 지정할 시 정상 인식이 안될 수 있다.
두 가지 버젼을 만들어 보도록 하겠다.
1. Appcenter가 아닌 버젼.
2. Appcenter일 경우의 버젼.

## Node JS
* dotenv
