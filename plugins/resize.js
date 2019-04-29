// リサイズ
export default ({ store }) => {
  if (process.browser) {
    const resizeFunc = () => {
      store.dispatch('app/updateOnlys', {
        isPc: window.innerWidth >= store.state.breakpoint
      });
    };
    resizeFunc();
    window.addEventListener('resize', resizeFunc);
  }
};
