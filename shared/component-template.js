/**
 * component-template.js — コンポーネントページ共通のインタラクション
 *
 * - コードタブの切り替え
 * - コピーボタン
 * - プレビューコンテナのリサイズ表示
 */

(function () {
  'use strict';

  /* ================================================================
     コードタブ切り替え
     ================================================================ */
  function initCodeTabs() {
    document.querySelectorAll('.code-tabs').forEach(function (tabBar) {
      var tabs = tabBar.querySelectorAll('.code-tab');
      var wrapper = tabBar.nextElementSibling;
      if (!wrapper) return;

      var panels = wrapper.querySelectorAll('.code-panel');

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var target = tab.getAttribute('data-tab');

          /* タブのアクティブ状態を切り替え */
          tabs.forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');

          /* パネルの表示を切り替え */
          panels.forEach(function (p) {
            p.classList.toggle('active', p.getAttribute('data-panel') === target);
          });
        });
      });
    });
  }

  /* ================================================================
     コピーボタン
     ================================================================ */
  function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var codeBlock = btn.closest('.code-block-wrapper').querySelector('code');
        if (!codeBlock) return;

        var text = codeBlock.textContent;

        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = 'コピー済み';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = 'コピー';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(function () {
          /* フォールバック: 古いブラウザ対応 */
          var textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          btn.textContent = 'コピー済み';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = 'コピー';
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  }

  /* ================================================================
     初期化
     ================================================================ */
  function init() {
    initCodeTabs();
    initCopyButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
