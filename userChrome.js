// add targetable class to all menuitems and menus
addEventListener(
	"popupshown",
	() => document.querySelectorAll('menuitem, menu').forEach(e => e.classList.add('x-nhnd-menuobject'))
); 

addEventListener(
	"popupshown",
	() => document.querySelectorAll(`
#context-navigation,
#context-sep-navigation,
#context-bookmarkframe,
#context-sendimage,
#context-sep-setbackground,
#context-setDesktopBackground,
#fill-login,
#fill-login-generated-password,
#manage-saved-logins,
#passwordmgr-items-separator,
#fill-login-separator,
#fill-login,
#context-openlinkinusercontext-menu,
#context-bookmarklink,
#context-savelinktopocket,
#appMenuClearRecentHistory,
#appMenuClearRecentHistory + toolbarseparator,
#appMenu-passwords-button,
#context-pocket,
#context-selectall,
#context-sep-selectall,
#context-selectall,
#context-sep-selectall
`).forEach(e => {
	// need to do both or else the popup will sometimes be wrongly offset because
	// it miscompensates for various (missing) elements
	e.setAttribute("hidden", "true")
	e.style.display = "none"
}))
/*
#context-searchselect,
#menu_selectAll,[<0;51;37m]
#menu_selectAll + menuseparator,
#context-selectall,
#context-print-selection,
#context-sep-selectall,
#context-searchselect,
#context-translate-selection,
#context-viewpartialsource-selection,
#context-selectall,
#context-sep-selectall,
#tabContextMenu #context_selectAllTabs,
#tabContextMenu #context_selectAllTabs + menuseparator,
#toolbar-context-menu #toolbar-context-selectAllTabs,
#urlbar menuitem[cmd="cmd_selectAll"],
*/
