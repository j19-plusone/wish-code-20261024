const WishLanguage = (() => {
  const names = {en:'English',zh:'中文',de:'Deutsch',it:'Italiano',fr:'Français',es:'Español',pt:'Português',sv:'Svenska',fi:'Suomi',ko:'한국어',ja:'日本語',th:'ไทย',ar:'العربية',fa:'فارسی'};
  const key = 'wishcode-language';
  function saved() { try { return localStorage.getItem(key); } catch { return null; } }
  function initial() {
    const requested = new URLSearchParams(location.search).get('lang');
    const preference = saved();
    return Object.hasOwn(names,requested) ? remember(requested) : Object.hasOwn(names,preference) ? preference : 'en';
  }
  function remember(value) { try { localStorage.setItem(key,value); } catch {} return value; }
  function select(value) {
    remember(value);
    const url = new URL(location.href);
    url.searchParams.set('lang',value);
    history.replaceState(null,'',url);
  }
  function options(current) { return Object.entries(names).map(([key,label])=>'<option value="'+key+'"'+(key===current?' selected':'')+'>'+label+'</option>').join(''); }
  addEventListener('pageshow',event=>{
    const preferred=saved();
    if(event.persisted && Object.hasOwn(names,preferred) && document.documentElement.lang.split('-')[0]!==preferred){
      select(preferred);location.reload();
    }
  });
  return {names,initial,select,options};
})();