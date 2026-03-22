/**
 * code-highlight.js — Vanilla JS シンタックスハイライター
 *
 * <code data-lang="html|css|js"> 要素を自動的にハイライトします。
 * 外部ライブラリを一切使わず、正規表現でトークンを分類します。
 */

(function () {
  'use strict';

  /* --- HTMLエスケープ --- */
  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* --- トークンをspanで囲む --- */
  function wrap(cls, text) {
    return '<span class="' + cls + '">' + text + '</span>';
  }

  /* 日本語文字を含むか判定 */
  function hasJapanese(text) {
    return /[\u3000-\u9fff\uff00-\uffef]/.test(text);
  }

  /* ================================================================
     HTML ハイライト
     ================================================================ */
  function highlightHtml(code) {
    var escaped = escapeHtml(code);
    return escaped
      /* コメント <!-- ... --> */
      .replace(/&lt;!--[\s\S]*?--&gt;/g, function (m) {
        return wrap(hasJapanese(m) ? 'hl-comment-ja' : 'hl-comment', m);
      })
      /* タグ全体 */
      .replace(/&lt;\/?[\w-]+(?:\s[^&]*?)?\/?\s*&gt;/g, function (tag) {
        return tag
          /* 属性値 */
          .replace(/(&quot;[^&]*?&quot;)/g, function (v) {
            return wrap('hl-attr-value', v);
          })
          /* 属性名 */
          .replace(/\s([\w-]+)=/g, function (m, name) {
            return ' ' + wrap('hl-attr-name', name) + '=';
          })
          /* タグ名 */
          .replace(/(&lt;\/?)([\w-]+)/g, function (m, bracket, name) {
            return wrap('hl-punctuation', bracket) + wrap('hl-tag', name);
          })
          /* 閉じ括弧 */
          .replace(/(\/?\s*&gt;)/g, function (m) {
            return wrap('hl-punctuation', m);
          });
      });
  }

  /* ================================================================
     CSS ハイライト
     ================================================================ */
  function highlightCss(code) {
    var escaped = escapeHtml(code);
    return escaped
      /* コメント */
      .replace(/\/\*[\s\S]*?\*\//g, function (m) {
        return wrap(hasJapanese(m) ? 'hl-comment-ja' : 'hl-comment', m);
      })
      /* @ルール */
      .replace(/@[\w-]+/g, function (m) {
        return wrap('hl-at-rule', m);
      })
      /* プロパティ: 値; パターン */
      .replace(/([\w-]+)(\s*:\s*)([^;{}]+)(;?)/g, function (m, prop, colon, val, semi) {
        /* コメントspanの中にいる場合はスキップ */
        if (m.indexOf('hl-comment') !== -1) return m;
        return wrap('hl-property', prop)
          + colon
          + wrap('hl-value', val)
          + (semi ? wrap('hl-punctuation', semi) : '');
      })
      /* セレクタ（{ の前） */
      .replace(/^([^{}\/\n][^{}\n]*?)(\s*\{)/gm, function (m, sel, brace) {
        if (sel.indexOf('hl-') !== -1) return m;
        return wrap('hl-selector', sel) + wrap('hl-punctuation', brace);
      })
      /* 閉じ波括弧 */
      .replace(/\}/g, wrap('hl-punctuation', '}'));
  }

  /* ================================================================
     JavaScript ハイライト
     ================================================================ */
  function highlightJs(code) {
    var escaped = escapeHtml(code);
    var tokens = [];
    var index = 0;

    /* トークンを順に切り出す簡易方式 */
    return escaped
      /* 複数行コメント */
      .replace(/\/\*[\s\S]*?\*\//g, function (m) {
        return wrap(hasJapanese(m) ? 'hl-comment-ja' : 'hl-comment', m);
      })
      /* 単一行コメント */
      .replace(/\/\/.*$/gm, function (m) {
        return wrap(hasJapanese(m) ? 'hl-comment-ja' : 'hl-comment', m);
      })
      /* テンプレートリテラル */
      .replace(/`[^`]*`/g, function (m) {
        return wrap('hl-string', m);
      })
      /* 文字列（ダブル・シングル） */
      .replace(/((&quot;|&#39;|')[^&]*?\2)/g, function (m) {
        return wrap('hl-string', m);
      })
      .replace(/('(?:[^'\\]|\\.)*')/g, function (m) {
        if (m.indexOf('hl-') !== -1) return m;
        return wrap('hl-string', m);
      })
      /* キーワード */
      .replace(/\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|this|class|extends|import|export|default|from|async|await|try|catch|finally|throw|typeof|instanceof|in|of|yield|void|delete|null|undefined)\b/g, function (m) {
        return wrap('hl-keyword', m);
      })
      /* 真偽値 */
      .replace(/\b(true|false)\b/g, function (m) {
        return wrap('hl-boolean', m);
      })
      /* 数値 */
      .replace(/\b(\d+\.?\d*)\b/g, function (m) {
        return wrap('hl-number', m);
      })
      /* 関数呼び出し */
      .replace(/([\w$]+)(\s*\()/g, function (m, name, paren) {
        if (name.indexOf('hl-') !== -1) return m;
        if (/^(const|let|var|if|else|for|while|switch|return|function|new|class|catch)$/.test(name)) return m;
        return wrap('hl-function', name) + paren;
      });
  }

  /* ================================================================
     メイン処理
     ================================================================ */
  function highlightAll() {
    var blocks = document.querySelectorAll('code[data-lang]');
    blocks.forEach(function (block) {
      var lang = block.getAttribute('data-lang');
      var raw = block.textContent;

      switch (lang) {
        case 'html':
          block.innerHTML = highlightHtml(raw);
          break;
        case 'css':
          block.innerHTML = highlightCss(raw);
          break;
        case 'js':
        case 'javascript':
          block.innerHTML = highlightJs(raw);
          break;
        default:
          block.innerHTML = escapeHtml(raw);
      }
    });
  }

  /* DOMが読み込まれたら実行 */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightAll);
  } else {
    highlightAll();
  }

  /* 外部からも呼び出せるようにする */
  window.highlightCode = highlightAll;
})();
