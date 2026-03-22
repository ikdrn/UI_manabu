/**
 * navigation.js — コンポーネントマニフェスト＋ナビゲーション生成
 *
 * 全コンポーネントの一覧をここで管理し、
 * index.htmlの目次や各ページのパンくず・前後リンクを自動生成します。
 */

var COMPONENT_MANIFEST = [
  {
    category: 'ボタン',
    slug: 'buttons',
    description: 'クリックやタップで操作を実行する基本要素',
    items: [
      { name: 'プライマリボタン', file: 'button-primary.html', concepts: ['box-model', 'hover/focus/active', 'transition'] },
      { name: 'ボタンバリエーション', file: 'button-variants.html', concepts: ['視覚的重み付け', 'border vs background'] },
      { name: 'アイコンボタン', file: 'button-icon.html', concepts: ['::before/::after', 'gap', 'aria-label'] },
      { name: 'ローディングボタン', file: 'button-loading.html', concepts: ['@keyframes', 'animation', 'pointer-events'] },
      { name: 'ボタングループ', file: 'button-group.html', concepts: [':first-child/:last-child', 'セグメント制御'] }
    ]
  },
  {
    category: 'トグルスイッチ',
    slug: 'toggles',
    description: 'ON/OFFを切り替える操作要素',
    items: [
      { name: 'iOS風トグル', file: 'toggle-ios.html', concepts: ['appearance: none', 'transform', 'checked'] },
      { name: 'マテリアル風トグル', file: 'toggle-material.html', concepts: ['position: absolute', 'リップル', 'CSS変数'] },
      { name: 'アクセシビリティ特化トグル', file: 'toggle-accessible.html', concepts: ['role=switch', 'aria-checked', 'prefers-reduced-motion'] }
    ]
  },
  {
    category: 'カード',
    slug: 'cards',
    description: '関連する情報をまとめて表示するコンテナ',
    items: [
      { name: 'ブログカード', file: 'card-blog.html', concepts: ['object-fit', 'line-clamp', 'aspect-ratio'] },
      { name: '商品カード', file: 'card-product.html', concepts: ['CSS-only星評価', 'バッジ', 'grid'] },
      { name: 'プロフィールカード', file: 'card-profile.html', concepts: ['border-radius: 50%', 'イニシャル表示'] },
      { name: '料金プランカード', file: 'card-pricing.html', concepts: ['scale()', '視覚的強調', 'リスト装飾'] },
      { name: 'ダッシュボード指標カード', file: 'card-stats.html', concepts: ['tabular-nums', 'トレンド表示', 'clip-path'] }
    ]
  },
  {
    category: 'モーダル・ダイアログ',
    slug: 'modals',
    description: '画面上に重ねて表示するウィンドウ',
    items: [
      { name: '確認ダイアログ', file: 'modal-confirm.html', concepts: ['<dialog>', 'showModal()', 'backdrop'] },
      { name: 'フォームモーダル', file: 'modal-form.html', concepts: ['form method=dialog', 'バリデーション'] },
      { name: 'フルスクリーンモーダル', file: 'modal-fullscreen.html', concepts: ['dvh', 'スクロール制御', 'transform'] },
      { name: 'ボトムシート', file: 'modal-bottom-sheet.html', concepts: ['ドラッグ操作', 'touch-action', 'スナップ'] }
    ]
  },
  {
    category: 'フォーム入力',
    slug: 'forms',
    description: 'ユーザーからの入力を受け取る要素',
    items: [
      { name: 'テキスト入力', file: 'input-text.html', concepts: ['<label>', 'フローティングラベル', ':valid/:invalid'] },
      { name: '検索入力', file: 'input-search.html', concepts: ['アイコン付き入力', 'デバウンス', 'ドロップダウン'] },
      { name: 'パスワード入力', file: 'input-password.html', concepts: ['表示/非表示', '強度メーター'] },
      { name: 'テキストエリア＋文字数', file: 'textarea-counter.html', concepts: ['自動リサイズ', 'aria-live'] },
      { name: 'セレクト/ドロップダウン', file: 'select-dropdown.html', concepts: ['appearance: none', 'カスタムドロップダウン'] },
      { name: '日付ピッカー', file: 'date-picker.html', concepts: ['CSS Grid', 'Date API'] }
    ]
  },
  {
    category: 'ナビゲーション',
    slug: 'navigation',
    description: 'ページ間・セクション間の移動を助ける要素',
    items: [
      { name: 'トップナビバー', file: 'navbar-top.html', concepts: ['position: sticky', 'backdrop-filter', 'ハンバーガー'] },
      { name: 'サイドバーナビ', file: 'sidebar-nav.html', concepts: ['折りたたみ', '<details>', 'スライドイン'] },
      { name: 'パンくずリスト', file: 'breadcrumb.html', concepts: ['<ol>', '::before', 'text-overflow'] },
      { name: 'タブ切替', file: 'tabs.html', concepts: ['role=tablist', 'aria-selected', 'スクロール'] },
      { name: 'ページネーション', file: 'pagination.html', concepts: ['省略記号', 'aria-current'] },
      { name: 'モバイル下部ナビ', file: 'bottom-nav-mobile.html', concepts: ['position: fixed', 'safe-area-inset'] }
    ]
  },
  {
    category: 'テーブル',
    slug: 'tables',
    description: '表形式でデータを整理して表示する',
    items: [
      { name: '基本テーブル', file: 'table-basic.html', concepts: ['<table>セマンティクス', 'border-collapse', 'ストライプ'] },
      { name: 'ソート可能テーブル', file: 'table-sortable.html', concepts: ['Array.sort()', 'aria-sort', 'DOM操作'] },
      { name: 'レスポンシブテーブル', file: 'table-responsive.html', concepts: ['overflow-x', 'カード化', '列優先度'] }
    ]
  },
  {
    category: '通知・フィードバック',
    slug: 'feedback',
    description: 'ユーザーに状態や結果を伝える要素',
    items: [
      { name: 'トースト通知', file: 'toast.html', concepts: ['position: fixed', '@keyframes', 'aria-live'] },
      { name: 'アラートバナー', file: 'alert-banner.html', concepts: ['role=alert', '重要度レベル', 'CSS変数'] },
      { name: 'バッジ・カウンター', file: 'badge.html', concepts: ['position: absolute', 'transform', 'min-width'] },
      { name: 'プログレスバー', file: 'progress-bar.html', concepts: ['<progress>', 'conic-gradient', 'SVG'] },
      { name: 'スケルトンローダー', file: 'skeleton-loader.html', concepts: ['シマーアニメーション', 'background-position'] }
    ]
  },
  {
    category: 'リスト',
    slug: 'lists',
    description: '複数の項目を順に並べて表示する',
    items: [
      { name: 'インタラクティブリスト', file: 'list-simple.html', concepts: ['選択状態', 'キーボード操作'] },
      { name: 'タイムライン', file: 'timeline.html', concepts: ['::before/::after', '交互配置'] },
      { name: 'アコーディオン/FAQ', file: 'accordion-faq.html', concepts: ['<details>', 'grid-template-rows'] }
    ]
  },
  {
    category: 'ツールチップ',
    slug: 'tooltips',
    description: '補足情報をホバーやクリックで表示する',
    items: [
      { name: 'ツールチップ', file: 'tooltip.html', concepts: ['::after三角形', '4方向配置', 'visibility'] },
      { name: 'ポップオーバー', file: 'popover.html', concepts: ['Popover API', '衝突検出', 'クリック外閉じ'] }
    ]
  },
  {
    category: 'スライダー・カルーセル',
    slug: 'sliders',
    description: 'コンテンツをスライドして切り替える',
    items: [
      { name: '画像カルーセル', file: 'slider-image.html', concepts: ['scroll-snap', 'IntersectionObserver'] },
      { name: 'テスティモニアル', file: 'slider-testimonial.html', concepts: ['transform: translateX', 'タッチスワイプ'] },
      { name: 'レンジスライダー', file: 'slider-range.html', concepts: ['input[type=range]', 'デュアルレンジ'] }
    ]
  },
  {
    category: 'ドラッグ&ドロップ',
    slug: 'dnd',
    description: '要素をドラッグして操作するインタラクション',
    items: [
      { name: 'リスト並び替え', file: 'dnd-sortable.html', concepts: ['draggable', 'dragstart/drop', 'insertBefore'] },
      { name: 'カンバンボード', file: 'dnd-kanban.html', concepts: ['複数ドロップゾーン', 'dataTransfer'] },
      { name: 'ファイルドロップ', file: 'dnd-file-upload.html', concepts: ['FileReader', 'dragenter/dragleave'] }
    ]
  },
  {
    category: 'チャート・データ可視化',
    slug: 'charts',
    description: 'データをグラフやメーターで視覚化する',
    items: [
      { name: '棒グラフ', file: 'chart-bar.html', concepts: ['CSS height', 'flex-end', 'data-*属性'] },
      { name: 'ドーナツグラフ', file: 'chart-donut.html', concepts: ['conic-gradient', 'CSS変数', '凡例'] },
      { name: '折れ線グラフ', file: 'chart-line.html', concepts: ['SVG polyline', 'viewBox', 'stroke-dasharray'] },
      { name: 'ゲージメーター', file: 'chart-gauge.html', concepts: ['conic-gradient + mask', 'rotate', '針アニメ'] }
    ]
  },
  {
    category: 'その他',
    slug: 'extras',
    description: '実務でよく使われるその他のパターン',
    items: [
      { name: 'アバタースタック', file: 'avatar-stack.html', concepts: ['負マージン', 'z-index', '+N表示'] },
      { name: 'ステップフォーム', file: 'stepper-wizard.html', concepts: ['counter()', 'コネクタライン', 'fieldset'] },
      { name: '空状態表示', file: 'empty-state.html', concepts: ['CSS-onlyイラスト', 'メッセージ階層'] }
    ]
  }
];

/**
 * 全コンポーネントをフラットな配列で取得する
 * 各要素に category, slug, flatIndex を追加
 */
function getAllComponents() {
  var all = [];
  COMPONENT_MANIFEST.forEach(function (cat) {
    cat.items.forEach(function (item) {
      all.push({
        name: item.name,
        file: item.file,
        category: cat.category,
        slug: cat.slug,
        concepts: item.concepts
      });
    });
  });
  return all;
}

/**
 * 現在のページの前後のコンポーネントを返す
 */
function getNavLinks(currentFile) {
  var all = getAllComponents();
  var idx = -1;
  for (var i = 0; i < all.length; i++) {
    if (all[i].file === currentFile) {
      idx = i;
      break;
    }
  }
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null
  };
}

/**
 * パンくずリストを生成
 */
function renderBreadcrumb(container, currentFile) {
  var all = getAllComponents();
  var current = null;
  for (var i = 0; i < all.length; i++) {
    if (all[i].file === currentFile) {
      current = all[i];
      break;
    }
  }
  if (!current || !container) return;

  container.innerHTML =
    '<a href="../../index.html">ホーム</a>' +
    '<span class="breadcrumb-separator">/</span>' +
    '<a href="../../index.html#' + current.slug + '">' + current.category + '</a>' +
    '<span class="breadcrumb-separator">/</span>' +
    '<span class="breadcrumb-current">' + current.name + '</span>';
}

/**
 * 前後ナビゲーションを生成
 */
function renderComponentNav(container, currentFile) {
  var links = getNavLinks(currentFile);
  if (!container) return;

  var html = '';

  if (links.prev) {
    html += '<a href="' + (links.prev.slug === getCurrentSlug(currentFile) ? '' : '../' + links.prev.slug + '/') + links.prev.file + '" class="nav-link">' +
      '<span class="nav-link-label">前へ</span>' +
      '<span class="nav-link-title">' + links.prev.name + '</span>' +
      '</a>';
  } else {
    html += '<span></span>';
  }

  if (links.next) {
    html += '<a href="' + (links.next.slug === getCurrentSlug(currentFile) ? '' : '../' + links.next.slug + '/') + links.next.file + '" class="nav-link nav-link--next">' +
      '<span class="nav-link-label">次へ</span>' +
      '<span class="nav-link-title">' + links.next.name + '</span>' +
      '</a>';
  }

  container.innerHTML = html;
}

function getCurrentSlug(currentFile) {
  var all = getAllComponents();
  for (var i = 0; i < all.length; i++) {
    if (all[i].file === currentFile) {
      return all[i].slug;
    }
  }
  return '';
}

/* ページ初期化 */
function initNavigation() {
  /* ファイル名を現在のURLから取得 */
  var path = window.location.pathname;
  var filename = path.split('/').pop();

  var breadcrumb = document.querySelector('.breadcrumb');
  var nav = document.querySelector('.component-nav');

  if (breadcrumb) renderBreadcrumb(breadcrumb, filename);
  if (nav) renderComponentNav(nav, filename);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}
