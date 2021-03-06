var graphite_url = "http://localhost:8013";

var dashboards =
[
  { "name": "全体",
    "refresh": 360000,
    "metrics":
    [
      {
        "alias": "ディズニーランド",
        "target": "aliasByNode(disney.land.*.*,3)",
        //"description": "Wait times (min)",  // enter your metric description here
        //"summary": "last",  // available options: [sum|min|max|avg|last|<function>]
        //"summary_formatter": d3.format(",f"), // customize your summary format function. see d3 formatting docs for more options
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0,
      },
      {
        "alias": "ディズニーシー",
        "target": "aliasByNode(disney.sea.*.*,3)",
        //"description": "Wait times (min)",  // enter your metric description here
        //"summary": "last",  // available options: [sum|min|max|avg|last|<function>]
        //"summary_formatter": d3.format(",f"), // customize your summary format function. see d3 formatting docs for more options
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
    ]
  },
  { "name": "平均・傾向",
    "refresh": 360000,
    "metrics":
    [
      {
        "alias": "1日移動平均線",
        "renderer": "line",
        "target": [
          'alias(movingAverage(maxSeries(disney.sea.*.*),24),"TDS")',
          'alias(movingAverage(maxSeries(disney.land.*.*),24),"TDL")'
        ],
        /*"targets": [
          {'target': 'movingAverage(maxSeries(disney.sea.*.*),24)',
           'color':'rgba(255,0,0,0.7)', "renderer":"area", 'alias': 'Foo'},
          {"target": "movingAverage(maxSeries(disney.land.*.*),24)", "color": "rgba(0,255,0,0.7)","renderer":"area"},
        ],*/
        "description": "各時間帯の最大待ち時間を利用した1日移動平均線",
        "colspan": 3,
        "interpolation": "linear",
        "unstack": true,
        "null_as": 0,
      },
/*
      {
        "alias": "予測",
        "renderer": "line",
        "target": [
          'alias(holtWintersForecast(maxSeries(disney.sea.*.*)),"予測値")',
          'alias(holtWintersAberration(maxSeries(disney.sea.*.*)),"予測違い")',
        ],
        "colspan": 3,
        "interpolation": "linear",
        "unstack": true,
        "null_as": 0,
      },
*/
    ]
  },
  { "name": "ディズニーランド",
    "refresh": 360000,
    "metrics": 
   [
      {
        "alias": "アドベンチャーランド",
        "target": "aliasByNode(disney.land.adventure_land.*,3)",
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
      {
        "alias": "ウェスタンランド",
        "target": "aliasByNode(disney.land.western_land.*,3)",
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
      {
        "alias": "トゥモローランド",
        "target": "aliasByNode(disney.land.tomorrow_land.*,3)",
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
   ]
  },
  { "name": "ディズニーシー",
    "refresh": 360000,
    "metrics": 
   [
      {
        "alias": "アメリカン・ウォーターフロント",
        "target": "aliasByNode(disney.sea.american_waterfront.*,3)",
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
      {
        "alias": "ミステリアス・アイランド",
        "target": "aliasByNode(disney.sea.mysterious_island.*,3)",
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
      {
        "alias": "ポート・ディスカバリー",
        "target": "aliasByNode(disney.sea.port_discovery.*,3)",
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
      {
        "alias": "ロスト・リバー・デルタ",
        "target": "aliasByNode(disney.sea.lost_river_delta.*,3)",
        "colspan": 3,
        "interpolation": "linear",
        "stroke_width": 2,
        "stroke": true,
        "renderer": "line",
        "unstack": true,
        "null_as": 0
      },
   ]
  },
  {"name":"About",
   "refresh":0,
   "description": "#東京ディズニーランド・シー待ち時間"
     +"\n<p>当サイトは過去の1周間分（2014/11/15から）の待ち時間情報を表示する。 対象乗り物は、サイトの担当者が好きな乗り物とした。</p>"
     +"\n<p><strong>注意：当サイトは東京にディズニーランド、東京ディズニーシー、東京ディズニーリゾートと関係ない。</strong></p>"
     +"\n<a class='btn btn-large btn-warning' href='https://github.com/yasny/giraffe'><i class='icon-github icon-large'></i> View frontend on github</a>"
     +"\n<a class='btn btn-large btn-warning' href='https://github.com/yasny/disney-wait-time-spider'><i class='icon-github icon-large'></i> View spider on github</a>"
     +"\n##<i class='icon-file'></i> Changelog"
     +"\n<ul><li>2014-11-04: 最初版</li><li>2014-11-09: グラフをRickshaw.jsに変更した。</li><li>2014-11-15: バックエンドをsqliteに変更した。それから、一時間おきに自動更新にした。</li>"
     +"<li>2014-11-16: サイトをCherryPyに変更した。最新データをデータベースから持ってくるように変更した。</li>"
     +"<li>2014-11-18: 平均待ち時間を追加した（グラフの赤い、青い線）。平均値は0分を除き全乗り物の1時間平均</li>"
     +"<li>2014-11-22: 過去日間分を変更できるようになった。</li>"
     +"<li>2015-05-22: GPSチェック対応</li>"
     +"<li>2015-05-23: バックエンドを<a href=\"https://graphite.readthedocs.org/en/latest/\">Graphite</a>に切り替え、フロントエンドを<a href=\"https://github.com/kenhub/giraffe\">Giraffe</a>のフォークにした。</li>"
     +"<li>2015-06-14: データ取得処理を完全作りなおした。Pythonの<a href=\"http://scrapy.org/\">Scrapy</a>フレームワークを利用してスパイダーを実装した。</li></ul>",
   "metrics": [],
  },
];

var scheme = [
              '#1f77b4',
              '#ff7f0e',
              '#2ca02c',
              '#d62728',
              '#9467bd',
              '#8c564b',
              '#e377c2',
              '#7f7f7f',
              '#bcbd22',
              ];

function relative_period() { return (typeof period == 'undefined') ? 1 : parseInt(period / 7) + 1; }
function entire_period() { return (typeof period == 'undefined') ? 1 : period; }
function at_least_a_day() { return entire_period() >= 1440 ? entire_period() : 1440; }

//function stroke(color) { return color.brighter().brighter() }
function format_pct(n) { return d3.format(",f")(n) + "%" }

