/* 句式大师 · Android 桥接层
 * 定义 window.api，将渲染层（app.js）的调用转接到原生 SMBridge（Java）。
 * 这样 app.js 的业务逻辑与 Windows 端完全一致，无需改动。
 */
(function () {
  function jb(method) {
    if (typeof SMBridge === 'undefined') return undefined;
    var args = Array.prototype.slice.call(arguments, 1);
    return SMBridge[method].apply(SMBridge, args);
  }

  // 主题：跟随系统深浅色，变化时通知渲染层
  var themeCbs = [];
  function emitTheme() {
    var d = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    for (var i = 0; i < themeCbs.length; i++) {
      try { themeCbs[i](d); } catch (e) {}
    }
  }
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) mq.addEventListener('change', emitTheme);
    else if (mq.addListener) mq.addListener(emitTheme);
  }

  window.api = {
    readData: function () {
      try { return JSON.parse(jb('readData')); } catch (e) { return null; }
    },
    writeData: function (d) { jb('writeData', JSON.stringify(d)); },
    version: function () { try { return jb('version') || ''; } catch (e) { return ''; } },
    applyTheme: function (mode) { try { jb('applyTheme', mode); } catch (e) {} },
    minimize: function () {},
    close: function () {},
    onNav: function (cb) {},
    onUpdateAvailable: function (cb) {},
    onUpdateProgress: function (cb) {},
    onUpdateDownloaded: function (cb) {},
    onUpdateError: function (cb) {},
    onNag: function (cb) {},
    getUpdateState: function () {
      return { dev: false, available: null, downloaded: null, error: null };
    },
    onTheme: function (cb) {
      if (typeof cb === 'function') {
        themeCbs.push(cb);
        try { cb(!!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)); } catch (e) {}
      }
    },
    notify: function (title, body) { try { jb('notify', title || '', body || ''); } catch (e) {} },
    setAutoLaunch: function (b) { try { jb('setAutoLaunch', !!b); } catch (e) {} },
    exportData: function () {
      return new Promise(function (resolve) {
        window.__smExportResolve = resolve;
        try { jb('exportData'); } catch (e) { resolve({ ok: false, msg: '导出失败' }); }
      });
    },
    importData: function () {
      return new Promise(function (resolve) {
        window.__smImportResolve = resolve;
        try { jb('importDataFlow'); } catch (e) { resolve({ ok: false, msg: '导入失败' }); }
      });
    },
    pickDataDir: function () { return { canceled: true }; },
    dataDir: function () { try { return jb('dataDir') || ''; } catch (e) { return ''; } },
    checkUpdate: function () {
      var v = window.__SM_VER || '1.4.3';
      return { ok: true, hasUpdate: false, latest: v, current: v, notes: '', dev: false };
    },
    quitAndInstall: function () {},
    openExternal: function (url) { try { jb('openExternal', url); } catch (e) {} }
  };

  // 硬件返回键：子页面逐级返回，主页返回 false（由原生关闭应用）
  window.__smBack = function () {
    try {
      if (typeof navStack !== 'undefined' && navStack.length > 0) {
        if (typeof navBack === 'function') { navBack(); return true; }
      }
    } catch (e) {}
    return false;
  };

  // 原生回传：导出/导入结果
  window.__smResolveExport = function (r) {
    if (window.__smExportResolve) { var f = window.__smExportResolve; window.__smExportResolve = null; f(r); }
  };
  window.__smResolveImport = function (r) {
    if (window.__smImportResolve) { var f = window.__smImportResolve; window.__smImportResolve = null; f(r); }
  };

  window.__SM_VER = '1.4.3';
})();
