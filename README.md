# Crossworld Dataset

[Crossworld Gadget Builder](https://www.srcgadgetbuilder.com)에서 사용하는 데이터와 번역 파일입니다.
오타, 번역, 수치 오류를 발견하면 PR로 수정해 주세요.

[English](#english) · [日本語](#日本語)

## 구조

| 경로 | 내용 |
|---|---|
| `i18n/` | UI 번역 (`en` / `jp` / `kr`) |
| `JSON/` | 캐릭터, 가젯, 아이템, 머신, 맵 등 게임 데이터 |
| `JSON/meta/` | 대회 라운드별 메타 데이터 |

## 메타 데이터 안내 (`JSON/meta/LC_round*.json`)

- 순위 데이터(`rankings`)는 게임 내 순위를 보고 직접 수기로 기록했습니다.
- 빌드 유형 분류(`clusters`, `clustering_rules`)와 사용률 같은 통계·분석은 Claude를 활용한 클러스터링과 분석으로 만들었습니다.
- 수정할 때는 이 점을 인지하고 바꿔 주세요. 순위 기록 오류는 그대로 고치면 되고, 분류·분석 결과는 AI 분석 결과라는 점을 감안해 수정해 주시면 됩니다.

## 추천 빌드 제보

추천 빌드 데이터는 이 리포에 포함되지 않으며 PR로 받지 않습니다.
제보 시, 사용하는 영상 (유튜브면 OK.), 빌드의 설명 및 목적, 본인의 점수대를 말씀해주세요. 점수대는 어느정도 믿을만한 실력을 증명하기 위함입니다.
(개인적으론 World Match 8000점 이상 / Legend Competition 1950점 이상만 받고 싶습니다. 8000점은 게임을 오랫동안 해야 도달할 수 있는 점수니까요.)

 아래 경로로 제보해 주세요.
- 이메일: busimh001@gmail.com
- X DM: [@Meo__hong](https://x.com/Meo__hong)
- Discord: [Meo-Hong](https://discordapp.com/users/534945564387966987)

## 기여 방법

1. 이 리포를 Fork 합니다.
2. JSON 파일을 수정합니다.
   - `id` 값과 키 이름은 바꾸지 마세요. ID는 형식을 유지해 주세요. (`gadget_xxx`, `character_xxx`, `map_dlcxxx` 등)
   - 번역은 `en`, `jp`, `kr` 세 언어 키를 모두 유지해 주세요. 번역 제공 기여에는 하나의 번역문만 제공해도 괜찮습니다.
   - 기존 들여쓰기 형식을 그대로 따라 주세요.
3. 수정 이유나 근거(게임 내 스크린샷 등)를 적어 PR을 올립니다.
4. 이미지 추가는 사이트 제작자가 따로 올립니다. 따라서, 새로운 가젯 이미지를 적을 때 `gadget_default.png` / `gadget_kit_default.png` / `gadget_super_default.png` 이렇게 주시거나 미리 번호만 남기셔도 됩니다.
5. 언제나 여러분의 관심에 매우 감사합니다.

PR을 보내면 해당 기여분을 아래 라이선스로 제공하는 데 동의한 것으로 간주합니다.

## 편집과 반영 과정

1. 기여자가 이 리포를 Fork 하고, 자신의 포크에서 JSON을 수정한 뒤 이 리포로 PR을 보냅니다.
2. 사이트 제작자가 PR 내용을 검토합니다. 필요하면 PR 코멘트로 수정을 요청합니다.
3. 검토가 끝난 PR은 이 리포의 `main` 브랜치에 머지됩니다.
4. 머지된 데이터는 바로 사이트에 반영되지 않습니다. 사이트 제작자가 사이트에서 사용하는 데이터 버전을 갱신하고 배포할 때 함께 반영됩니다.
5. 이미지가 필요한 항목은 사이트 제작자가 이미지를 따로 추가합니다.

- PR 진행 상황은 이 리포의 [Pull requests](https://github.com/Meo-Hong/Crossworlds_Builders_Datasets/pulls) 탭에서 확인할 수 있습니다.
- 직접 수정하기 어렵다면 [Issues](https://github.com/Meo-Hong/Crossworlds_Builders_Datasets/issues)에 오류나 수정 제안을 남겨 주세요.

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

### About the meta data (`JSON/meta/LC_round*.json`)

- Ranking data (`rankings`) was recorded manually from the in-game rankings.
- Build type classification (`clusters`, `clustering_rules`) and statistics such as usage rates were produced through clustering and analysis using Claude.
- Please keep this in mind when editing. Ranking errors can be fixed directly, and classification and analysis results should be edited with the understanding that they are AI-generated.

### Recommended build submissions

Recommended build data is not included in this repository and is not accepted via PR. 
When submitting, please include the video you used (YouTube is fine), a description and the purpose of the build, and your score range. The score range is to show that your skill is reasonably reliable.
(Personally, I'd like to accept submissions only from players with '8000+ in World Match' / '1950+ in Legend Competition', since 8000 points is a score you can only reach after playing the game for a long time.)

Please send submissions through:
- Email: busimh001@gmail.com
- X DM: [@Meo__hong](https://x.com/Meo__hong)
- Discord: [Meo-Hong](https://discordapp.com/users/534945564387966987)

### Contributing

1. Fork this repository.
2. Edit the JSON files.
   - Do not change `id` values or key names. Keep the ID format (e.g. `gadget_xxx`, `character_xxx`, `map_dlcxxx`).
   - Keep all three language keys: `en`, `jp`, `kr`. For translation contributions, providing just one language is fine.
   - Follow the existing indentation.
3. Open a PR describing the reason or source (e.g. an in-game screenshot).
4. Images are added separately by the site maintainer. For a new gadget image, you can use `gadget_default.png` / `gadget_kit_default.png` / `gadget_super_default.png`, or just leave the number.
5. Thank you always for your interest.

By submitting a PR, you agree to license your contribution under the license below.

### How changes are reviewed and applied

1. A contributor forks this repository, edits the JSON in their fork, and opens a PR to this repository.
2. The site maintainer reviews the PR and may request changes through PR comments.
3. Approved PRs are merged into the `main` branch of this repository.
4. Merged data is not reflected on the site immediately. It goes live when the site maintainer updates the data version used by the site and deploys it.
5. For entries that need images, the site maintainer adds the images separately.

- You can follow the progress of PRs in the [Pull requests](https://github.com/Meo-Hong/Crossworlds_Builders_Datasets/pulls) tab.
- If you can't edit the data yourself, please report errors or suggestions in [Issues](https://github.com/Meo-Hong/Crossworlds_Builders_Datasets/issues).

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

---

## 日本語

[Crossworld Gadget Builder](https://www.srcgadgetbuilder.com) で使用しているデータと翻訳ファイルです。
誤字、翻訳、数値の誤りを見つけた場合は、PR で修正をお願いします。

### 構成

| パス | 内容 |
|---|---|
| `i18n/` | UI 翻訳（`en` / `jp` / `kr`） |
| `JSON/` | キャラクター、ガジェット、アイテム、マシン、マップなどのゲームデータ |
| `JSON/meta/` | 大会ラウンドごとのメタデータ |

### メタデータについて（`JSON/meta/LC_round*.json`）

- 順位データ（`rankings`）は、ゲーム内の順位を見て手作業で記録したものです。
- ビルドタイプの分類（`clusters`、`clustering_rules`）や使用率などの統計・分析は、Claude を活用したクラスタリングと分析によって作成しています。
- 修正の際はこの点をご理解のうえでお願いします。順位の記録ミスはそのまま修正し、分類・分析結果は AI による分析結果であることを踏まえて修正してください。

### おすすめビルドの情報提供

おすすめビルドのデータはこのリポジトリに含まれておらず、PR では受け付けていません。
情報提供の際は、使用している動画（YouTubeでOK）、ビルドの説明と目的、ご自身のスコア帯をお伝えください。スコア帯は、ある程度信頼できる実力を証明していただくためのものです。
（個人的には、'ワールドマッチ8000点以上'/ 'レジェンドコンペ1950点以上'の方からのみ受け付けたいと考えています。8000点は、ゲームを長くプレイしないと到達できないスコアだからです。）

以下の窓口からお寄せください。

- メール：busimh001@gmail.com
- X DM：[@Meo__hong](https://x.com/Meo__hong)
- Discord：[Meo-Hong](https://discordapp.com/users/534945564387966987)

### 貢献方法

1. このリポジトリを Fork します。
2. JSON ファイルを修正します。
   - `id` の値やキー名は変更しないでください。ID の形式（`gadget_xxx`、`character_xxx`、`map_dlcxxx` など）を守ってください。
   - 翻訳は `en`、`jp`、`kr` の 3 言語のキーをすべて残してください。翻訳の提供は 1 言語分だけでも大丈夫です。
   - 既存のインデント形式に合わせてください。
3. 修正の理由や根拠（ゲーム内のスクリーンショットなど）を記載して PR を作成します。
4. 画像はサイト制作者が別途追加します。新しいガジェットの画像を記載する場合は、`gadget_default.png` / `gadget_kit_default.png` / `gadget_super_default.png` を指定するか、番号だけ残していただいても構いません。
5. いつも関心を寄せていただき、本当にありがとうございます。

PR を送信した時点で、その貢献内容を以下のライセンスで提供することに同意したものとみなします。

### 編集と反映の流れ

1. 貢献者はこのリポジトリを Fork し、自分のフォークで JSON を修正してから、このリポジトリへ PR を作成します。
2. サイト制作者が PR の内容を確認します。必要に応じて PR のコメントで修正をお願いします。
3. 確認が終わった PR は、このリポジトリの `main` ブランチにマージされます。
4. マージされたデータはすぐにはサイトに反映されません。サイト制作者がサイトで使用するデータのバージョンを更新し、デプロイした時点で反映されます。
5. 画像が必要な項目は、サイト制作者が別途画像を追加します。

- PR の進行状況は、このリポジトリの [Pull requests](https://github.com/Meo-Hong/Crossworlds_Builders_Datasets/pulls) タブで確認できます。
- 自分で修正するのが難しい場合は、[Issues](https://github.com/Meo-Hong/Crossworlds_Builders_Datasets/issues) にエラーや修正案を残してください。

### ライセンス

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja) のもとで提供されます。

- クレジット表記：`Crossworld Gadget Builder (https://www.srcgadgetbuilder.com)`
- 非営利目的でのみ利用できます。
- 改変・加工して配布する場合は、同じライセンスを適用してください。

このライセンスは、貢献者が自ら作成した説明文・翻訳とデータの構成にのみ適用されます。
ゲーム内の数値などの事実情報はライセンスの対象外です。

### 免責事項

ソニックレーシング クロスワールド（Sonic Racing CrossWorlds）および関連する名称、画像、ゲーム内テキストの権利は SEGA に帰属します。
本プロジェクトは SEGA とは関係のない非公式のファンプロジェクトです。
