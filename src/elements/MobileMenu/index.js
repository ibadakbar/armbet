import React from "react"
import style from "./style"
import theme from "../../theme"
import Icon from "../../components/Icon"
import Button from "../../components/Button"
import f from "../../resources/functions"
import { navigate } from "gatsby"
import { useTranslation } from "react-i18next"
import footerStyle from "../Footer/style"
import store from "../../state/createStore"
import { setLanguage } from "../../state/reducer"
import i18n from "../../i18n"
import useForceUpdate from "use-force-update"
var showLanguageMenu = false

const MobileMenu = props => {
  const { show, onClick, mobileMenuHasGone, items, isHomepage } = props
  const update = useForceUpdate()
  const { t } = useTranslation()

  const onItemPress = (item, index) => {
    onClick()
    if (isHomepage) {
      f[item.onClick](theme.content[item.name].ref.current.offsetTop)
    } else {
      navigate("/", {
        state: {
          f: f[item.onClick],
          scroll: theme.content[item.name].ref.current.offsetTop,
        },
      })
    }
  }

  const toggleLanguageMenu = () => {
    showLanguageMenu = !showLanguageMenu
    update()
  }

  return (
    <div style={{ display: mobileMenuHasGone ? "none" : "block" }}>
      <button
        className={style.bg}
        style={{ opacity: show ? 0.6 : 0 }}
        onClick={onClick}
      />
      <div className={style.menu} style={{ right: show ? 0 : -500 }}>
        <div className={style.menuCloseIconContainer + " hPadding"}>
          <Icon
            iconStyle={{ height: "20px" }}
            onClick={onClick}
            icon={theme.content.navBar.closeMenuIcon}
          />
        </div>

        <div className={style.menuItemContainer + " hPadding"}>
          <div style={{ position: "relative" }}>
            <Button
              isText
              onClick={() => {
                toggleLanguageMenu()
              }}
              color="white"
              style={{
                marginTop: theme.spacers[3],
                fontSize: theme.fontSizes[0],
                textTransform: "uppercase",
              }}
            >
              {i18n.language.substring(0, 2)}
              <img
                src={require("../../assets/images/dropdown_arrow_white.png")}
                alt="Dropdown arrow"
                style={{ marginLeft: "7px", marginTop: "9px" }}
                height="7px"
              />
            </Button>
            <div
              className={footerStyle.languagesBox}
              style={{
                boxShadow: "0 3px 4px rgba(0,0,0,.15)",
                height: "300px",
                overflowY: "auto",
                marginTop: "10px",
                marginLeft: "-68px",
                display: showLanguageMenu ? "block" : "none",
                overflow: "scroll",
              }}
            >
              {theme.languages.map((lang, index) => (
                <button
                  className={footerStyle.languageElement}
                  onClick={() => {
                    toggleLanguageMenu()
                    store.dispatch(setLanguage(lang.name))
                  }}
                  style={{
                    textTransform: "capitalize",
                    padding: "10px",
                    textAlign: "center",
                    margin: "auto",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    display: "block",
                  }}
                >
                  {t(lang.text)}
                </button>
              ))}
            </div>
          </div>

          {items.map((item, index) => (
            <Button
              key={index}
              color="white"
              isText={item.type === "text"}
              style={{
                marginTop: theme.spacers[3],
                fontSize: theme.fontSizes[0],
              }}
              onClick={() => {
                onItemPress(item, index)
              }}
            >
              {t(item.text)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
