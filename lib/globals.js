module.exports = {
  $device: true,
  $app: true,
  $system: true,
  $http: true,
  $network: true,
  $cache: true,
  $thread: true,
  $clipboard: true,
  $l10n: true,

  // 内建函数
  $delay: true,
  $rect: true,
  $size: true,
  $point: true,
  $insets: true,
  $color: true,
  $rgb: true,
  $rgba: true,
  $font: true,
  $range: true,
  $indexPath: true,
  $data: true,
  $icon: true,
  $get_protocol: true,

  // 数据类型
  $props: true,
  $desc: true,

  //常量列表 https://docs.xteko.com/#/data/constant
  $env: true,
  $align: true,
  $contentMode: true,
  $btnType: true,
  $alertActionType: true,
  $zero: true,
  $layout: true,
  $lineCap: true,
  $lineJoin: true,
  $mediaType: true,
  $imgPicker: true,
  $kbType: true,
  $assetMedia: true,
  $pageSize: true,

  $ui: true,

  // https://docs.xteko.com/#/widget/method
  $widget: true,
  // https://docs.xteko.com/#/context/method
  $context: true,

  // https://docs.xteko.com/#/keyboard/method
  $keyboard: true,

  // https://docs.xteko.com/#/file/method
  $file: true,

  // https://docs.xteko.com/#/file/drive
  $drive: true,

  $sqlite: true,

  // https://docs.xteko.com/#/addin/method
  $addin: true,

  // 媒体
  $quicklook: true,
  $photo: true,
  $audio: true,
  $pdf: true,

  //原生 SDK
  $message: true,
  $calendar: true,
  $reminder: true,
  $contact: true,
  $location: true,
  $motion: true,
  $spotlight: true,
  $safari: true,

  // 网络相关
  $socket: true,
  $server: true,

  //扩展接口
  $text: true,
  $editor: true,
  $xml: true,
  $share: true,
  $qrcode: true,
  $browser: true,
  $push: true,
  $archiver: true,
  $detector: true,

  // siri
  $intents: true,

  // ssh
  $ssh: true,

  // Runtime
  $objc: true,
  $define: true,
  $objc_retain: true,
  $objc_release: true,
  $objc_clean: true,
  $block: true,
  $defc: true,

  // https://docs.xteko.com/#/runtime/sugar?id=%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E7%9A%84%E7%B1%BB
  NSDictionary: true,
  NSMutableDictionary: true,
  NSArray: true,
  NSMutableArray: true,
  NSSet: true,
  NSMutableSet: true,
  NSString: true,
  NSMutableString: true,
  NSData: true,
  NSMutableData: true,
  NSNumber: true,
  NSURL: true,
  NSEnumerator: true,

  // 运行其他脚本
  $lua: true,

  console: true
};
