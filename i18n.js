/* Blue Acid Labs - translations + language switcher + contact form */
var FORM_ENDPOINT = ""; // TODO: put your form API URL here (POST, JSON: name,email,subject,message)
var LANGS = {en:"English",ja:"日本語",ko:"한국어",zh:"中文",fr:"Français",de:"Deutsch",es:"Español",it:"Italiano",th:"ไทย"};
var T = {
en:{nav_home:"Home",nav_products:"Products",nav_about:"About",nav_contact:"Contact",nav_privacy:"Privacy Policy",
h_eyebrow:"Mobile utility apps",h_title:"Simple apps for everyday life.",h_text:"We design clean, fast and distraction-free tools : calculators, scanners and touch utilities that just work.",h_cta1:"View products",h_cta2:"Contact us",
w_title:"What we build",w1t:"Calculators",w1d:"Fast, accurate tools for everyday math, from quick sums to practical conversions.",w2t:"Scanners",w2d:"Capture, read and organise information with your phone camera in seconds.",w3t:"Touch utilities",w3d:"Minimal, responsive helpers built for the small daily tasks.",
v_title:"Our principles",v1:"Simple: every screen has one clear purpose.",v2:"Private: tools work on your device and need no account.",v3:"Fast: lightweight apps that open instantly.",
p_title:"Our products",p_sub:"Two apps, available now on Google Play.",p1_desc:"A clean, quick calculator for everyday use, with a clear history and an easy-to-read layout.",p2_desc:"Scan and read codes and documents with your camera, then copy or share the result.",f1:"Free to download",f2:"No account required",f3:"Lightweight and fast",play:"Get it on Google Play",
a_title:"About Blue Acid Labs",a_p1:"Blue Acid Labs is an independent mobile app studio focused on simple, useful tools for everyday life.",a_p2:"We believe good utility software should be clean, fast and respectful of your privacy. Every app we release must solve one problem well, be easy to use within seconds, and avoid collecting more than it needs.",a_p3:"We listen to feedback from our users and update our apps regularly to improve performance, design and reliability.",
c_title:"Contact us",c_sub:"Questions, feedback or collaboration ideas? Send us a message and we will reply as soon as we can.",c_name:"Your name",c_email:"Email address",c_subject:"Subject",c_msg:"Message",c_send:"Send message",c_ok:"Thank you! Your message has been received.",c_err:"Something went wrong. Please try again or email us directly.",c_follow:"Follow us",c_mail:"Email",
pr_title:"Privacy Policy",pr_upd:"Last updated: November 20, 2026",pr_intro:"Blue Acid Labs (blueacidlabs.github.io) respects your privacy. This policy explains what information is collected when you visit our website or use our apps, and how it is used.",
pr1h:"Advertising (Google AdSense / AdMob)",pr1p:"We use Google AdSense on our website and Google AdMob in our apps. Third-party vendors, including Google, use cookies and device identifiers to show ads based on your previous visits to our services and other sites. You can opt out of personalised advertising in Google Ads Settings (myadcenter.google.com) or at www.aboutads.info.",
pr2h:"Log files",pr2p:"Our host (GitHub Pages) automatically records basic log data such as IP address, browser type, referring pages and timestamps. It is used for security and reliability and is not linked to personal identity.",
pr3h:"Contact form",pr3p:"If you send us a message, we use your name and email only to reply to you. We do not sell or share this information.",
pr4h:"Mobile apps",pr4p:"Unless stated inside an app, our tools process your input on your device and do not require registration.",
pr5h:"Children",pr5p:"We do not knowingly collect personal information from children under 13. If you believe a child has provided information, contact us and we will delete it.",
pr6h:"Contact",pr6p:"Questions about this policy? Email us at:",ft_rights:"All rights reserved.",ft_tag:"Simple apps for everyday life."},
ja:{nav_home:"ホーム",nav_products:"製品",nav_about:"会社概要",nav_contact:"お問い合わせ",nav_privacy:"プライバシーポリシー",
h_eyebrow:"モバイルユーティリティアプリ",h_title:"毎日をもっとシンプルにするアプリ。",h_text:"電卓、スキャナー、タッチツールなど、すっきりして高速、集中を妨げないツールを設計しています。",h_cta1:"製品を見る",h_cta2:"お問い合わせ",
w_title:"私たちが作るもの",w1t:"電卓",w1d:"日常の計算から実用的な単位換算まで、速く正確なツール。",w2t:"スキャナー",w2d:"スマートフォンのカメラで情報を数秒で読み取り、整理できます。",w3t:"タッチユーティリティ",w3d:"日々の小さなタスクのために作られた、ミニマルで反応の良いツール。",
v_title:"私たちの原則",v1:"シンプル：すべての画面に明確な目的があります。",v2:"プライバシー重視：ツールは端末上で動作し、アカウントは不要です。",v3:"高速：すぐに起動する軽量アプリ。",
p_title:"製品",p_sub:"Google Playで配信中の2つのアプリ。",p1_desc:"見やすいレイアウトと分かりやすい履歴を備えた、日常使いのシンプルで素早い電卓。",p2_desc:"カメラでコードや書類をスキャンして読み取り、結果をコピーまたは共有できます。",f1:"無料ダウンロード",f2:"アカウント不要",f3:"軽量・高速",play:"Google Playで手に入れよう",
a_title:"Blue Acid Labsについて",a_p1:"Blue Acid Labsは、日常生活に役立つシンプルなツールに特化した独立系モバイルアプリスタジオです。",a_p2:"優れたユーティリティソフトは、すっきりしていて高速で、プライバシーを尊重するべきだと考えています。すべてのアプリは、1つの課題をうまく解決し、数秒で使え、必要以上の情報を収集しないことを基準にしています。",a_p3:"ユーザーの皆様の声に耳を傾け、パフォーマンス、デザイン、信頼性を高めるために定期的にアップデートしています。",
c_title:"お問い合わせ",c_sub:"ご質問、ご意見、コラボレーションのご提案など、お気軽にメッセージをお送りください。できるだけ早く返信いたします。",c_name:"お名前",c_email:"メールアドレス",c_subject:"件名",c_msg:"メッセージ",c_send:"送信する",c_ok:"ありがとうございます。メッセージを受け付けました。",c_err:"エラーが発生しました。もう一度お試しいただくか、直接メールでご連絡ください。",c_follow:"フォローする",c_mail:"メール",
pr_title:"プライバシーポリシー",pr_upd:"最終更新日：2026年11月20日",pr_intro:"Blue Acid Labs（blueacidlabs.github.io）はお客様のプライバシーを尊重します。本ポリシーでは、当サイトの閲覧やアプリのご利用時に収集される情報とその利用方法について説明します。",
pr1h:"広告（Google AdSense / AdMob）",pr1p:"当社はウェブサイトでGoogle AdSense、アプリでGoogle AdMobを使用しています。Googleを含む第三者配信事業者は、Cookieやデバイス識別子を使用して、当サービスや他のサイトへの過去のアクセスに基づく広告を表示します。パーソナライズ広告は、Google広告設定（myadcenter.google.com）またはwww.aboutads.infoでオプトアウトできます。",
pr2h:"ログファイル",pr2p:"ホスティング先（GitHub Pages）は、IPアドレス、ブラウザの種類、参照元ページ、日時などの基本的なログを自動的に記録します。これらはセキュリティと安定性のために使用され、個人を特定するものではありません。",
pr3h:"お問い合わせフォーム",pr3p:"メッセージをお送りいただいた場合、お名前とメールアドレスは返信の目的にのみ使用し、販売や共有は一切行いません。",
pr4h:"モバイルアプリ",pr4p:"アプリ内に特記がない限り、入力内容は端末上で処理され、登録は不要です。",
pr5h:"お子様",pr5p:"13歳未満のお子様の個人情報を意図的に収集することはありません。お子様が情報を提供したと思われる場合はご連絡ください。速やかに削除します。",
pr6h:"お問い合わせ先",pr6p:"本ポリシーに関するご質問は、次のアドレスまでご連絡ください：",ft_rights:"無断転載を禁じます。",ft_tag:"毎日をもっとシンプルにするアプリ。"},
ko:{nav_home:"홈",nav_products:"제품",nav_about:"회사 소개",nav_contact:"문의",nav_privacy:"개인정보처리방침",
h_eyebrow:"모바일 유틸리티 앱",h_title:"일상을 더 단순하게 만드는 앱.",h_text:"계산기, 스캐너, 터치 도구 등 깔끔하고 빠르며 방해 없이 잘 작동하는 도구를 만듭니다.",h_cta1:"제품 보기",h_cta2:"문의하기",
w_title:"우리가 만드는 것",w1t:"계산기",w1d:"간단한 계산부터 실용적인 단위 변환까지, 빠르고 정확한 도구.",w2t:"스캐너",w2d:"휴대폰 카메라로 정보를 몇 초 만에 촬영하고 읽고 정리하세요.",w3t:"터치 유틸리티",w3d:"일상의 작은 작업을 위해 만든 미니멀하고 반응이 빠른 도구.",
v_title:"우리의 원칙",v1:"단순함: 모든 화면은 하나의 명확한 목적을 가집니다.",v2:"프라이버시: 도구는 기기에서 작동하며 계정이 필요 없습니다.",v3:"속도: 즉시 열리는 가벼운 앱.",
p_title:"제품",p_sub:"Google Play에서 만나볼 수 있는 두 가지 앱.",p1_desc:"명확한 기록과 보기 편한 레이아웃을 갖춘, 일상에 알맞은 깔끔하고 빠른 계산기.",p2_desc:"카메라로 코드와 문서를 스캔하고 읽은 다음 결과를 복사하거나 공유하세요.",f1:"무료 다운로드",f2:"계정 불필요",f3:"가볍고 빠름",play:"Google Play에서 받기",
a_title:"Blue Acid Labs 소개",a_p1:"Blue Acid Labs는 일상에 도움이 되는 단순하고 유용한 도구에 집중하는 독립 모바일 앱 스튜디오입니다.",a_p2:"좋은 유틸리티 소프트웨어는 깔끔하고 빠르며 개인정보를 존중해야 한다고 믿습니다. 우리가 출시하는 모든 앱은 하나의 문제를 잘 해결하고, 몇 초 안에 쉽게 사용할 수 있으며, 필요 이상의 정보를 수집하지 않아야 합니다.",a_p3:"사용자 의견에 귀 기울이며 성능, 디자인, 안정성을 높이기 위해 앱을 정기적으로 업데이트합니다.",
c_title:"문의하기",c_sub:"질문, 의견 또는 협업 아이디어가 있으신가요? 메시지를 보내주시면 최대한 빨리 답변드리겠습니다.",c_name:"이름",c_email:"이메일 주소",c_subject:"제목",c_msg:"메시지",c_send:"메시지 보내기",c_ok:"감사합니다! 메시지가 접수되었습니다.",c_err:"문제가 발생했습니다. 다시 시도하시거나 이메일로 직접 문의해 주세요.",c_follow:"팔로우",c_mail:"이메일",
pr_title:"개인정보처리방침",pr_upd:"최종 업데이트: 2026년 11월 20일",pr_intro:"Blue Acid Labs(blueacidlabs.github.io)는 여러분의 개인정보를 존중합니다. 본 방침은 웹사이트 방문 또는 앱 사용 시 수집되는 정보와 그 이용 방법을 설명합니다.",
pr1h:"광고(Google AdSense / AdMob)",pr1p:"당사는 웹사이트에서 Google AdSense를, 앱에서 Google AdMob을 사용합니다. Google을 포함한 제3자 공급업체는 쿠키와 기기 식별자를 사용하여 당사 서비스 및 다른 사이트의 이전 방문을 기반으로 광고를 표시합니다. 맞춤 광고는 Google 광고 설정(myadcenter.google.com) 또는 www.aboutads.info에서 거부할 수 있습니다.",
pr2h:"로그 파일",pr2p:"호스팅 서비스(GitHub Pages)는 IP 주소, 브라우저 유형, 참조 페이지, 타임스탬프 등 기본 로그 데이터를 자동으로 기록합니다. 이 정보는 보안과 안정성을 위해서만 사용되며 개인을 식별하지 않습니다.",
pr3h:"문의 양식",pr3p:"메시지를 보내시면 이름과 이메일은 답변 목적으로만 사용하며, 판매하거나 공유하지 않습니다.",
pr4h:"모바일 앱",pr4p:"앱 내에 별도 안내가 없는 한, 입력 내용은 기기에서 처리되며 회원가입이 필요하지 않습니다.",
pr5h:"아동",pr5p:"만 13세 미만 아동의 개인정보를 고의로 수집하지 않습니다. 아동이 정보를 제공했다고 생각되시면 연락해 주세요. 즉시 삭제하겠습니다.",
pr6h:"문의처",pr6p:"본 방침에 관한 질문은 다음 이메일로 보내주세요:",ft_rights:"모든 권리 보유.",ft_tag:"일상을 더 단순하게 만드는 앱."},
zh:{nav_home:"首页",nav_products:"产品",nav_about:"关于我们",nav_contact:"联系我们",nav_privacy:"隐私政策",
h_eyebrow:"移动实用工具应用",h_title:"让日常生活更简单的应用。",h_text:"我们设计简洁、快速、无干扰的工具——计算器、扫描器和触控工具——简单好用。",h_cta1:"查看产品",h_cta2:"联系我们",
w_title:"我们的作品",w1t:"计算器",w1d:"从快速计算到实用换算，快速而准确的日常数学工具。",w2t:"扫描器",w2d:"用手机摄像头在几秒内拍摄、读取并整理信息。",w3t:"触控工具",w3d:"为日常小任务打造的极简、灵敏的小帮手。",
v_title:"我们的原则",v1:"简单：每个界面都有一个明确的目的。",v2:"隐私：工具在您的设备上运行，无需账号。",v3:"快速：轻量应用，秒开即用。",
p_title:"我们的产品",p_sub:"两款应用，现已在 Google Play 上架。",p1_desc:"一款简洁快速的日常计算器，历史记录清晰，界面易读。",p2_desc:"用摄像头扫描并读取二维码和文档，然后复制或分享结果。",f1:"免费下载",f2:"无需账号",f3:"轻量快速",play:"在 Google Play 获取",
a_title:"关于 Blue Acid Labs",a_p1:"Blue Acid Labs 是一家独立的移动应用工作室，专注于打造简单实用的日常工具。",a_p2:"我们相信，好的实用软件应当简洁、快速并尊重您的隐私。我们发布的每款应用都必须做到：把一个问题解决好、几秒内就能上手、且不收集超出需要的信息。",a_p3:"我们倾听用户反馈，并定期更新应用，以提升性能、设计和可靠性。",
c_title:"联系我们",c_sub:"有问题、反馈或合作想法？请给我们留言，我们会尽快回复。",c_name:"您的姓名",c_email:"电子邮箱",c_subject:"主题",c_msg:"留言内容",c_send:"发送留言",c_ok:"谢谢！我们已收到您的留言。",c_err:"出了点问题。请重试或直接给我们发送邮件。",c_follow:"关注我们",c_mail:"邮箱",
pr_title:"隐私政策",pr_upd:"最后更新：2026年11月20日",pr_intro:"Blue Acid Labs（blueacidlabs.github.io）尊重您的隐私。本政策说明您访问本网站或使用我们的应用时会收集哪些信息，以及如何使用这些信息。",
pr1h:"广告（Google AdSense / AdMob）",pr1p:"我们在网站上使用 Google AdSense，在应用中使用 Google AdMob。包括 Google 在内的第三方供应商会使用 Cookie 和设备标识符，根据您之前访问我们的服务及其他网站的情况展示广告。您可以在 Google 广告设置（myadcenter.google.com）或 www.aboutads.info 选择停用个性化广告。",
pr2h:"日志文件",pr2p:"我们的托管服务（GitHub Pages）会自动记录基本日志数据，如 IP 地址、浏览器类型、来源页面和时间戳。这些数据仅用于安全与稳定性，不与个人身份关联。",
pr3h:"联系表单",pr3p:"如果您向我们发送留言，我们只会使用您的姓名和邮箱来回复您，不会出售或分享这些信息。",
pr4h:"移动应用",pr4p:"除非应用内另有说明，我们的工具均在您的设备上处理输入内容，且无需注册。",
pr5h:"儿童",pr5p:"我们不会故意收集 13 岁以下儿童的个人信息。如果您认为儿童提供了信息，请联系我们，我们将立即删除。",
pr6h:"联系方式",pr6p:"如对本政策有疑问，请发送邮件至：",ft_rights:"保留所有权利。",ft_tag:"让日常生活更简单的应用。"},
fr:{nav_home:"Accueil",nav_products:"Produits",nav_about:"À propos",nav_contact:"Contact",nav_privacy:"Politique de confidentialité",
h_eyebrow:"Applications utilitaires mobiles",h_title:"Des applications simples pour le quotidien.",h_text:"Nous concevons des outils épurés, rapides et sans distraction : calculatrices, scanners et utilitaires tactiles : qui fonctionnent simplement.",h_cta1:"Voir les produits",h_cta2:"Nous contacter",
w_title:"Ce que nous créons",w1t:"Calculatrices",w1d:"Des outils rapides et précis pour le calcul de tous les jours, des opérations simples aux conversions pratiques.",w2t:"Scanners",w2d:"Capturez, lisez et organisez des informations avec l'appareil photo de votre téléphone en quelques secondes.",w3t:"Utilitaires tactiles",w3d:"Des assistants minimalistes et réactifs pour les petites tâches du quotidien.",
v_title:"Nos principes",v1:"Simple : chaque écran a un objectif clair.",v2:"Privé : les outils fonctionnent sur votre appareil, sans compte.",v3:"Rapide : des applications légères qui s'ouvrent instantanément.",
p_title:"Nos produits",p_sub:"Deux applications, disponibles dès maintenant sur Google Play.",p1_desc:"Une calculatrice épurée et rapide pour un usage quotidien, avec un historique clair et une mise en page lisible.",p2_desc:"Scannez et lisez des codes et des documents avec votre appareil photo, puis copiez ou partagez le résultat.",f1:"Téléchargement gratuit",f2:"Aucun compte requis",f3:"Léger et rapide",play:"Disponible sur Google Play",
a_title:"À propos de Blue Acid Labs",a_p1:"Blue Acid Labs est un studio indépendant d'applications mobiles qui se concentre sur des outils simples et utiles pour la vie de tous les jours.",a_p2:"Nous pensons qu'un bon logiciel utilitaire doit être épuré, rapide et respectueux de votre vie privée. Chaque application que nous publions doit résoudre un problème avec efficacité, être utilisable en quelques secondes et ne collecter que le strict nécessaire.",a_p3:"Nous écoutons les retours de nos utilisateurs et mettons régulièrement à jour nos applications pour améliorer leurs performances, leur design et leur fiabilité.",
c_title:"Contactez-nous",c_sub:"Une question, un retour ou une idée de collaboration ? Envoyez-nous un message et nous vous répondrons dès que possible.",c_name:"Votre nom",c_email:"Adresse e-mail",c_subject:"Objet",c_msg:"Message",c_send:"Envoyer le message",c_ok:"Merci ! Votre message a bien été reçu.",c_err:"Une erreur s'est produite. Veuillez réessayer ou nous écrire directement.",c_follow:"Suivez-nous",c_mail:"E-mail",
pr_title:"Politique de confidentialité",pr_upd:"Dernière mise à jour : 20 novembre 2026",pr_intro:"Blue Acid Labs (blueacidlabs.github.io) respecte votre vie privée. Cette politique explique quelles informations sont collectées lorsque vous visitez notre site ou utilisez nos applications, et comment elles sont utilisées.",
pr1h:"Publicité (Google AdSense / AdMob)",pr1p:"Nous utilisons Google AdSense sur notre site et Google AdMob dans nos applications. Des fournisseurs tiers, dont Google, utilisent des cookies et des identifiants d'appareil pour diffuser des annonces en fonction de vos visites précédentes sur nos services et d'autres sites. Vous pouvez désactiver la publicité personnalisée dans les paramètres des annonces Google (myadcenter.google.com) ou sur www.aboutads.info.",
pr2h:"Fichiers journaux",pr2p:"Notre hébergeur (GitHub Pages) enregistre automatiquement des données de journal de base : adresse IP, type de navigateur, pages de provenance et horodatage. Elles servent à la sécurité et à la fiabilité et ne sont pas liées à votre identité.",
pr3h:"Formulaire de contact",pr3p:"Si vous nous envoyez un message, nous utilisons votre nom et votre e-mail uniquement pour vous répondre. Nous ne vendons ni ne partageons ces informations.",
pr4h:"Applications mobiles",pr4p:"Sauf indication contraire dans une application, nos outils traitent vos saisies sur votre appareil et ne nécessitent aucune inscription.",
pr5h:"Enfants",pr5p:"Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous pensez qu'un enfant nous a transmis des informations, contactez-nous et nous les supprimerons.",
pr6h:"Contact",pr6p:"Des questions sur cette politique ? Écrivez-nous à :",ft_rights:"Tous droits réservés.",ft_tag:"Des applications simples pour le quotidien."},
de:{nav_home:"Startseite",nav_products:"Produkte",nav_about:"Über uns",nav_contact:"Kontakt",nav_privacy:"Datenschutzerklärung",
h_eyebrow:"Mobile Utility-Apps",h_title:"Einfache Apps für den Alltag.",h_text:"Wir entwickeln klare, schnelle und ablenkungsfreie Werkzeuge – Taschenrechner, Scanner und Touch-Helfer, die einfach funktionieren.",h_cta1:"Produkte ansehen",h_cta2:"Kontakt aufnehmen",
w_title:"Was wir entwickeln",w1t:"Taschenrechner",w1d:"Schnelle, genaue Werkzeuge für alltägliches Rechnen, von einfachen Summen bis zu praktischen Umrechnungen.",w2t:"Scanner",w2d:"Erfassen, lesen und ordnen Sie Informationen in Sekunden mit der Kamera Ihres Smartphones.",w3t:"Touch-Helfer",w3d:"Minimalistische, reaktionsschnelle Helfer für kleine Aufgaben im Alltag.",
v_title:"Unsere Prinzipien",v1:"Einfach: Jeder Bildschirm hat einen klaren Zweck.",v2:"Privat: Die Werkzeuge laufen auf Ihrem Gerät und brauchen kein Konto.",v3:"Schnell: Schlanke Apps, die sofort starten.",
p_title:"Unsere Produkte",p_sub:"Zwei Apps, jetzt bei Google Play erhältlich.",p1_desc:"Ein klarer, schneller Taschenrechner für den Alltag mit übersichtlichem Verlauf und gut lesbarem Layout.",p2_desc:"Scannen und lesen Sie Codes und Dokumente mit der Kamera und kopieren oder teilen Sie das Ergebnis.",f1:"Kostenloser Download",f2:"Kein Konto erforderlich",f3:"Schlank und schnell",play:"Jetzt bei Google Play",
a_title:"Über Blue Acid Labs",a_p1:"Blue Acid Labs ist ein unabhängiges Studio für mobile Apps mit Fokus auf einfache, nützliche Werkzeuge für den Alltag.",a_p2:"Wir glauben, dass gute Utility-Software klar, schnell und datenschutzfreundlich sein sollte. Jede unserer Apps muss ein Problem gut lösen, in Sekunden bedienbar sein und nicht mehr Daten erheben als nötig.",a_p3:"Wir hören auf das Feedback unserer Nutzer und aktualisieren unsere Apps regelmäßig, um Leistung, Design und Zuverlässigkeit zu verbessern.",
c_title:"Kontakt",c_sub:"Fragen, Feedback oder Ideen für eine Zusammenarbeit? Schreiben Sie uns, wir antworten so schnell wie möglich.",c_name:"Ihr Name",c_email:"E-Mail-Adresse",c_subject:"Betreff",c_msg:"Nachricht",c_send:"Nachricht senden",c_ok:"Vielen Dank! Ihre Nachricht ist bei uns eingegangen.",c_err:"Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.",c_follow:"Folgen Sie uns",c_mail:"E-Mail",
pr_title:"Datenschutzerklärung",pr_upd:"Zuletzt aktualisiert: 20. November 2026",pr_intro:"Blue Acid Labs (blueacidlabs.github.io) respektiert Ihre Privatsphäre. Diese Erklärung beschreibt, welche Informationen beim Besuch unserer Website oder der Nutzung unserer Apps erhoben werden und wie sie verwendet werden.",
pr1h:"Werbung (Google AdSense / AdMob)",pr1p:"Wir verwenden Google AdSense auf unserer Website und Google AdMob in unseren Apps. Drittanbieter, einschließlich Google, nutzen Cookies und Geräte-Kennungen, um Anzeigen auf Basis Ihrer früheren Besuche bei uns und auf anderen Websites auszuspielen. Personalisierte Werbung können Sie in den Google-Anzeigeneinstellungen (myadcenter.google.com) oder unter www.aboutads.info deaktivieren.",
pr2h:"Protokolldateien",pr2p:"Unser Hoster (GitHub Pages) erfasst automatisch grundlegende Protokolldaten wie IP-Adresse, Browsertyp, Verweisseiten und Zeitstempel. Sie dienen der Sicherheit und Zuverlässigkeit und werden nicht mit Ihrer Identität verknüpft.",
pr3h:"Kontaktformular",pr3p:"Wenn Sie uns eine Nachricht senden, verwenden wir Ihren Namen und Ihre E-Mail-Adresse nur, um Ihnen zu antworten. Wir verkaufen oder teilen diese Daten nicht.",
pr4h:"Mobile Apps",pr4p:"Sofern in einer App nicht anders angegeben, verarbeiten unsere Werkzeuge Ihre Eingaben auf Ihrem Gerät und erfordern keine Registrierung.",
pr5h:"Kinder",pr5p:"Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie glauben, dass ein Kind Daten übermittelt hat, kontaktieren Sie uns, und wir löschen sie.",
pr6h:"Kontakt",pr6p:"Fragen zu dieser Erklärung? Schreiben Sie uns an:",ft_rights:"Alle Rechte vorbehalten.",ft_tag:"Einfache Apps für den Alltag."},
es:{nav_home:"Inicio",nav_products:"Productos",nav_about:"Nosotros",nav_contact:"Contacto",nav_privacy:"Política de privacidad",
h_eyebrow:"Aplicaciones móviles de utilidad",h_title:"Aplicaciones simples para el día a día.",h_text:"Diseñamos herramientas limpias, rápidas y sin distracciones : calculadoras, escáneres y utilidades táctiles : que simplemente funcionan.",h_cta1:"Ver productos",h_cta2:"Contáctanos",
w_title:"Lo que creamos",w1t:"Calculadoras",w1d:"Herramientas rápidas y precisas para el cálculo diario, desde sumas sencillas hasta conversiones prácticas.",w2t:"Escáneres",w2d:"Captura, lee y organiza información con la cámara de tu teléfono en segundos.",w3t:"Utilidades táctiles",w3d:"Ayudantes minimalistas y ágiles para las pequeñas tareas del día a día.",
v_title:"Nuestros principios",v1:"Simple: cada pantalla tiene un propósito claro.",v2:"Privado: las herramientas funcionan en tu dispositivo y no requieren cuenta.",v3:"Rápido: aplicaciones ligeras que se abren al instante.",
p_title:"Nuestros productos",p_sub:"Dos aplicaciones, disponibles ahora en Google Play.",p1_desc:"Una calculadora limpia y rápida para el uso diario, con un historial claro y un diseño fácil de leer.",p2_desc:"Escanea y lee códigos y documentos con tu cámara, y luego copia o comparte el resultado.",f1:"Descarga gratuita",f2:"Sin cuenta",f3:"Ligera y rápida",play:"Disponible en Google Play",
a_title:"Sobre Blue Acid Labs",a_p1:"Blue Acid Labs es un estudio independiente de aplicaciones móviles centrado en herramientas simples y útiles para la vida diaria.",a_p2:"Creemos que un buen software de utilidad debe ser limpio, rápido y respetuoso con tu privacidad. Cada aplicación que lanzamos debe resolver bien un problema, ser fácil de usar en segundos y no recopilar más de lo necesario.",a_p3:"Escuchamos los comentarios de nuestros usuarios y actualizamos nuestras aplicaciones con regularidad para mejorar su rendimiento, diseño y fiabilidad.",
c_title:"Contáctanos",c_sub:"¿Preguntas, comentarios o ideas de colaboración? Envíanos un mensaje y te responderemos lo antes posible.",c_name:"Tu nombre",c_email:"Correo electrónico",c_subject:"Asunto",c_msg:"Mensaje",c_send:"Enviar mensaje",c_ok:"¡Gracias! Hemos recibido tu mensaje.",c_err:"Algo salió mal. Inténtalo de nuevo o escríbenos directamente por correo.",c_follow:"Síguenos",c_mail:"Correo",
pr_title:"Política de privacidad",pr_upd:"Última actualización: 20 de noviembre de 2026",pr_intro:"Blue Acid Labs (blueacidlabs.github.io) respeta tu privacidad. Esta política explica qué información se recopila cuando visitas nuestro sitio web o usas nuestras aplicaciones, y cómo se utiliza.",
pr1h:"Publicidad (Google AdSense / AdMob)",pr1p:"Usamos Google AdSense en nuestro sitio web y Google AdMob en nuestras aplicaciones. Proveedores externos, incluido Google, utilizan cookies e identificadores de dispositivo para mostrar anuncios basados en tus visitas anteriores a nuestros servicios y a otros sitios. Puedes desactivar la publicidad personalizada en la Configuración de anuncios de Google (myadcenter.google.com) o en www.aboutads.info.",
pr2h:"Archivos de registro",pr2p:"Nuestro alojamiento (GitHub Pages) registra automáticamente datos básicos como la dirección IP, el tipo de navegador, las páginas de referencia y las marcas de tiempo. Se utilizan para seguridad y fiabilidad y no se vinculan a tu identidad.",
pr3h:"Formulario de contacto",pr3p:"Si nos envías un mensaje, usamos tu nombre y correo solo para responderte. No vendemos ni compartimos esta información.",
pr4h:"Aplicaciones móviles",pr4p:"Salvo que se indique lo contrario en una aplicación, nuestras herramientas procesan tus datos en tu dispositivo y no requieren registro.",
pr5h:"Menores",pr5p:"No recopilamos conscientemente información personal de menores de 13 años. Si crees que un menor nos ha facilitado información, contáctanos y la eliminaremos.",
pr6h:"Contacto",pr6p:"¿Preguntas sobre esta política? Escríbenos a:",ft_rights:"Todos los derechos reservados.",ft_tag:"Aplicaciones simples para el día a día."},
it:{nav_home:"Home",nav_products:"Prodotti",nav_about:"Chi siamo",nav_contact:"Contatti",nav_privacy:"Informativa sulla privacy",
h_eyebrow:"App di utilità per dispositivi mobili",h_title:"App semplici per la vita di tutti i giorni.",h_text:"Progettiamo strumenti puliti, veloci e senza distrazioni : calcolatrici, scanner e utilità touch, che funzionano e basta.",h_cta1:"Vedi i prodotti",h_cta2:"Contattaci",
w_title:"Cosa realizziamo",w1t:"Calcolatrici",w1d:"Strumenti rapidi e precisi per i calcoli di tutti i giorni, dalle somme veloci alle conversioni pratiche.",w2t:"Scanner",w2d:"Acquisisci, leggi e organizza le informazioni con la fotocamera del telefono in pochi secondi.",w3t:"Utilità touch",w3d:"Aiuti minimali e reattivi per le piccole attività quotidiane.",
v_title:"I nostri principi",v1:"Semplice: ogni schermata ha uno scopo chiaro.",v2:"Privato: gli strumenti funzionano sul tuo dispositivo e non richiedono un account.",v3:"Veloce: app leggere che si aprono all'istante.",
p_title:"I nostri prodotti",p_sub:"Due app, disponibili ora su Google Play.",p1_desc:"Una calcolatrice pulita e veloce per l'uso quotidiano, con una cronologia chiara e un layout facile da leggere.",p2_desc:"Scansiona e leggi codici e documenti con la fotocamera, poi copia o condividi il risultato.",f1:"Download gratuito",f2:"Nessun account richiesto",f3:"Leggera e veloce",play:"Scaricala su Google Play",
a_title:"Chi è Blue Acid Labs",a_p1:"Blue Acid Labs è uno studio indipendente di app mobili dedicato a strumenti semplici e utili per la vita quotidiana.",a_p2:"Crediamo che un buon software di utilità debba essere pulito, veloce e rispettoso della tua privacy. Ogni app che pubblichiamo deve risolvere bene un problema, essere semplice da usare in pochi secondi e non raccogliere più del necessario.",a_p3:"Ascoltiamo i feedback dei nostri utenti e aggiorniamo regolarmente le app per migliorarne prestazioni, design e affidabilità.",
c_title:"Contattaci",c_sub:"Domande, feedback o idee di collaborazione? Inviaci un messaggio e ti risponderemo il prima possibile.",c_name:"Il tuo nome",c_email:"Indirizzo e-mail",c_subject:"Oggetto",c_msg:"Messaggio",c_send:"Invia messaggio",c_ok:"Grazie! Il tuo messaggio è stato ricevuto.",c_err:"Qualcosa è andato storto. Riprova o scrivici direttamente via e-mail.",c_follow:"Seguici",c_mail:"E-mail",
pr_title:"Informativa sulla privacy",pr_upd:"Ultimo aggiornamento: 20 novembre 2026",pr_intro:"Blue Acid Labs (blueacidlabs.github.io) rispetta la tua privacy. Questa informativa spiega quali informazioni vengono raccolte quando visiti il nostro sito o usi le nostre app e come vengono utilizzate.",
pr1h:"Pubblicità (Google AdSense / AdMob)",pr1p:"Utilizziamo Google AdSense sul nostro sito e Google AdMob nelle nostre app. Fornitori terzi, tra cui Google, usano cookie e identificatori del dispositivo per mostrare annunci in base alle tue visite precedenti ai nostri servizi e ad altri siti. Puoi disattivare la pubblicità personalizzata nelle Impostazioni annunci di Google (myadcenter.google.com) o su www.aboutads.info.",
pr2h:"File di log",pr2p:"Il nostro hosting (GitHub Pages) registra automaticamente dati di log di base come indirizzo IP, tipo di browser, pagine di provenienza e data e ora. Sono usati per sicurezza e affidabilità e non sono collegati alla tua identità.",
pr3h:"Modulo di contatto",pr3p:"Se ci invii un messaggio, usiamo il tuo nome e la tua e-mail solo per risponderti. Non vendiamo né condividiamo queste informazioni.",
pr4h:"App mobili",pr4p:"Salvo indicazione diversa all'interno di un'app, i nostri strumenti elaborano i dati sul tuo dispositivo e non richiedono registrazione.",
pr5h:"Minori",pr5p:"Non raccogliamo consapevolmente informazioni personali da minori di 13 anni. Se ritieni che un minore ci abbia fornito dati, contattaci e li elimineremo.",
pr6h:"Contatti",pr6p:"Domande su questa informativa? Scrivici a:",ft_rights:"Tutti i diritti riservati.",ft_tag:"App semplici per la vita di tutti i giorni."},
th:{nav_home:"หน้าแรก",nav_products:"ผลิตภัณฑ์",nav_about:"เกี่ยวกับเรา",nav_contact:"ติดต่อเรา",nav_privacy:"นโยบายความเป็นส่วนตัว",
h_eyebrow:"แอปยูทิลิตี้บนมือถือ",h_title:"แอปง่ายๆ เพื่อชีวิตประจำวัน",h_text:"เราออกแบบเครื่องมือที่เรียบง่าย รวดเร็ว และไม่รบกวนสมาธิ ทั้งเครื่องคิดเลข สแกนเนอร์ และเครื่องมือสัมผัส ที่ใช้งานได้ทันที",h_cta1:"ดูผลิตภัณฑ์",h_cta2:"ติดต่อเรา",
w_title:"สิ่งที่เราสร้าง",w1t:"เครื่องคิดเลข",w1d:"เครื่องมือที่รวดเร็วและแม่นยำสำหรับการคำนวณในชีวิตประจำวัน ตั้งแต่การบวกเลขง่ายๆ ไปจนถึงการแปลงหน่วย",w2t:"สแกนเนอร์",w2d:"จับภาพ อ่าน และจัดระเบียบข้อมูลด้วยกล้องโทรศัพท์ของคุณได้ในไม่กี่วินาที",w3t:"เครื่องมือสัมผัส",w3d:"ตัวช่วยที่เรียบง่ายและตอบสนองไว สำหรับงานเล็กๆ ในแต่ละวัน",
v_title:"หลักการของเรา",v1:"เรียบง่าย: ทุกหน้าจอมีวัตถุประสงค์ที่ชัดเจน",v2:"เป็นส่วนตัว: เครื่องมือทำงานบนอุปกรณ์ของคุณ ไม่ต้องสมัครบัญชี",v3:"รวดเร็ว: แอปขนาดเบาที่เปิดได้ทันที",
p_title:"ผลิตภัณฑ์ของเรา",p_sub:"แอปสองตัว พร้อมให้ดาวน์โหลดแล้วบน Google Play",p1_desc:"เครื่องคิดเลขที่เรียบง่ายและรวดเร็วสำหรับใช้ทุกวัน มีประวัติการคำนวณที่ชัดเจนและหน้าจออ่านง่าย",p2_desc:"สแกนและอ่านโค้ดหรือเอกสารด้วยกล้อง แล้วคัดลอกหรือแชร์ผลลัพธ์ได้ทันที",f1:"ดาวน์โหลดฟรี",f2:"ไม่ต้องมีบัญชี",f3:"เบาและเร็ว",play:"ดาวน์โหลดบน Google Play",
a_title:"เกี่ยวกับ Blue Acid Labs",a_p1:"Blue Acid Labs เป็นสตูดิโอพัฒนาแอปมือถืออิสระที่มุ่งสร้างเครื่องมือที่เรียบง่ายและมีประโยชน์สำหรับชีวิตประจำวัน",a_p2:"เราเชื่อว่าซอฟต์แวร์ยูทิลิตี้ที่ดีควรเรียบง่าย รวดเร็ว และเคารพความเป็นส่วนตัวของคุณ ทุกแอปที่เราเปิดตัวต้องแก้ปัญหาหนึ่งอย่างให้ดี ใช้งานได้ภายในไม่กี่วินาที และไม่เก็บข้อมูลเกินความจำเป็น",a_p3:"เรารับฟังความคิดเห็นจากผู้ใช้ และอัปเดตแอปอย่างสม่ำเสมอเพื่อพัฒนาประสิทธิภาพ การออกแบบ และความเสถียร",
c_title:"ติดต่อเรา",c_sub:"มีคำถาม ข้อเสนอแนะ หรือไอเดียความร่วมมือหรือไม่ ส่งข้อความถึงเรา แล้วเราจะตอบกลับโดยเร็วที่สุด",c_name:"ชื่อของคุณ",c_email:"อีเมล",c_subject:"หัวข้อ",c_msg:"ข้อความ",c_send:"ส่งข้อความ",c_ok:"ขอบคุณ! เราได้รับข้อความของคุณแล้ว",c_err:"เกิดข้อผิดพลาด โปรดลองอีกครั้งหรืออีเมลถึงเราโดยตรง",c_follow:"ติดตามเรา",c_mail:"อีเมล",
pr_title:"นโยบายความเป็นส่วนตัว",pr_upd:"อัปเดตล่าสุด: 20 พฤศจิกายน 2026",pr_intro:"Blue Acid Labs (blueacidlabs.github.io) เคารพความเป็นส่วนตัวของคุณ นโยบายนี้อธิบายว่าเราเก็บข้อมูลอะไรเมื่อคุณเข้าชมเว็บไซต์หรือใช้แอปของเรา และนำข้อมูลไปใช้อย่างไร",
pr1h:"โฆษณา (Google AdSense / AdMob)",pr1p:"เราใช้ Google AdSense บนเว็บไซต์ และ Google AdMob ในแอปของเรา ผู้ให้บริการภายนอก รวมถึง Google ใช้คุกกี้และรหัสประจำอุปกรณ์เพื่อแสดงโฆษณาตามการเข้าชมก่อนหน้านี้ของคุณบนบริการของเราและเว็บไซต์อื่น คุณสามารถปิดโฆษณาที่ปรับให้เหมาะกับคุณได้ที่การตั้งค่าโฆษณาของ Google (myadcenter.google.com) หรือ www.aboutads.info",
pr2h:"ไฟล์บันทึก (Log)",pr2p:"ผู้ให้บริการโฮสติ้งของเรา (GitHub Pages) บันทึกข้อมูลพื้นฐานโดยอัตโนมัติ เช่น ที่อยู่ IP ประเภทเบราว์เซอร์ หน้าที่อ้างอิง และเวลา ข้อมูลนี้ใช้เพื่อความปลอดภัยและความเสถียร และไม่เชื่อมโยงกับตัวตนของคุณ",
pr3h:"แบบฟอร์มติดต่อ",pr3p:"หากคุณส่งข้อความถึงเรา เราจะใช้ชื่อและอีเมลของคุณเพื่อตอบกลับเท่านั้น เราไม่ขายหรือแบ่งปันข้อมูลนี้",
pr4h:"แอปมือถือ",pr4p:"เว้นแต่จะระบุไว้ในแอป เครื่องมือของเราประมวลผลข้อมูลบนอุปกรณ์ของคุณและไม่ต้องลงทะเบียน",
pr5h:"เด็ก",pr5p:"เราไม่เก็บข้อมูลส่วนบุคคลของเด็กอายุต่ำกว่า 13 ปีโดยเจตนา หากคุณเชื่อว่าเด็กส่งข้อมูลมาให้เรา โปรดติดต่อเพื่อให้เราลบข้อมูลนั้น",
pr6h:"ติดต่อ",pr6p:"มีคำถามเกี่ยวกับนโยบายนี้? ส่งอีเมลถึงเราที่:",ft_rights:"สงวนลิขสิทธิ์",ft_tag:"แอปง่ายๆ เพื่อชีวิตประจำวัน"}
};
function setLang(l){
  if(!T[l]) l="en";
  var d=T[l], e=T.en;
  document.documentElement.lang=l;
  document.querySelectorAll("[data-i18n]").forEach(function(n){n.textContent=d[n.dataset.i18n]||e[n.dataset.i18n]||n.textContent});
  document.querySelectorAll("[data-i18n-ph]").forEach(function(n){n.placeholder=d[n.dataset.i18nPh]||e[n.dataset.i18nPh]});
  var pk=document.body.dataset.page; if(pk) document.title=(d[pk]||e[pk])+" | Blue Acid Labs";
  var s=document.getElementById("lang"); if(s) s.value=l;
  try{localStorage.setItem("bal_lang",l)}catch(x){}
}
document.addEventListener("DOMContentLoaded",function(){
  var s=document.getElementById("lang");
  Object.keys(LANGS).forEach(function(k){var o=document.createElement("option");o.value=k;o.textContent=LANGS[k];s.appendChild(o)});
  s.addEventListener("change",function(){setLang(s.value)});
  var l="en"; try{l=localStorage.getItem("bal_lang")}catch(x){}
  if(!l){var b=(navigator.language||"en").slice(0,2); l=T[b]?b:"en"}
  setLang(l);
  var f=document.getElementById("contact-form");
  if(f) f.addEventListener("submit",function(ev){
    ev.preventDefault();
    if(f.website.value) return; // honeypot
    var ok=document.getElementById("form-ok"), data={name:f.name.value,email:f.email.value,subject:f.subject.value,message:f.message.value};
    var done=function(){ok.dataset.i18n="c_ok";ok.textContent=T[document.documentElement.lang].c_ok;ok.classList.add("show");f.reset()};
    var fail=function(){ok.dataset.i18n="c_err";ok.textContent=T[document.documentElement.lang].c_err;ok.style.color="#b42318";ok.classList.add("show")};
    if(!FORM_ENDPOINT){done();return}
    fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(function(r){r.ok?done():fail()}).catch(fail);
  });
});
