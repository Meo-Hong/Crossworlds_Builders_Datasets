# Crossworld Dataset

[Crossworld Gadget Builder](https://www.srcgadgetbuilder.com)에서 사용하는 데이터와 번역 파일입니다.
오타, 번역, 수치 오류를 발견하면 PR로 수정해 주세요.

[English](#english)

## 구조

| 경로 | 내용 |
|---|---|
| `i18n/` | UI 번역 (`en` / `jp` / `kr`) |
| `JSON/` | 캐릭터, 가젯, 아이템, 머신, 맵 등 게임 데이터 |
| `JSON/meta/` | 대회 라운드별 메타 데이터 |

## 기여 방법

1. 이 리포를 Fork 합니다.
2. JSON 파일을 수정합니다.
   - `id` 값과 키 이름은 바꾸지 마세요. ID는 형식을 유지해주세요. (gadget_xxx, character_xxx, map_dlcxxx 등)
   - 번역은 `en`, `jp`, `kr` 세 언어 키를 모두 유지해 주세요. 번역 제공 기여에는 '하나의 번역문만 제공해도 괜찮습니다.
   - 기존 들여쓰기 형식을 그대로 따라 주세요.
3. 수정 이유나 근거(게임 내 스크린샷 등)를 적어 PR을 올립니다.
4. 이미지 추가는 사이트 제작자가 따로 올립니다. 따라서, 새로운 가젯 이미지를 적을 때 gadget_default.png / gadget_kit_default.png / gadget_super_default.png 이렇게 주시거나 미리 번호만 남기셔도 됩니다.
5. 언제나 여러분의 관심에 매우 감사합니다.

PR을 보내면 해당 기여분을 아래 라이선스로 제공하는 데 동의한 것으로 간주합니다.

## 라이선스

이 리포의 데이터는 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko) 라이선스를 따릅니다.

- 출처 표시: `Crossworld Gadget Builder (https://www.srcgadgetbuilder.com)`
- 비영리 목적으로만 사용할 수 있습니다.
- 이 데이터를 수정·가공해 배포할 때는 같은 라이선스를 적용해야 합니다.

이 라이선스는 기여자가 직접 작성한 설명·번역과 데이터의 구성에만 적용됩니다.
게임 내 수치 같은 사실 정보는 라이선스 대상이 아닙니다.

## 면책

Sonic Racing CrossWorlds 및 관련 명칭, 이미지, 게임 내 텍스트의 권리는 SEGA에 있습니다.
이 프로젝트는 SEGA와 무관한 비공식 팬 프로젝트입니다.

---

## English

Data and translation files used by [Crossworld Gadget Builder](https://www.srcgadgetbuilder.com).
If you find a typo, translation issue, or wrong value, please open a PR.

### Structure

| Path | Contents |
|---|---|
| `i18n/` | UI translations (`en` / `jp` / `kr`) |
| `JSON/` | Game data: characters, gadgets, items, machines, maps |
| `JSON/meta/` | Meta data per tournament round |

### Contributing

1. Fork this repository.
2. Edit the JSON files.
   - Do not change `id` values or key names.
   - Keep all three language keys: `en`, `jp`, `kr`.
   - Follow the existing indentation.
3. Open a PR describing the reason or source (e.g. an in-game screenshot).

By submitting a PR, you agree to license your contribution under the license below.

### License

Licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

- Attribution: `Crossworld Gadget Builder (https://www.srcgadgetbuilder.com)`
- Non-commercial use only.
- Derivatives must be shared under the same license.

This license covers only the descriptions and translations written by contributors and the structure of the data.
Factual in-game information such as numeric values is not covered.

### Disclaimer

Sonic Racing CrossWorlds and all related names, images, and in-game text are the property of SEGA.
This is an unofficial fan project and is not affiliated with SEGA.
