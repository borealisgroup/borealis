/* eslint-disable jest/no-disabled-tests */
const stripAnsi = require('strip-ansi');
const launchPuppeteer = require('./launchPuppeteer');

function createHelpers(page) {
  return {
    getText: selector =>
      page.evaluate(sel => {
        return document.querySelector(sel).textContent;
      }, selector),

    hasElement: selector =>
      page.evaluate(sel => {
        return !!document.querySelector(sel);
      }, selector),

    hasClass: (selector, cls) =>
      page.evaluate(
        (sel, cl) => {
          const el = document.querySelector(sel);
          return el && el.classList.contains(cl);
        },
        selector,
        cls
      ),
  };
}

module.exports = async function serveWithPuppeteer(serve, test, noPuppeteer) {
  let activeBrowser;
  let activeChild;

  let notifyUpdate;
  const nextUpdate = () => {
    return new Promise(resolve => {
      notifyUpdate = resolve;
    });
  };

  await new Promise((resolve, reject) => {
    const child = (activeChild = serve());

    const exit = async err => {
      if (activeBrowser) {
        await activeBrowser.close();
        activeBrowser = null;
      }
      if (activeChild) {
        activeChild.stdin.write('close');
        activeBrowser = null;
      }
      reject(err);
    };

    let isFirstMatch = true;
    child.stdout.on('data', async data => {
      data = data.toString();
      try {
        const urlMatch = data.match(/http:\/\/[^/]+\//);
        if (urlMatch && isFirstMatch) {
          isFirstMatch = false;
          let url = urlMatch[0];

          // fix "Protocol error (Page.navigate): Cannot navigate to invalid URL undefined" error
          // when running test in vscode terminal(zsh)
          url = stripAnsi(url);

          if (noPuppeteer) {
            await test({ url });
          } else {
            // start browser
            const { page, browser } = await launchPuppeteer(url);
            activeBrowser = browser;

            const helpers = createHelpers(page);

            await test({
              browser,
              page,
              url,
              nextUpdate,
              helpers,
            });

            await browser.close();
            activeBrowser = null;
          }

          // on appveyor, the spawned server process doesn't exit
          // and causes the build to hang.
          child.stdin.write('close');
          activeChild = null;
          resolve();
        } else if (data.match(/App updated/)) {
          if (notifyUpdate) {
            notifyUpdate(data);
          }
        } else if (data.match(/Failed to compile/)) {
          exit(data);
        }
      } catch (err) {
        exit(err);
      }
    });

    child.on('exit', code => {
      activeChild = null;
      if (code !== 0) {
        exit(`serve exited with code ${code}`);
      }
    });
  });
};
