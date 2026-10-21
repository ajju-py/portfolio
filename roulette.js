/**
 * Ajay Tandale — Unified Portfolio Roulette Engine
 * Implements non-repeating random portfolio selection with sessionStorage persistence,
 * same-origin seamless mount, automated failure detection, and developer testing HUD.
 * (Active pool: 6 verified versions — V3 excluded per requirements)
 */

(function () {
  'use strict';

  const STORAGE_KEY_LAST = 'ajay_portfolio_previous_version';
  const STORAGE_KEY_FAILED = 'ajay_portfolio_failed_versions';

  // 6 Verified, functional portfolio designs (V3 excluded)
  const VERSIONS = [
    { id: 'v1', name: 'Alien Void 3D Space', desc: 'Spaceman 3D Canvas • React 19' },
    { id: 'v2', name: 'Professional Red Hat Cloud Profile', desc: 'Red Hat Certified Cloud Engineer • React 18' },
    { id: 'v4', name: 'Cyborg Transformation', desc: 'Interactive Cyborg 3D • React 18' },
    { id: 'v5', name: 'Developer Room 2025', desc: '3D Isometric Developer Room • React 19' },
    { id: 'v6', name: 'Mechanical Keycaps & Arena', desc: '3D Mechanical Keyboard • Next.js 16' },
    { id: 'v7', name: 'Island Island Flier', desc: 'Sky Island & Plane • React 18' },
  ];

  let currentVersion = null;
  let loadTimeout = null;

  // Retrieve temporary failed versions from session
  function getFailedVersions() {
    try {
      const data = sessionStorage.getItem(STORAGE_KEY_FAILED);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function markVersionFailed(vId) {
    try {
      const failed = getFailedVersions();
      if (!failed.includes(vId)) {
        failed.push(vId);
        sessionStorage.setItem(STORAGE_KEY_FAILED, JSON.stringify(failed));
      }
    } catch (e) {}
  }

  // Clear failed status when user manually selects
  function clearFailedVersion(vId) {
    try {
      let failed = getFailedVersions();
      failed = failed.filter((id) => id !== vId);
      sessionStorage.setItem(STORAGE_KEY_FAILED, JSON.stringify(failed));
    } catch (e) {}
  }

  /**
   * Core non-repeating random selection algorithm across 6 active versions
   */
  function pickNextVersion(excludeVersionId = null) {
    // 1. Check for manual URL override: ?v=v2 or ?version=4
    const urlParams = new URLSearchParams(window.location.search);
    const forced = urlParams.get('v') || urlParams.get('version');
    if (forced) {
      const normalized = forced.toLowerCase().startsWith('v') ? forced.toLowerCase() : `v${forced}`;
      if (normalized === 'v3') {
        console.warn('[ROULETTE] V3 requested via query param; redirecting to valid version V2.');
        return 'v2';
      }
      const found = VERSIONS.find((v) => v.id === normalized);
      if (found) {
        return found.id;
      }
    }

    // 2. Read previous version from sessionStorage
    let lastVersion = excludeVersionId || sessionStorage.getItem(STORAGE_KEY_LAST);
    if (lastVersion === 'v3') {
      sessionStorage.removeItem(STORAGE_KEY_LAST);
      lastVersion = null;
    }
    const failedVersions = getFailedVersions();

    // 3. Filter candidates: exclude previous and exclude failed
    let candidates = VERSIONS.map((v) => v.id).filter(
      (id) => id !== lastVersion && !failedVersions.includes(id)
    );

    // If all alternative candidates are exhausted, relax the exclusion
    if (candidates.length === 0) {
      candidates = VERSIONS.map((v) => v.id).filter((id) => !failedVersions.includes(id));
    }

    // If still empty (all marked failed), reset failed list
    if (candidates.length === 0) {
      sessionStorage.removeItem(STORAGE_KEY_FAILED);
      candidates = VERSIONS.map((v) => v.id).filter((id) => id !== lastVersion);
      if (candidates.length === 0) {
        candidates = VERSIONS.map((v) => v.id);
      }
    }

    // 4. Uniformly choose one from the remaining candidates
    const chosenIndex = Math.floor(Math.random() * candidates.length);
    const chosenId = candidates[chosenIndex];

    return chosenId;
  }

  /**
   * Mounts the selected portfolio in the viewport
   */
  function mountPortfolio(vId, isManualSwitch = false) {
    // Guard against V3 or invalid version IDs
    if (vId === 'v3' || !VERSIONS.some((v) => v.id === vId)) {
      console.warn(`[ROULETTE] Invalid or disabled version '${vId}' detected. Falling back to V2.`);
      vId = 'v2';
    }

    currentVersion = vId;
    sessionStorage.setItem(STORAGE_KEY_LAST, vId);

    const frame = document.getElementById('portfolio-frame');
    const indicator = document.getElementById('transition-indicator');
    const versionLabel = document.getElementById('hud-current-version');
    const selectElem = document.getElementById('hud-select');

    if (indicator) indicator.classList.add('loading');
    if (versionLabel) {
      const vObj = VERSIONS.find((v) => v.id === vId);
      versionLabel.textContent = `${vId.toUpperCase()}: ${vObj ? vObj.name : ''}`;
    }
    if (selectElem) selectElem.value = vId;

    const miniBadge = document.getElementById('roulette-mini-badge');
    if (miniBadge) {
      miniBadge.innerHTML = `<span>🎲</span> <span>${vId.toUpperCase()}</span>`;
    }

    // Build target same-origin subpath
    const targetUrl = `/portfolios/${vId}/`;

    // Clear previous timeout
    if (loadTimeout) clearTimeout(loadTimeout);

    // Set fallback timeout (if frame hangs for > 10s)
    loadTimeout = setTimeout(() => {
      console.warn(`[ROULETTE] Portfolio ${vId} load timed out. Triggering fallback...`);
      markVersionFailed(vId);
      const fallbackId = pickNextVersion(vId);
      if (fallbackId !== vId) {
        mountPortfolio(fallbackId);
      }
    }, 10000);

    // Update iframe source
    frame.src = targetUrl;

    // Handle frame load
    frame.onload = function () {
      if (loadTimeout) clearTimeout(loadTimeout);
      if (indicator) indicator.classList.remove('loading');

      try {
        if (frame.contentDocument) {
          const docTitle = frame.contentDocument.title;
          if (docTitle) {
            document.title = `${docTitle} • [Roulette: ${vId.toUpperCase()}]`;
          }
        }
      } catch (e) {
        document.title = `Ajay Tandale Portfolio • [Roulette: ${vId.toUpperCase()}]`;
      }
    };

    frame.onerror = function () {
      if (loadTimeout) clearTimeout(loadTimeout);
      console.error(`[ROULETTE] Error loading ${vId}. Selecting alternate...`);
      markVersionFailed(vId);
      const fallbackId = pickNextVersion(vId);
      mountPortfolio(fallbackId);
    };
  }

  /**
   * Initialize HUD controls and listeners
   */
  function initControls() {
    const hud = document.getElementById('roulette-hud');
    const miniBadge = document.getElementById('roulette-mini-badge');
    const rerollBtn = document.getElementById('hud-reroll-btn');
    const directBtn = document.getElementById('hud-direct-btn');
    const selectElem = document.getElementById('hud-select');
    const closeBtn = document.getElementById('hud-close-btn');

    // Populate dropdown with the 6 active versions
    if (selectElem) {
      selectElem.innerHTML = '';
      VERSIONS.forEach((v) => {
        const opt = document.createElement('option');
        opt.value = v.id;
        opt.textContent = `${v.id.toUpperCase()} — ${v.name}`;
        selectElem.appendChild(opt);
      });

      selectElem.addEventListener('change', function () {
        clearFailedVersion(this.value);
        mountPortfolio(this.value, true);
      });
    }

    if (rerollBtn) {
      rerollBtn.addEventListener('click', function () {
        const nextId = pickNextVersion(currentVersion);
        mountPortfolio(nextId);
      });
    }

    if (directBtn) {
      directBtn.addEventListener('click', function () {
        if (currentVersion) {
          window.open(`/portfolios/${currentVersion}/`, '_blank');
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        hud.style.display = 'none';
        miniBadge.style.display = 'flex';
      });
    }

    if (miniBadge) {
      miniBadge.addEventListener('click', function () {
        miniBadge.style.display = 'none';
        hud.style.display = 'flex';
      });
    }
  }

  // Bootstrap on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initControls();
    const initialVersion = pickNextVersion();
    console.log(`[ROULETTE] Session initialized. Selected version: ${initialVersion.toUpperCase()}`);
    mountPortfolio(initialVersion);
  });
})();
